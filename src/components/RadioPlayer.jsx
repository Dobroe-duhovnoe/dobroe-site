import React from 'react';
import { useRadioPlayer } from '../contexts/radioPlayerContext';
import VolumeSlider from './VolumeSlider';

const RadioPlayer = () => {
  const { isPlaying, togglePlay, volume, adjustVolume } = useRadioPlayer();
  return (
    <div className="relative flex h-full w-full min-w-0 flex-col items-center justify-center gap-2 p-2 md:p-3">
      <div className="radio-player-header">
        <h2 className="min-w-0 text-xs leading-tight font-bold text-white md:text-base">
          Радио{' '}
          <a
            href="https://www.slavagospodu.ru/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-white no-underline hover:text-white"
          >
            RuWorship
          </a>
        </h2>

        <button
          type="button"
          aria-label={isPlaying ? 'Пауза' : 'Воспроизведение'}
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          className="radio-play-btn cursor-pointer rounded-full bg-[var(--color-button-primary)] transition-colors hover:opacity-90"
        >
          {isPlaying ? (
            <span
              className="radio-play-pause block rounded-sm bg-white"
              aria-hidden
            />
          ) : (
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="radio-play-icon"
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
      </div>

      <div className="flex w-full min-w-0 justify-center px-2 pt-0 pb-2 sm:px-5 sm:pb-4">
        <VolumeSlider
          value={volume}
          onChange={adjustVolume}
          ariaLabel="Громкость радио"
        />
      </div>
    </div>
  );
};

export default RadioPlayer;
