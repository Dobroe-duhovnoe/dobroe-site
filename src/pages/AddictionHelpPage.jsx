import { useNavigate } from 'react-router-dom';
import { AddictionHelpBlock } from '../components/blocks';

export default function AddictionHelpPage() {
  const navigate = useNavigate();

  const hideBlockInfo = () => {
    navigate('/');
  };

  return (
    <div className="h-full rounded-2xl bg-white p-6">
      <AddictionHelpBlock hideBlockInfo={hideBlockInfo} />
    </div>
  );
}
