import { useNavigate } from 'react-router-dom';
import { HowGodTreatsYouBlock } from '../components/blocks';

const blockNames = {
  HOW_GOD_TREATS_YOU: 'КАК БОГ ОТНОСИТСЯ К ТЕБЕ',
};

export default function HowGodTreatsYouPage() {
  const navigate = useNavigate();

  const hideBlockInfo = () => {
    navigate('/');
  };

  return (
    <div className="h-full rounded-2xl bg-white p-6">
      <HowGodTreatsYouBlock
        blockNames={blockNames}
        hideBlockInfo={hideBlockInfo}
      />
    </div>
  );
}
