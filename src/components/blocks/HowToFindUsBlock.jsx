import React from 'react';
import BaseBlock from './BaseBlock';
import YandexMap from '../YandexMap';

const HowToFindUsBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <BaseBlock title={blockNames.HOW_TO_FIND_US} onClose={hideBlockInfo}>
      <div className="mb-5 flex flex-col gap-2.5 text-left text-base text-[var(--color-primary-dark)]">
        <p className="font-bold">
          Каждое воскресенье в 13:00 проходят богослужения по адресу:
        </p>
        <p>Ростов-на-Дону, улица Тургеневская, 39</p>
        <p className="mt-2">Приглашаем вас и ваших близких!</p>
      </div>
      <div className="mb-7">
        <YandexMap className="w-full" />
      </div>
      <div className="flex flex-col gap-2.5 text-left text-base text-[#023047]">
        <p className="font-bold">По всем вопросам вы можете позвонить:</p>
        <p>+7 938 118 12 12</p>
      </div>
    </BaseBlock>
  );
};

export default HowToFindUsBlock;
