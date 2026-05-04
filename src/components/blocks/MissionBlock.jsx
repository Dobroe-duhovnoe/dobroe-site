import React from 'react';
import BaseBlock from './BaseBlock';
import { PartnersBlockContent } from './PartnersBlockContent';

const MissionBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <BaseBlock title={blockNames.MISSION} onClose={hideBlockInfo}>
      <div className="flex h-full flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="text-6xl">📖</div>
          <div className="max-w-md">
            <h3 className="mb-4 text-xl font-bold text-[#023047]">
              Скоро здесь будет информация
            </h3>
            <p className="text-gray-600">Следите за обновлениями!</p>
          </div>
        </div>
      </div>
    </BaseBlock>
  );
};

export default MissionBlock;
