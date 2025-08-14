import React from "react";

const RadioPlayerBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <div className="w-full h-full flex flex-col bg-white text-black rounded-2xl p-6 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-800">
          {blockNames.RADIO_PLAYER}
        </h2>
        <button
          onClick={hideBlockInfo}
          className="text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="bg-blue-800 text-white p-4 rounded-lg mb-4">
          <h3 className="font-semibold mb-2">Сейчас играет</h3>
          <p className="text-blue-100">"Мир в душе" - Хор Святой Троицы</p>
        </div>
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-700">Христианская музыка</span>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-700">Духовные беседы</span>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-700">Молитвы</span>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold text-purple-800 mb-2">
            Частота вещания
          </h4>
          <p className="text-purple-700">FM 103.5 МГц</p>
          <p className="text-purple-700 text-sm">24/7</p>
        </div>
      </div>
    </div>
  );
};

export default RadioPlayerBlock;
