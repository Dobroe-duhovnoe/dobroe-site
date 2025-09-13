import React from 'react';
import { useRadioPlayer } from '../contexts/radioPlayerContext';

const RadioPlayer = ({ onClose }) => {
  const { isPlaying, togglePlay, volume, adjustVolume } = useRadioPlayer();

  return (
    <div className="relative flex h-full flex-col items-center justify-center p-3">
      {/* Крестик закрытия */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-2 right-3 cursor-pointer text-lg font-bold text-white hover:text-gray-300"
      >
        ✕
      </button>

      {/* Название радиостанции */}
      <p className="mb-2 text-center text-sm text-white">
        Доброе Духовное Радио
      </p>

      {/* Кнопки управления */}
      <div className="flex items-center gap-3">
        {/* Кнопка Play/Pause */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-200"
        >
          {isPlaying ? (
            <span className="-mt-0.5 text-lg text-[var(--color-primary-dark)]">
              ⏸
            </span>
          ) : (
            <span className="ml-0.5 text-lg text-[var(--color-primary-dark)]">
              ▶
            </span>
          )}
        </button>

        {/* Управление громкостью */}
        <div className="flex items-center gap-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              adjustVolume(volume - 0.1);
            }}
            className="cursor-pointer text-sm text-white hover:text-gray-200"
          >
            🔉
          </button>
          <div
            className="group relative h-6 w-20 cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="range"
              min="0"
              max="100"
              value={volume * 100}
              onChange={(e) => {
                const newVolume = Number(e.target.value) / 100;
                adjustVolume(newVolume);
              }}
              className="h-2 w-full cursor-pointer appearance-none rounded bg-white"
              style={{
                background: `linear-gradient(to right, var(--color-accent-yellow) 0%, var(--color-accent-yellow) ${volume * 100}%, white ${volume * 100}%, white 100%)`,
              }}
            />
            <div className="absolute -top-4 left-0 hidden w-full text-center text-xs text-white group-hover:block">
              {Math.round(volume * 100)}%
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              adjustVolume(volume + 0.1);
            }}
            className="cursor-pointer text-sm text-white hover:text-gray-200"
          >
            🔊
          </button>
        </div>
      </div>

      {/* Статус */}
      <p className="mt-2 text-xs text-white">
        {isPlaying ? 'В эфире' : 'Остановлено'}
      </p>
    </div>
  );
};

export default RadioPlayer;
