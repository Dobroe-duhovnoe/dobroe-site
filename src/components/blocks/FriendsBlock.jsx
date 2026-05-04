import React from 'react';
import BaseBlock from './BaseBlock';
import { PartnersBlockContent } from './PartnersBlockContent';

const FriendsBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <BaseBlock title={blockNames.FRIENDS} onClose={hideBlockInfo}>
      <PartnersBlockContent />
    </BaseBlock>
  );
};

export default FriendsBlock;
