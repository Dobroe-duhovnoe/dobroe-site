import React, { useState, useEffect, useRef } from 'react';
import { RadioPlayerContext } from './radioPlayerContext';

export const RadioPlayerProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef(null);

  useEffect(() => {
    const savedVolume = localStorage.getItem('radioVolume');
    if (savedVolume !== null) {
      setVolume(parseFloat(savedVolume));
    }
  }, []);

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = volume;
    audioRef.current.src = 'https://s.ruworship.ru:8125/radio';

    audioRef.current.onerror = () => {
      console.log('Error with high quality stream, switching to lower quality');
      audioRef.current.src = 'http://s.ruworship.ru:8000/radio';
    };

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error('Error playing audio:', error);
          setIsPlaying(false);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const adjustVolume = (newVolume) => {
    const adjustedVolume = Math.max(
      0,
      Math.min(1, Number(newVolume.toFixed(2)))
    );
    setVolume(adjustedVolume);
    localStorage.setItem('radioVolume', adjustedVolume.toString());
  };

  return (
    <RadioPlayerContext.Provider
      value={{
        isPlaying,
        togglePlay,
        volume,
        adjustVolume,
      }}
    >
      {children}
    </RadioPlayerContext.Provider>
  );
};
