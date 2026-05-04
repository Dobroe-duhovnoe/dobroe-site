import React from 'react';
import { useRadioPlayer } from '../contexts/radioPlayerContext';
import VolumeSlider from './VolumeSlider';

const RadioPlayer = () => {
  const { isPlaying, togglePlay, volume, adjustVolume } = useRadioPlayer();
  return (
    <div className="relative flex h-full w-full min-w-0 flex-col items-center justify-center gap-2 p-2 md:p-3">
      <h2 className="w-full min-w-0 text-center text-xs font-bold text-white md:text-base">
        <span className="hidden md:inline">Радио</span> <span>RuWorship</span>
      </h2>

      <div className="flex w-full min-w-0 flex-col items-center gap-2">
        <button
          type="button"
          aria-label={isPlaying ? 'Пауза' : 'Воспроизведение'}
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-[var(--color-button-primary)] transition-colors hover:opacity-90 md:h-[52px] md:w-[52px]"
        >
          {isPlaying ? (
            <span
              className="block h-[18px] w-[18px] rounded-sm bg-white md:h-[24px] md:w-[24px] md:rounded-lg"
              aria-hidden
            />
          ) : (
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              aria-hidden
              fill="currentColor"
            >
              <path
                d="M20.4086 9.35258c2.1219 1.15392 2.1219 4.14092 0 5.29482L7.59662 21.6145C5.53435 22.736 3 21.2763 3 18.9671L3 5.0329c0 -2.30922 2.53435 -3.76888 4.59661 -2.64742l12.81199 6.9671Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          )}
        </button>

        <div className="flex w-full min-w-0 justify-center px-2 pt-0 pb-2 sm:px-5 sm:pb-4">
          <VolumeSlider
            value={volume}
            onChange={adjustVolume}
            ariaLabel="Громкость радио"
          />
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;
