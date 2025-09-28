import { useNavigate } from 'react-router-dom';
import { DailyMessageBlock } from '../components/blocks';

const blockNames = {
  DAILY_MESSAGE: 'ЕЖЕДНЕВНОЕ ПОСЛАНИЕ',
};

export default function DailyMessagePage() {
  const navigate = useNavigate();

  const hideBlockInfo = () => {
    navigate('/');
  };

  return (
    <div className="h-full rounded-2xl bg-white p-6">
      <DailyMessageBlock
        blockNames={blockNames}
        hideBlockInfo={hideBlockInfo}
      />
    </div>
  );
}
