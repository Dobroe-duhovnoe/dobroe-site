import React from "react";

const PrayerRequestBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <div className="w-full h-full flex flex-col bg-white text-black rounded-2xl p-6 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-800">
          {blockNames.PRAYER_REQUEST}
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
            Мы молимся за вас
          </h3>
          <p className="text-yellow-700">
            Оставьте вашу молитвенную просьбу, и наша команда будет молиться за
            вас.
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ваше имя
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Введите ваше имя"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Молитвенная просьба
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
              placeholder="Опишите, за что нужно помолиться"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Отправить просьбу
          </button>
        </form>
        <div className="mt-4 bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-2">
            Как это работает
          </h4>
          <p className="text-green-700 text-sm">
            Ваша просьба будет передана нашей молитвенной команде. Мы молимся за
            каждого, кто обращается к нам.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrayerRequestBlock;
