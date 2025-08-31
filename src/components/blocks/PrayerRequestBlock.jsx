import React from 'react';
import BaseBlock from './BaseBlock';
import ContactForm from '../ContactForm';

const PrayerRequestBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <BaseBlock title={blockNames.PRAYER_REQUEST} onClose={hideBlockInfo}>
      <div className="mb-5 flex flex-col gap-2.5 text-left text-base text-[var(--color-primary-dark)]">
        <p>
          Как Церковь, верящая в Бога-Отца, Который отвечает на молитвы своих
          святых, мы хотим молиться за вашу ситуацию, за ваши нужды.
        </p>
        <p>
          Заполните форму ниже и мы получив ваше сообщение будем молиться о вас.
        </p>
      </div>

      <ContactForm type="prayer" />
    </BaseBlock>
  );
};

export default PrayerRequestBlock;
