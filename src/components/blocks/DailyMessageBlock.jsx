import React, { useState } from 'react';
import BaseBlock from './BaseBlock';
import { yearlyMessages } from '../../data/yearlyMessages';

const DailyMessageBlock = ({ blockNames, hideBlockInfo }) => {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedDay, setSelectedDay] = useState(1);

  const currentMessage = yearlyMessages[selectedMonth]?.days[selectedDay - 1];

  return (
    <BaseBlock title={blockNames.DAILY_MESSAGE} onClose={hideBlockInfo}>
      <div className="flex h-full flex-col">
        <div className="mb-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {Object.entries(yearlyMessages).map(([month, data]) => (
              <button
                key={month}
                onClick={() => {
                  setSelectedMonth(Number(month));
                  setSelectedDay(1); // Сбрасываем день при смене месяца
                }}
                className={`w-20 cursor-pointer rounded px-3 py-1 text-xs transition-colors ${
                  selectedMonth === Number(month)
                    ? 'bg-[var(--color-accent-yellow)]'
                    : 'bg-[var(--color-primary-light)] hover:opacity-90'
                }`}
              >
                {data.name}
              </button>
            ))}
          </div>
        </div>

        {/* Кнопки выбора дня */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-1 text-xs">
            {yearlyMessages[selectedMonth]?.days.map((day) => (
              <button
                key={day.day}
                onClick={() => setSelectedDay(day.day)}
                className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded text-center transition-colors ${
                  selectedDay === day.day
                    ? 'bg-[var(--color-accent-yellow)]'
                    : 'hover:opacity-90'
                }`}
              >
                {day.day}
              </button>
            ))}
          </div>
        </div>

        {currentMessage && (
          <div className="flex-1 overflow-y-auto text-left leading-tight">
            <h3 className="mb-4 text-2xl leading-tight font-bold text-[var(--color-primary-dark)]">
              {currentMessage.title}
            </h3>

            <div className="mb-4 rounded-lg">
              <p className="text-[var(--color-accent-orange)] italic">
                {currentMessage.scripture}
              </p>
            </div>

            <div className="mb-6 text-gray-700">
              {currentMessage.text.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-3">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="rounded-lg bg-[var(--color-background-light)] p-4">
              <h4 className="mb-2 font-bold text-[var(--color-primary-dark)]">
                Молитва:
              </h4>
              <p className="text-gray-700 italic">{currentMessage.prayer}</p>
            </div>
          </div>
        )}
      </div>
    </BaseBlock>
  );
};

export default DailyMessageBlock;
