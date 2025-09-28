import {
  AboutUsBlock,
  DailyMessageBlock,
  HowToFindUsBlock,
  PartnersBlock,
} from '../components/blocks';

const HomePage = () => {
  return (
    <div className="space-y-8">
      <AboutUsBlock />
      <DailyMessageBlock />
      <HowToFindUsBlock />
      <PartnersBlock />
    </div>
  );
};

export default HomePage;
