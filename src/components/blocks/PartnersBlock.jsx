import React from 'react';
import BaseBlock from './BaseBlock';

const PartnersBlock = ({ hideBlockInfo }) => {
  return (
    <BaseBlock title={'НАШИ ДРУЗЬЯ И ПАРТНЕРЫ'} onClose={hideBlockInfo}>
      <div className="grid grid-cols-3 gap-4 text-[10px] text-[#023047]">
        <a className="rounded-sm bg-[#8FAED3] px-2 py-5">
          Церковь “БОГ УСМОТРИТ” станица ХАНСКАЯ, Адыгея
        </a>
        <a className="rounded-sm bg-[#8FAED3] px-2 py-5">
          Церковь “ЭРА СТО В” г.Краснодар
        </a>
        <a className="rounded-sm bg-[#8FAED3] px-2 py-5">
          Христианское интернет-радио RuWorship
        </a>
      </div>
    </BaseBlock>
  );
};

export default PartnersBlock;
