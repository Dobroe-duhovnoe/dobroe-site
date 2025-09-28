import { AddictionHelpBlock, PrayerRequestBlock } from '../components/blocks';

const HelpPage = () => {
  return (
    <div className="container mx-auto space-y-8 px-4 py-8">
      <AddictionHelpBlock />
      <PrayerRequestBlock />
    </div>
  );
};

export default HelpPage;
