import React, { useState } from 'react';
import BaseBlock from './BaseBlock';

const paymentMethods = [
  {
    id: 'card',
    name: 'Банковская карта',
    content: (
      <div className="space-y-4">
        <p>Вы можете сделать пожертвование с помощью банковской карты:</p>
        <div className="rounded-lg bg-[var(--color-primary-light)] p-4">
          <p className="mb-2 font-semibold">Номер карты Сбербанка:</p>
          <p className="font-mono">0000 0000 0000 0000</p>
        </div>
      </div>
    ),
  },
  {
    id: 'transfer',
    name: 'Банковский перевод',
    content: (
      <div className="space-y-4">
        <p>Реквизиты для банковского перевода:</p>
        <div className="space-y-2 rounded-lg bg-[var(--color-primary-light)] p-4">
          <p>
            <span className="font-semibold">Получатель:</span> Религиозная
            группа "Служение ДОБРОЕ ДУХОВНОЕ"
          </p>
          <p>
            <span className="font-semibold">ИНН:</span> 0000000000
          </p>
          <p>
            <span className="font-semibold">Банк:</span> ПАО СБЕРБАНК
          </p>
          <p>
            <span className="font-semibold">Р/с:</span> 00000000000000000000
          </p>
          <p>
            <span className="font-semibold">К/с:</span> 00000000000000000000
          </p>
          <p>
            <span className="font-semibold">БИК:</span> 000000000
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'qr',
    name: 'QR-код',
    content: (
      <div className="space-y-4">
        <p>Отсканируйте QR-код для быстрого пожертвования:</p>
        <div className="flex justify-center">
          <div className="flex h-48 w-48 items-center justify-center rounded-lg bg-[var(--color-primary-light)] p-4">
            <p className="text-center text-sm">QR-код будет добавлен позже</p>
          </div>
        </div>
      </div>
    ),
  },
];

const DonateBlock = ({ hideBlockInfo }) => {
  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0]);

  return (
    <BaseBlock title={'ПОДДЕРЖИТЕ СЛУЖЕНИЕ'} onClose={hideBlockInfo}>
      <div className="flex flex-col text-left text-[var(--color-primary-dark)]">
        <p className="mb-6">
          Ваше пожертвование поможет нам продолжать служение и распространять
          Благую Весть.
        </p>

        <div className="mb-6 grid grid-cols-3 gap-2">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              className={`cursor-pointer rounded-lg px-3 py-4 text-center text-sm transition-colors hover:opacity-90 ${
                selectedMethod?.id === method.id
                  ? 'bg-[var(--color-accent-yellow)]'
                  : 'bg-[var(--color-primary-light)]'
              }`}
              onClick={() => setSelectedMethod(method)}
            >
              {method.name}
            </button>
          ))}
        </div>

        <div className="flex-1">{selectedMethod?.content}</div>

        <div className="mt-6 rounded-lg bg-[var(--color-primary-light)] p-4">
          <p className="text-sm">
            Если у вас возникли вопросы о пожертвованиях, пожалуйста, свяжитесь
            с нами по телефону:{' '}
            <a
              href="tel:+79381181212"
              className="text-[var(--color-accent-orange)] hover:underline"
            >
              +7 938 118 12 12
            </a>
          </p>
        </div>
      </div>
    </BaseBlock>
  );
};

export default DonateBlock;
