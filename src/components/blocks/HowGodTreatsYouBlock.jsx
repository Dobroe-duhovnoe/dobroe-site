import React from 'react';
import BaseBlock from './BaseBlock';

const HowGodTreatsYouBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <BaseBlock title={blockNames.HOW_GOD_TREATS_YOU} onClose={hideBlockInfo}>
      <div className="flex flex-col text-left">
        <p className="mb-6 text-lg text-[#023047]">
          Служение "ДОБРОЕ ДУХОВНОЕ"
        </p>

        <div className="mb-6">
          <h2 className="mb-3 text-2xl font-bold text-[#023047]">
            Божья любовь к тебе
          </h2>
          <p className="mb-3 text-lg leading-relaxed text-gray-700">
            Бог относится к тебе с <strong>БЕЗУСЛОВНОЙ ЛЮБОВЬЮ</strong>. Он
            любит тебя не за то, что ты делаешь, а за то, кто ты есть. Его
            любовь не зависит от твоих достижений или ошибок.
          </p>
          <p className="mb-3 text-lg leading-relaxed text-gray-700">
            В Библии сказано: "Ибо так возлюбил Бог мир, что отдал Сына Своего
            Единородного, дабы всякий верующий в Него не погиб, но имел жизнь
            вечную" (Иоанна 3:16).
          </p>
        </div>

        <div className="mb-6">
          <h2 className="mb-3 text-2xl font-bold text-[#023047]">
            Бог видит твою ценность
          </h2>
          <p className="mb-3 text-lg leading-relaxed text-gray-700">
            Ты <strong>ДРАГОЦЕНЕН</strong> в глазах Бога. Он создал тебя по
            Своему образу и подобию. Бог знает каждую твою мысль, каждую слезу и
            каждую радость. Ты не случайность - ты часть Божьего плана.
          </p>
        </div>
      </div>
    </BaseBlock>
  );
};

export default HowGodTreatsYouBlock;
