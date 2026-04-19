import React from 'react';

const RadioPlayerBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white p-6 text-black">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-blue-800">
          {blockNames.RADIO_PLAYER}
        </h2>
        <button
          onClick={hideBlockInfo}
          className="cursor-pointer text-xl text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="mb-4 rounded-lg bg-blue-800 p-4 text-white">
          <h3 className="mb-2 font-semibold">Сейчас играет</h3>
          <p className="text-blue-100">"Мир в душе" - Хор Святой Троицы</p>
        </div>
        <div className="mb-4 space-y-3">
          <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
            <span className="text-gray-700">Христианская музыка</span>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
            <span className="text-gray-700">Духовные беседы</span>
            <div className="h-3 w-3 rounded-full bg-gray-400"></div>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
            <span className="text-gray-700">Молитвы</span>
            <div className="h-3 w-3 rounded-full bg-gray-400"></div>
          </div>
        </div>
        <div className="rounded-lg bg-purple-50 p-4">
          <h4 className="mb-2 font-semibold text-purple-800">
            Частота вещания
          </h4>
          <p className="text-purple-700">FM 103.5 МГц</p>
          <p className="text-sm text-purple-700">24/7</p>
        </div>
      </div>
    </div>
  );
};

export default RadioPlayerBlock;
