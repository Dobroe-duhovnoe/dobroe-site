import {
  WhatWeBelieveBlock,
  PastorBlock,
  HowGodTreatsYouBlock,
} from '../components/blocks';

const AboutPage = () => {
  return (
    <div className="container mx-auto space-y-8 px-4 py-8">
      <WhatWeBelieveBlock />
      <PastorBlock />
      <HowGodTreatsYouBlock />
    </div>
  );
};

export default AboutPage;
