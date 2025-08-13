import React from "react";

const DailyMessageBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <div className="w-full h-full flex flex-col bg-white text-black rounded-2xl p-6 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-800">
          {blockNames.DAILY_MESSAGE}
        </h2>
        <button
          onClick={hideBlockInfo}
          className="text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="bg-yellow-50 p-4 rounded-lg mb-4">
          <h3 className="font-semibold text-yellow-800 mb-2">
            Сегодняшнее послание
          </h3>
          <p className="text-yellow-700 italic">
            "Любовь - это величайшая сила во вселенной. Проявляйте её каждый
            день."
          </p>
        </div>
        <p className="text-gray-700 mb-4">
          Каждый день мы делимся вдохновляющими мыслями и духовными истинами.
        </p>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700">Ежедневные медитации</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">Библейские размышления</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-gray-700">Молитвенные просьбы</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyMessageBlock;
