import React from 'react';
import BaseBlock from './BaseBlock';

const DonateBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <BaseBlock title={blockNames.DONATE} onClose={hideBlockInfo}>
      <div className="space-y-6">
        <p className="leading-relaxed text-gray-700">
          Ваша поддержка помогает нам продолжать наше служение и помогать людям.
        </p>

        <div className="rounded-lg bg-green-50 p-6">
          <h3 className="mb-3 text-lg font-semibold text-green-800">
            Способы пожертвования
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
                Б
              </div>
              <span className="text-gray-700">Банковская карта</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                С
              </div>
              <span className="text-gray-700">СБП</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-xs text-white">
                К
              </div>
              <span className="text-gray-700">Криптовалюта</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-blue-50 p-6">
          <h4 className="mb-3 text-lg font-semibold text-blue-800">
            Куда идут средства
          </h4>
          <div className="space-y-2">
            <p className="text-blue-700">• Помощь нуждающимся</p>
            <p className="text-blue-700">• Содержание храмов</p>
            <p className="text-blue-700">• Благотворительные программы</p>
          </div>
        </div>
      </div>
    </BaseBlock>
  );
};

export default DonateBlock;
