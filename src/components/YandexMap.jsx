import React from 'react';

const YandexMap = ({ className = '' }) => {
  // Создаем уникальный ключ для каждого экземпляра карты
  const mapKey = React.useMemo(
    () => `yandex-map-${Date.now()}-${Math.random()}`,
    []
  );

  return (
    <div className={`relative w-full ${className}`}>
      {/* Контейнер для iframe с фиксированной высотой */}
      <div
        className="relative w-full overflow-hidden rounded-lg"
        style={{ height: '341px' }}
      >
        <iframe
          key={mapKey}
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A348ebe3023cf11ae87698f7138f4a13be3d7333d3bf1cc9a6ca5c8f67eaaefda&amp;source=constructor"
          className="absolute top-0 left-0 h-full w-full border-0"
          title="Карта расположения церкви"
          loading="lazy"
          allowFullScreen
          style={{
            pointerEvents: 'auto', // Убедимся, что карта интерактивна только когда видима
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
};

export default YandexMap;
