import React from "react";

const LegalInfoBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <div className="w-full h-full flex flex-col bg-white text-black rounded-2xl p-6 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-800">
          {blockNames.LEGAL_INFO}
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
          Правовая информация о нашей организации и деятельности.
        </p>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">
              Регистрационные данные
            </h3>
            <p className="text-gray-700 text-sm">ОГРН: 1234567890123</p>
            <p className="text-gray-700 text-sm">ИНН: 7701234567</p>
            <p className="text-gray-700 text-sm">КПП: 770101001</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Лицензии</h4>
            <p className="text-blue-700 text-sm">• Религиозная деятельность</p>
            <p className="text-blue-700 text-sm">
              • Образовательная деятельность
            </p>
            <p className="text-blue-700 text-sm">
              • Благотворительная деятельность
            </p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">
              Контакты юриста
            </h4>
            <p className="text-yellow-700">legal@spiritual.org</p>
            <p className="text-yellow-700 text-sm">+7 (495) 987-65-43</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalInfoBlock;
