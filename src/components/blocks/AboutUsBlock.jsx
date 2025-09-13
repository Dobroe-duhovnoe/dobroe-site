import React from 'react';
import BaseBlock from './BaseBlock';

const AboutUsBlock = ({ blockNames, hideBlockInfo, showBlockInfo }) => {
  return (
    <BaseBlock title={blockNames.ABOUT_US} onClose={hideBlockInfo}>
      <div className="flex flex-col items-start justify-start text-left text-base text-[#023047]">
        <p className="mb-6">Служение “ДОБРОЕ ДУХОВНОЕ”</p>
        <div className="mb-6 flex flex-col gap-2.5">
          <h2 className="text-xl font-bold">Кратко о нас</h2>
          <p>
            Мы поместная церковь с видением о том, чтобы открывать Божью любовь
            к людям, рассказывая им о жертве Иисуса Христа. Мы верим, что можем
            рассказать Евангелие Спасения людям не только словами, но и делами.
            Тем самым мы придерживаемся главного видения нашей церкви: ПРОЯВИТЬ
            ЛЮБОВЬ К БОГУ ЧЕРЕЗ ЛЮБОВЬ К ЧЕЛОВЕКУ.
          </p>
          <p>
            Мы поместная церковь, но верим, что Бог призывает нас быть
            миссионерами не только в своем городе и стране. Мы поместная церковь
            глобальным посланием Христа идти до края земли.
          </p>
          <p>
            Мы церковь, живущая в 21 веке и потому понимаем ценность медиа в
            современном обществе. Поэтому мы развиваем это направление для
            проповеди Евангелия.
          </p>
          <p>
            Мы хотим сеять ДОБРОЕ ДУХОВНОЕ в нашем обществе и приглашаем вас
            присоединиться к нам.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <h2 className="text-xl font-bold">Братство</h2>
          <p>
            Служение “ДОБРОЕ ДУХОВНОЕ” является частью Централизованной
            религиозной организации Содружество церквей христиан веры
            еван-гельской (пятидесятников).
          </p>
          <p>
            Узнать о нашем вероисповедании можно{' '}
            <button
              onClick={() => showBlockInfo(blockNames.WHAT_WE_BELIEVE)}
              className="cursor-pointer font-semibold text-[#FFB700] underline hover:text-[#e6a500]"
            >
              ЗДЕСЬ
            </button>
          </p>
        </div>
      </div>
    </BaseBlock>
  );
};

export default AboutUsBlock;
