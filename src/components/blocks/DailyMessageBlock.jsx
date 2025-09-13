import React from 'react';
import BaseBlock from './BaseBlock';
// import { useState } from 'react';
// import { yearlyMessages } from '../../data/yearlyMessages';

const DailyMessageBlock = ({ blockNames, hideBlockInfo }) => {
  /* 
  // Временно закомментировано - будет восстановлено позже
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedDay, setSelectedDay] = useState(1);

  const currentMessage = yearlyMessages[selectedMonth]?.days[selectedDay - 1];
  */

  return (
    <BaseBlock title={blockNames.DAILY_MESSAGE} onClose={hideBlockInfo}>
      <div className="flex h-full flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="text-6xl">📖</div>
          <div className="max-w-md">
            <h3 className="mb-4 text-xl font-bold text-[#023047]">
              Скоро здесь появится информация
            </h3>
            <p className="text-gray-600">
              Мы работаем над подготовкой ежедневных посланий для духовного
              роста и назидания. Следите за обновлениями!
            </p>
          </div>
        </div>

        {/* 
        Временно закомментированный функционал - будет восстановлен позже:
        
        <div className="mb-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {Object.entries(yearlyMessages).map(([month, data]) => (
              <button
                key={month}
                onClick={() => {
                  setSelectedMonth(Number(month));
                  setSelectedDay(1); // Сбрасываем день при смене месяца
                }}
                className={`w-20 rounded px-3 py-1 text-xs transition-colors ${
                  selectedMonth === Number(month)
                    ? 'bg-[#FFB700]'
                    : 'bg-[#8FAED3] hover:opacity-90'
                }`}
              >
                {data.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap gap-1 text-xs">
            {yearlyMessages[selectedMonth]?.days.map((day) => (
              <button
                key={day.day}
                onClick={() => setSelectedDay(day.day)}
                className={`flex h-8 w-8 items-center justify-center rounded text-center transition-colors ${
                  selectedDay === day.day ? 'bg-[#FFB700]' : 'hover:opacity-90'
                }`}
              >
                {day.day}
              </button>
            ))}
          </div>
        </div>

        {currentMessage && (
          <div className="flex-1 overflow-y-auto text-left leading-tight">
            <h3 className="mb-4 text-2xl leading-tight font-bold text-[#023047]">
              {currentMessage.title}
            </h3>

            <div className="mb-4 rounded-lg">
              <p className="text-[#FEB603] italic">
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

            <div className="rounded-lg bg-[#FFF8E1] p-4">
              <h4 className="mb-2 font-bold text-[#023047]">Молитва:</h4>
              <p className="text-gray-700 italic">{currentMessage.prayer}</p>
            </div>
          </div>
        )}
        */}
      </div>
    </BaseBlock>
  );
};

export default DailyMessageBlock;
