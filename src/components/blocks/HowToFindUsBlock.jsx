import React from 'react';
import BaseBlock from './BaseBlock';
import YandexMap from '../YandexMap';

const HowToFindUsBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <BaseBlock title={blockNames.HOW_TO_FIND_US} onClose={hideBlockInfo}>
      <div className="mb-5 flex flex-col gap-2.5 text-left text-base text-[#023047]">
        <p className="font-bold">
          Каждую субботу в 14:00 проходят богослужения по адресу:
        </p>
        <p>
          Ростов-на-Дону, переулок Островского, 22/49 (пересечение с Обороны)
        </p>
      </div>
      <div className="mb-7">
        <YandexMap className="w-full" />
      </div>
      <div className="flex flex-col gap-2.5 text-left text-base text-[#023047]">
        <p className="font-bold">По любым вопросам вы можете позвонить:</p>
        <p>+7 928 288 28 28</p>
      </div>
    </BaseBlock>
  );
};

export default HowToFindUsBlock;
