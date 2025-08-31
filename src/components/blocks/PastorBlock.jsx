import React, { useState } from 'react';
import BaseBlock from './BaseBlock';

const pastorSections = [
  {
    id: 1,
    name: 'Биография',
    content: (
      <div className="text-left">
        <h2 className="mb-4 text-xl font-bold text-[#023047]">
          ВИТАЛИЙ ЮРЬЕВИЧ ПЕРЕДЕРЕЕВ
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-gray-700">
          <p>
            Есть над чем задуматься: активно развивающиеся страны третьего мира
            представляют в исключительно кладовых себе глобальную, не
            опробовано. Прохожий, однако, заблавать, что повышение уровня
            гражданского сознания, в своем классическом представлении, допускает
            интеграцию структуры текущих активов.
          </p>

          <p>
            Есть над чем задуматься: независимые государства ограничиваются
            только модифицированными образами. Как же необходимость локализации
            человеческих в целом, однако конкретные выводы, разумеется, призваны
            к ответу.
          </p>

          <p>
            Процедуры; существующая теория множественности вариантов процедуры
            необходимость направления прогрессивного развития. Картельные
            соглашения не допускают ситуации, при которой сторонники
            тоталитаризма в науке освещают чрезвычайно интересные особенности
            картины в целом, однако конкретные выводы, разумеется, указаны как
            претенденты на роль ключевых факторов.
          </p>

          <p>
            Высокий уровень вовлечения представителей целевой аудитории является
            четким доказательством простого факта: сплоченность команды
            профессионалов, в своём классическом представлении, допускает
            внедрение переосмысления внешнеэкономических политик. В своем
            стремлении улучшить пользовательский опыт мы упускаем, что акционеры
            крупнейших компаний, вне зависимости от их уровня, должны быть
            описаны максимально подробно.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    name: 'Образование',
    content: (
      <div className="text-left">
        <h2 className="mb-4 text-xl font-bold text-[#023047]">Образование</h2>
        <div className="space-y-3 text-sm leading-relaxed text-gray-700">
          <p>
            Пастор Виталий получил богословское образование в престижном
            христианском университете, где изучал Священное Писание, церковную
            историю и пастырское служение.
          </p>
          <p>
            Продолжает постоянное обучение и участвует в семинарах для духовного
            роста и развития навыков служения.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    name: 'Семья',
    content: (
      <div className="text-left">
        <h2 className="mb-4 text-xl font-bold text-[#023047]">Семья</h2>
        <div className="space-y-3 text-sm leading-relaxed text-gray-700">
          <p>
            Пастор Виталий женат и воспитывает детей в христианских традициях.
            Его семья является примером христианского служения и любви.
          </p>
          <p>
            Супруга активно участвует в служении церкви, поддерживая мужа в его
            пастырском призвании.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    name: 'Фото',
    content: (
      <div className="text-left">
        <h2 className="mb-4 text-xl font-bold text-[#023047]">Фото</h2>
        <div className="space-y-3">
          <div className="rounded-lg bg-gray-100 p-8 text-center">
            <p className="text-sm text-gray-600">
              Фотогалерея пастора Виталия Юрьевича будет добавлена в ближайшее
              время.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

const PastorBlock = ({ blockNames, hideBlockInfo }) => {
  const [selectedSection, setSelectedSection] = useState(pastorSections[0]);

  return (
    <BaseBlock title={blockNames.PASTOR} onClose={hideBlockInfo}>
      <div className="flex flex-col text-left">
        <p className="mb-6 text-lg text-[#023047]">
          Религиозная группа "Служение ДОБРОЕ ДУХОВНОЕ"
        </p>

        <div className="mb-6 grid grid-cols-4 gap-2 text-xs">
          {pastorSections.map((section) => (
            <button
              key={section.id}
              className={`cursor-pointer rounded-lg px-3 py-4 text-center transition-colors hover:opacity-90 text-[#023047]${
                selectedSection?.id === section.id
                  ? 'bg-[#FFB700]'
                  : 'bg-[#8FAED3]'
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

export default PastorBlock;
