import { useNavigate } from 'react-router-dom';
import { PrayerRequestBlock } from '../components/blocks';

const blockNames = {
  PRAYER_REQUEST: 'МЫ ХОТИМ ПОМОЛИТЬСЯ ЗА ВАС',
};

export default function PrayerRequestPage() {
  const navigate = useNavigate();

  const hideBlockInfo = () => {
    navigate('/');
  };

  return (
    <div className="h-full rounded-2xl bg-white p-6">
      <PrayerRequestBlock
        blockNames={blockNames}
        hideBlockInfo={hideBlockInfo}
      />
    </div>
  );
}
