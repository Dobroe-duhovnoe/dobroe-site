import React from 'react';

const YandexMap = ({ className = '' }) => {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Контейнер для iframe с фиксированной высотой */}
      <div
        className="relative w-full overflow-hidden rounded-lg"
        style={{ height: '341px' }}
      >
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A348ebe3023cf11ae87698f7138f4a13be3d7333d3bf1cc9a6ca5c8f67eaaefda&amp;source=constructor"
          className="absolute top-0 left-0 h-full w-full border-0"
          title="Карта расположения церкви"
          loading="lazy"
          allowFullScreen
        />
      </div>

      {/* Скрипт для дополнительной функциональности карты */}
      <script
        type="text/javascript"
        charSet="utf-8"
        async
        src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A348ebe3023cf11ae87698f7138f4a13be3d7333d3bf1cc9a6ca5c8f67eaaefda&amp;width=926&amp;height=706&amp;lang=ru_RU&amp;scroll=true"
      />
    </div>
  );
};

export default YandexMap;
