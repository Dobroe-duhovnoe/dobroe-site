import React from 'react';
import BaseBlock from './BaseBlock';
import ContactForm from '../ContactForm';

const AddictionHelpBlock = ({ hideBlockInfo }) => {
  return (
    <BaseBlock title={'СВОБОДА ОТ ЗАВИСИМОСТИ'} onClose={hideBlockInfo}>
      <div className="mb-5 flex flex-col gap-2.5 text-left text-base text-[var(--color-primary-dark)]">
        <p>
          Если вам или вашим близким необходима свобода от зависимости (нарко,
          алко, игровой и т.д.), позвоните по телефону: +7 928 616 58 28
        </p>
        <p>Или напишите нам через форму обратной связи ниже.</p>
      </div>

      <ContactForm type="dependents" />
    </BaseBlock>
  );
};

export default AddictionHelpBlock;
