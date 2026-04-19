<?php
// Simple Telegram forwarder for reg.ru hosting (PHP 8+).
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');

// Convert warnings/notices to exceptions to return JSON instead of HTML
set_error_handler(function ($severity, $message, $file, $line) {
    throw new ErrorException($message, 0, $severity, $file, $line);
});

try {
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        // Health check: should return 200 with method info and env presence.
        $botToken = getenv('BOT_TOKEN') ? 'set' : 'missing';
        $chatId = getenv('CHAT_ID') ? 'set' : 'missing';
        echo json_encode([
            'status' => 'ok',
            'method' => 'GET',
            'env' => ['BOT_TOKEN' => $botToken, 'CHAT_ID' => $chatId],
        ]);
        exit;
    }

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit;
    }

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        exit;
    }

    $rawBody = file_get_contents('php://input');
    $data = json_decode($rawBody, true);

    if (!$data || empty($data['text']) || empty($data['type'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid payload']);
        exit;
    }

    // Expect values to be provided via environment (recommended) or via .user.ini.
    $botToken = getenv('BOT_TOKEN') ?: '';
    $chatId = getenv('CHAT_ID') ?: '';
    $threadIds = [
        'dependents' => getenv('MESSAGE_THREAD_ID_DEPENDENTS') ?: null,
        'prayer' => getenv('MESSAGE_THREAD_ID_PRAYER') ?: null,
    ];

    if (!$botToken || !$chatId) {
        http_response_code(500);
        echo json_encode(['error' => 'Telegram credentials are missing']);
        exit;
    }

    $messageThreadId = $threadIds[$data['type']] ?? null;

    $payload = [
        'chat_id' => $chatId,
        'text' => $data['text'],
        'parse_mode' => 'HTML',
    ];

    if ($messageThreadId) {
        $payload['message_thread_id'] = $messageThreadId;
    }

    $ch = curl_init("https://api.telegram.org/bot{$botToken}/sendMessage");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);

    $responseBody = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($responseBody === false) {
        http_response_code(500);
        echo json_encode(['error' => 'Send failed', 'details' => $curlError]);
        exit;
    }

    $telegramResponse = json_decode($responseBody, true);
    $ok = is_array($telegramResponse) && ($telegramResponse['ok'] ?? false) === true;

    if ($httpCode >= 200 && $httpCode < 300 && $ok) {
        echo json_encode(['success' => true]);
        exit;
    }

    http_response_code(500);
    echo json_encode([
        'error' => 'Telegram API error',
        'details' => $telegramResponse ?: $responseBody,
    ]);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Server error',
        'details' => $e->getMessage(),
    ]);
}

