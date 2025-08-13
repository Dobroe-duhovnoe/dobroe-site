import React from 'react';
import BaseBlock from './BaseBlock';

const DailyMessageBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <BaseBlock title={blockNames.DAILY_MESSAGE} onClose={hideBlockInfo}>
      <div className="space-y-6">
        <div className="rounded-lg bg-yellow-50 p-6">
          <h3 className="mb-3 text-lg font-semibold text-yellow-800">
            Сегодняшнее послание
          </h3>
          <p className="leading-relaxed text-yellow-700 italic">
            "Любовь - это величайшая сила во вселенной. Проявляйте её каждый
            день."
          </p>
        </div>

        <p className="leading-relaxed text-gray-700">
          Каждый день мы делимся вдохновляющими мыслями и духовными истинами.
        </p>

        <div className="rounded-lg bg-blue-50 p-6">
          <h4 className="mb-3 text-lg font-semibold text-blue-800">
            Наши программы
          </h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
              <span className="text-gray-700">Ежедневные медитации</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="text-gray-700">Библейские размышления</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-3 w-3 rounded-full bg-purple-500"></div>
              <span className="text-gray-700">Молитвенные просьбы</span>
            </div>
          </div>
        </div>
      </div>
    </BaseBlock>
  );
};

export default DailyMessageBlock;
