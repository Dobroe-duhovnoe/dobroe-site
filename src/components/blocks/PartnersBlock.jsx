import React, { useState } from 'react';
import BaseBlock from './BaseBlock';
const partners = [
  {
    id: 1,
    name: 'Церковь “БОГ УСМОТРИТ” станица ХАНСКАЯ, Адыгея',
    url: 'https://www.google.com',
    content: <p>Церковь “БОГ УСМОТРИТ” станица ХАНСКАЯ, Адыгея</p>,
  },
  {
    id: 2,
    name: 'Церковь “ЭРА СТО В” г.Краснодар',
    url: 'https://www.google.com',
    content: <p>Церковь “ЭРА СТО В” г.Краснодар</p>,
  },
  {
    id: 3,
    name: 'Христианское интернет-радио RuWorship',
    url: 'https://www.google.com',
    content: <p>Христианское интернет-радио RuWorship</p>,
  },
];

const PartnersBlock = ({ hideBlockInfo }) => {
  const [selectedPartner, setSelectedPartner] = useState(partners[0]);
  return (
    <BaseBlock title={'НАШИ ДРУЗЬЯ И ПАРТНЕРЫ'} onClose={hideBlockInfo}>
      <div className="mb-4 grid grid-cols-3 gap-4 text-[10px] text-[var(--color-primary-dark)]">
        {partners.map((partner) => (
          <button
            key={partner.id}
            className={`cursor-pointer rounded-sm px-2 py-5 hover:opacity-90 ${selectedPartner?.id === partner.id ? 'bg-[var(--color-accent-yellow)]' : 'bg-[var(--color-primary-light)]'}`}
            onClick={() => setSelectedPartner(partner)}
          >
            {partner.name}
          </button>
        ))}
      </div>
      <div>{selectedPartner?.content}</div>
    </BaseBlock>
  );
};

export default PartnersBlock;
