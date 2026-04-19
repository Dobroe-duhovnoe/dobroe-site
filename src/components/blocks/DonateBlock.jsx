import React from 'react';
import BaseBlock from './BaseBlock';

const DonateBlock = ({ hideBlockInfo }) => {
  return (
    <BaseBlock title={'ПОДДЕРЖИТЕ СЛУЖЕНИЕ'} onClose={hideBlockInfo}>
      <div className="flex flex-col items-start justify-start text-left text-base text-[var(--color-primary-dark)]">
        <p>
          Вы можете пожертвовать несколькими способами, представленными ниже:
        </p>
      </div>
    </BaseBlock>
  );
};

export default DonateBlock;
