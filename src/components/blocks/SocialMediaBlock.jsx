import React from "react";

const SocialMediaBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <div className="w-full h-full flex flex-col bg-white text-black rounded-2xl p-6 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-800">
          {blockNames.SOCIAL_MEDIA}
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
          Следите за нашими обновлениями в социальных сетях.
        </p>
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-2">YouTube</h3>
            <p className="text-red-700">
              Еженедельные проповеди и духовные беседы
            </p>
            <p className="text-sm text-gray-600">@SpiritualMinistry</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Telegram</h3>
            <p className="text-blue-700">Ежедневные молитвы и размышления</p>
            <p className="text-sm text-gray-600">@SpiritualChannel</p>
          </div>
          <div className="bg-blue-600 p-4 rounded-lg text-white">
            <h3 className="font-semibold mb-2">VKontakte</h3>
            <p>Новости и события нашего служения</p>
            <p className="text-sm text-blue-100">vk.com/spiritual</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaBlock;
