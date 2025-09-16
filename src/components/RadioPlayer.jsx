import React from 'react';
import { useRadioPlayer } from '../contexts/radioPlayerContext';

const RadioPlayer = ({ onClose }) => {
  const { isPlaying, togglePlay, volume, adjustVolume } = useRadioPlayer();

  return (
    <div className="relative flex h-full flex-col items-center justify-center p-2 md:p-3">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-2 right-3 cursor-pointer text-lg font-bold text-white hover:text-gray-300"
      >
        ✕
      </button>

      <p className="mb-1 text-center text-xs text-white md:mb-2 md:text-sm">
        RuWorship
      </p>

      <div className="flex flex-col items-center gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-200 md:h-10 md:w-10"
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

        <div className="flex items-center gap-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              adjustVolume(volume - 0.1);
            }}
            className="cursor-pointer text-xs text-white hover:text-gray-200 md:text-sm"
          >
            🔉
          </button>
          <div
            className="group relative h-6 w-16 cursor-pointer md:w-20"
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
            className="cursor-pointer text-xs text-white hover:text-gray-200 md:text-sm"
          >
            🔊
          </button>
        </div>
      </div>

      {/* Статус */}
      <p className="mt-1 text-[10px] text-white md:mt-2 md:text-xs">
        {isPlaying ? 'В эфире' : 'Остановлено'}
      </p>
    </div>
  );
};

export default RadioPlayer;
