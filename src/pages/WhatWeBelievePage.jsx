import { useNavigate } from 'react-router-dom';
import { WhatWeBelieveBlock } from '../components/blocks';

export default function WhatWeBelievePage() {
  const navigate = useNavigate();

  const hideBlockInfo = () => {
    navigate('/');
  };

  return (
    <div className="h-full rounded-2xl bg-white p-6">
      <WhatWeBelieveBlock hideBlockInfo={hideBlockInfo} />
    </div>
  );
}
