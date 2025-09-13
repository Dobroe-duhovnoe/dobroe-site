import React from 'react';
import BaseBlock from './BaseBlock';
import ContactForm from '../ContactForm';

const PrayerRequestBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <BaseBlock title={blockNames.PRAYER_REQUEST} onClose={hideBlockInfo}>
      <div className="mb-5 flex flex-col gap-2.5 text-left text-base text-[#023047]">
        <p className="mb-3 text-center italic">
          «И если чего попросите у Отца во имя Моё, то сделаю, да прославится
          Отец в Сыне».
        </p>
        <p className="mb-4 text-center text-sm">Евангелие от Иоанна 14:13</p>
        <p>
          Как Церковь, верящая в Бога-Отца, Который отвечает на молитвы во Имя
          Иисуса Христа, мы хотим молиться за вашу ситуацию, за ваши нужды.
        </p>
        <p>Заполните форму ниже.</p>
      </div>

      <ContactForm type="prayer" />
    </BaseBlock>
  );
};

export default PrayerRequestBlock;
