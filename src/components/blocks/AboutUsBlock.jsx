import React from "react";

const AboutUsBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <div className="w-full h-full flex flex-col bg-white text-black rounded-2xl p-6 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-800">
          {blockNames.ABOUT_US}
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
          Мы - духовная организация, посвященная помощи людям в их духовном
          пути.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h3 className="font-semibold text-blue-800 mb-2">Наша миссия</h3>
          <p className="text-blue-700">
            Нести свет и надежду всем, кто ищет духовного просвещения и
            поддержки.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-yellow-50 p-3 rounded-lg">
            <h4 className="font-semibold text-yellow-800">Основано</h4>
            <p className="text-yellow-700">2010 год</p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <h4 className="font-semibold text-green-800">Локации</h4>
            <p className="text-green-700">5 городов</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBlock;
