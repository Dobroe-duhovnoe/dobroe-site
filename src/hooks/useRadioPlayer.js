import { useContext } from 'react';
import { RadioPlayerContext } from '../contexts/RadioPlayerContext';

export const useRadioPlayer = () => {
  const context = useContext(RadioPlayerContext);
  if (!context) {
    throw new Error('useRadioPlayer must be used within a RadioPlayerProvider');
  }
  return context;
};
