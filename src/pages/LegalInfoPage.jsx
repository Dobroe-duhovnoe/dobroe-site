import { useNavigate } from 'react-router-dom';
import { LegalInfoBlock } from '../components/blocks';

const blockNames = {
  LEGAL_INFO: 'ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ',
};

export default function LegalInfoPage() {
  const navigate = useNavigate();

  const hideBlockInfo = () => {
    navigate('/');
  };

  return (
    <div className="h-full rounded-2xl bg-white p-6">
      <LegalInfoBlock blockNames={blockNames} hideBlockInfo={hideBlockInfo} />
    </div>
  );
}
