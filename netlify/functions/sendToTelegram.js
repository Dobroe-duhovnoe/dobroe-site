const axios = require('axios');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  const BOT_TOKEN = process.env.BOT_TOKEN;
  const CHAT_ID = process.env.CHAT_ID;
  const MESSAGE_THREAD_ID = {
    dependents: process.env.MESSAGE_THREAD_ID_DEPENDENTS,
    prayer: process.env.MESSAGE_THREAD_ID_PRAYER
  };

  try {
    const { text, type } = JSON.parse(event.body);


    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: text,
      message_thread_id: MESSAGE_THREAD_ID[type],
      parse_mode: 'HTML'
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
      statusCode: 500,
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
