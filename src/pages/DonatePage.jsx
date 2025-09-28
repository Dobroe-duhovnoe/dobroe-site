import { useNavigate } from 'react-router-dom';
import { DonateBlock } from '../components/blocks';

export default function DonatePage() {
  const navigate = useNavigate();

  const hideBlockInfo = () => {
    navigate('/');
  };

  return (
    <div className="h-full rounded-2xl bg-white p-6">
      <DonateBlock hideBlockInfo={hideBlockInfo} />
    </div>
  );
}
