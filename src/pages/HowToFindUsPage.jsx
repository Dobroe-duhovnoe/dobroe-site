import { useNavigate } from 'react-router-dom';
import { HowToFindUsBlock } from '../components/blocks';

const blockNames = {
  HOW_TO_FIND_US: 'КАК НАС НАЙТИ',
};

export default function HowToFindUsPage() {
  const navigate = useNavigate();

  const hideBlockInfo = () => {
    navigate('/');
  };

  return (
    <div className="h-full rounded-2xl bg-white p-6">
      <HowToFindUsBlock blockNames={blockNames} hideBlockInfo={hideBlockInfo} />
    </div>
  );
}
