import React, { useState } from 'react';
import BaseBlock from './BaseBlock';

const beliefSections = [
  {
    id: 1,
    name: 'Мы верим',
    content: (
      <div className="text-left">
        <h2 className="mb-4 text-xl font-bold text-[var(--color-primary-dark)]">
          Мы верим:
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-gray-700">
          <p>
            <strong>1.</strong> В Единого благого Бога, вечно пребывающего в
            трех Лицах (ипостасях), а именно: Отца, Сына и Святого Духа.
          </p>

          <p>
            <strong>2.</strong> В Иисуса Христа, Единородного Сына Божьего,
            зачатого от Духа Святого и рожденного от Девы Марии, что Он истинный
            Бог был распят за грехи всех людей, погребен и воскрес из мертвых.
            Что Он вознесся на небо и находится одесную Отца.
          </p>

          <p>
            <strong>3.</strong> Мы верим, что человек сотворен по образу Божьему
            как венец и цель всего творения. Но из-за грехопадения человек
            утратил отношения с Богом, а потому каждый человек нуждается в
            покаянии пред Богом для прощения грехов.
          </p>

          <p>
            <strong>4.</strong> Мы верим, что по вере в жертвенную смерть и
            воскресение Иисуса Христа каждый человек получает прощение грехов и
            вечную жизнь, рождается заново (свыше), становится дитем Божьим и
            получает дар Святого Духа.
          </p>

          <p>......</p>

          <p>
            <strong>12.</strong> Мы ожидаем Второго Пришествия Господа Иисуса
            Христа во славе, воскресения мертвых и Последнего Суда. Мы верим,
            что после Суда произойдет преображение всего мироздания –
            установление Царства Божьего.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    name: 'Богослужебная практика',
    content: (
      <div className="text-left">
        <h2 className="mb-4 text-xl font-bold text-[var(--color-primary-dark)]">
          Богослужебная практика
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">
          Наша богослужебная практика основана на библейских принципах
          поклонения Богу в духе и истине.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    name: 'Миссионерская деятельность',
    content: (
      <div className="text-left">
        <h2 className="mb-4 text-xl font-bold text-[var(--color-primary-dark)]">
          Миссионерская деятельность
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">
          Мы призваны нести Евангелие спасения до края земли, проповедуя
          покаяние и прощение грехов во имя Иисуса Христа.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    name: 'Общество и власть',
    content: (
      <div className="text-left">
        <h2 className="mb-4 text-xl font-bold text-[var(--color-primary-dark)]">
          Общество и власть
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">
          Мы признаем богоустановленность властей и молимся за правительство
          нашей страны.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    name: 'Семья и брак',
    content: (
      <div className="text-left">
        <h2 className="mb-4 text-xl font-bold text-[var(--color-primary-dark)]">
          Семья и брак
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">
          Мы верим в святость брака как союза между мужчиной и женщиной,
          установленного Богом.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    name: 'Труд и трудовая этика',
    content: (
      <div className="text-left">
        <h2 className="mb-4 text-xl font-bold text-[var(--color-primary-dark)]">
          Труд и трудовая этика
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">
          Мы верим в достоинство честного труда и призваны быть примером в
          трудовой деятельности.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    name: 'Образование',
    content: (
      <div className="text-left">
        <h2 className="mb-4 text-xl font-bold text-[var(--color-primary-dark)]">
          Образование
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">
          Мы поддерживаем образование как важную составляющую развития личности
          и общества.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    name: 'Здоровье',
    content: (
      <div className="text-left">
        <h2 className="mb-4 text-xl font-bold text-[var(--color-primary-dark)]">
          Здоровье
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">
          Мы заботимся о физическом и духовном здоровье как о даре от Бога.
        </p>
      </div>
    ),
  },
];

const WhatWeBelieveBlock = ({ hideBlockInfo }) => {
  const [selectedSection, setSelectedSection] = useState(beliefSections[0]);

  return (
    <BaseBlock title="ОСНОВЫ ВЕРОУЧЕНИЯ" onClose={hideBlockInfo}>
      <div className="flex flex-col text-left">
        <p className="mb-6 text-lg text-[var(--color-primary-dark)]">
          Религиозной группы "Служение ДОБРОЕ ДУХОВНОЕ"
        </p>

        <div className="mb-6 grid grid-cols-4 gap-2 text-xs">
          {beliefSections.map((section) => (
            <button
              key={section.id}
              className={`cursor-pointer rounded-lg px-3 py-4 text-center text-[var(--color-primary-dark)] transition-colors hover:opacity-90 ${
                selectedSection?.id === section.id
                  ? 'bg-[var(--color-accent-yellow)]'
                  : 'bg-[var(--color-primary-light)]'
              }`}
              onClick={() => setSelectedSection(section)}
            >
              {section.name}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto">{selectedSection?.content}</div>
      </div>
    </BaseBlock>
  );
};

export default WhatWeBelieveBlock;
