import React from "react";

const DonateBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <div className="w-full h-full flex flex-col bg-white text-black rounded-2xl p-6 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-800">
          {blockNames.DONATE}
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
          Ваша поддержка помогает нам продолжать наше служение и помогать людям.
        </p>
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">
              Способы пожертвования
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                  Б
                </div>
                <span className="text-gray-700">Банковская карта</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                  С
                </div>
                <span className="text-gray-700">СБП</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">
                  К
                </div>
                <span className="text-gray-700">Криптовалюта</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">
              Куда идут средства
            </h4>
            <p className="text-blue-700 text-sm">• Помощь нуждающимся</p>
            <p className="text-blue-700 text-sm">• Содержание храмов</p>
            <p className="text-blue-700 text-sm">
              • Благотворительные программы
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateBlock;
