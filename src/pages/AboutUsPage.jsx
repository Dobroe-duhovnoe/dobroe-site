import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AboutUsBlock } from '../components/blocks';

const blockNames = {
  WHAT_WE_BELIEVE: 'ВО ЧТО МЫ ВЕРИМ',
  ABOUT_US: 'О НАС',
};

export default function AboutUsPage() {
  const navigate = useNavigate();

  const hideBlockInfo = () => {
    navigate('/');
  };

  const showBlockInfo = (blockType) => {
    if (blockType === blockNames.WHAT_WE_BELIEVE) {
      navigate('/what-we-believe');
    }
  };

  return (
    <div className="h-full rounded-2xl bg-white p-6">
      <AboutUsBlock
        blockNames={blockNames}
        hideBlockInfo={hideBlockInfo}
        showBlockInfo={showBlockInfo}
      />
    </div>
  );
}
