import { useNavigate } from 'react-router-dom';
import { ListenAndWatchBlock } from '../components/blocks';

const blockNames = {
  LISTEN_AND_WATCH: 'СЛУШАТЬ И СМОТРЕТЬ',
};

export default function ListenAndWatchPage() {
  const navigate = useNavigate();

  const hideBlockInfo = () => {
    navigate('/');
  };

  return (
    <div className="h-full rounded-2xl bg-white p-6">
      <ListenAndWatchBlock
        blockNames={blockNames}
        hideBlockInfo={hideBlockInfo}
      />
    </div>
  );
}
