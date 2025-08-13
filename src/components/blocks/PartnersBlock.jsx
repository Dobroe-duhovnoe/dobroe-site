import React from "react";

const PartnersBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <div className="w-full h-full flex flex-col bg-white text-black rounded-2xl p-6 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-800">
          {blockNames.PARTNERS}
        </h2>
        <button
          onClick={hideBlockInfo}
          className="text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <p className="text-gray-700 mb-4">
          Мы сотрудничаем с различными организациями для достижения общих целей.
        </p>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">
              Международные партнёры
            </h3>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                W
              </div>
              <span className="text-gray-700">World Spiritual Foundation</span>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">
              Локальные партнёры
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-blue-700">• Московская епархия</span>
              <span className="text-blue-700">• Центр милосердия</span>
              <span className="text-blue-700">• Детский дом №5</span>
              <span className="text-blue-700">• Больница им. Пирогова</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersBlock;
