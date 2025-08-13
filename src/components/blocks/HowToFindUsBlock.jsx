import React from "react";

const HowToFindUsBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <div className="w-full h-full flex flex-col bg-white text-black rounded-2xl p-6 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-800">
          {blockNames.HOW_TO_FIND_US}
        </h2>
        <button
          onClick={hideBlockInfo}
          className="text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h3 className="font-semibold text-blue-800 mb-2">Наши адреса</h3>
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium">Главный офис</p>
                <p className="text-sm text-gray-600">ул. Мира, 123, Москва</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium">Молитвенный дом</p>
                <p className="text-sm text-gray-600">ул. Веры, 45, Москва</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 p-3 rounded-lg">
            <h4 className="font-semibold text-green-800">Телефон</h4>
            <p className="text-green-700">+7 (495) 123-45-67</p>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg">
            <h4 className="font-semibold text-purple-800">Email</h4>
            <p className="text-purple-700">info@spiritual.org</p>
          </div>
        </div>
        <p className="text-gray-700">
          Мы открыты для посещения каждый день с 9:00 до 21:00.
        </p>
      </div>
    </div>
  );
};

export default HowToFindUsBlock;
