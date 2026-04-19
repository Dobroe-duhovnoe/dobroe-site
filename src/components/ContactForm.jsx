import React, { useState, useEffect } from 'react';

const ContactForm = ({ type = 'prayer' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const inputClassName =
    'custom-focus w-full rounded-lg px-4 py-3 text-gray-700 placeholder-gray-500';
  const buttonClassName =
    'focus:ring-opacity-50 w-full cursor-pointer rounded-lg bg-[var(--color-button-primary)] px-4 py-3 font-semibold text-white transition-colors duration-200 hover:bg-[var(--color-button-hover)] focus:ring-2 focus:ring-[var(--color-button-primary)] focus:outline-none';

  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => {
        setShowSuccessModal(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showSuccessModal]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_URL =
      import.meta.env.VITE_API_URL ||
      'https://api-bot-dobroe-duhovnoe.vercel.app';
    const url = `${API_URL}/sendToTelegram`;

    const data = {
      type,
      text: `Имя: ${formData.name}\nТелефон: ${formData.phone}\nСообщение: ${formData.message}`,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setShowSuccessModal(true);
        setFormData({ name: '', phone: '', message: '' });
        console.log('Сообщение отправлено');
      } else {
        console.error('Telegram API error:', result);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleInputChange}
            required
            className={inputClassName}
          />
        </div>

        <div className="flex flex-col gap-1">
          <input
            type="tel"
            name="phone"
            placeholder="Телефон (по желанию)"
            value={formData.phone}
            onChange={handleInputChange}
            className={inputClassName}
          />
        </div>

        <div className="flex flex-col gap-1">
          <textarea
            name="message"
            placeholder="Сообщение"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            className={`${inputClassName} resize-none`}
          />
        </div>

        <button type="submit" className={buttonClassName}>
          Отправить
        </button>

        <div className="flex justify-center">
          <p className="w-5/6 text-center text-sm text-gray-500">
            Нажимая кнопку "Отправить", вы соглашаетесь с политикой
            конфиденциальности
          </p>
        </div>
      </form>

      {showSuccessModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'var(--color-overlay)' }}
        >
          <div className="animate-bounce-in mx-4 max-w-sm rounded-xl bg-white p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-center text-lg font-semibold text-[var(--color-primary-dark)]">
              Сообщение отправлено!
            </h3>
            <p className="text-center text-sm text-gray-600">
              Мы свяжемся с вами в ближайшее время
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
