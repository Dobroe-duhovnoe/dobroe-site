import React from "react";

const AddictionHelpBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <div className="w-full h-full flex flex-col bg-white text-black rounded-2xl p-6 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-800">
          {blockNames.ADDICTION_HELP}
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
          <h3 className="font-semibold text-yellow-800 mb-2">Мы поможем вам</h3>
          <p className="text-yellow-700">
            Наша программа реабилитации основана на духовных принципах и
            доказанных методах.
          </p>
        </div>
        <div className="space-y-3 mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span className="text-gray-700">Наркологическая зависимость</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
            <span className="text-gray-700">Алкогольная зависимость</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            <span className="text-gray-700">Игровая зависимость</span>
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-2">
            Контакты для помощи
          </h4>
          <p className="text-green-700">Горячая линия: 8-800-123-45-67</p>
          <p className="text-green-700 text-sm">Круглосуточно, анонимно</p>
        </div>
      </div>
    </div>
  );
};

export default AddictionHelpBlock;
