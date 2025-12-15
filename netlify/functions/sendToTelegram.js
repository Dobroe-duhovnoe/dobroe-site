const axios = require('axios');

const API_URL = 'https://api-bot-dobroe-duhovnoe.vercel.app/sendToTelegram';

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { text, type } = JSON.parse(event.body);

    if (!text || !type) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify({ error: 'Invalid payload: text and type are required' })
      };
    }

    // Отправляем запрос на Vercel API
    const response = await axios.post(API_URL, {
      text,
      type
    }, {
      timeout: 10000
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // CORS
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({ success: true })
    };

  } catch (error) {
    console.error('Error:', error.response?.data || error.message);

    return {
      statusCode: error.response?.status || 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({
        error: 'Ошибка отправки',
        details: error.response?.data || error.message
      })
    };
  }
};
