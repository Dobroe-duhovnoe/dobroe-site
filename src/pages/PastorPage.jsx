import { useNavigate } from 'react-router-dom';
import { PastorBlock } from '../components/blocks';

const blockNames = {
  PASTOR: 'ПАСТОР',
};

export default function PastorPage() {
  const navigate = useNavigate();

  const hideBlockInfo = () => {
    navigate('/');
  };

  return (
    <div className="h-full rounded-2xl bg-white p-6">
      <PastorBlock blockNames={blockNames} hideBlockInfo={hideBlockInfo} />
    </div>
  );
}
