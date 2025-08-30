import React from 'react';
import BaseBlock from './BaseBlock';
import { urls } from '../../constants';

const ListenAndWatchBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <BaseBlock title={blockNames.LISTEN_AND_WATCH} onClose={hideBlockInfo}>
      <div className="flex flex-col text-left">
        <p className="mb-6 text-lg text-[#023047]">
          Религиозная группа "Служение ДОБРОЕ ДУХОВНОЕ"
        </p>

        <div className="mb-6">
          <h2 className="mb-3 text-2xl font-bold text-[#023047]">СЛУШАТЬ</h2>
          <p className="mb-3 text-lg text-gray-700">
            Наши аудиопрограммы, подкасты можно слушать здесь:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>
              <a
                href={urls.YANDEX_MUSIC}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:opacity-90"
              >
                ЯндексМузыка
              </a>
            </li>
            <li>
              <a
                href={urls.ZVUK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:opacity-90"
              >
                ЗВУК
              </a>
            </li>
            <li>
              <a
                href={urls.TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:opacity-90"
              >
                Telegram
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="mb-3 text-2xl font-bold text-[#023047]">СМОТРЕТЬ</h2>
          <p className="mb-3 text-lg text-gray-700">
            Посмотреть наши программы, шортсы и другие ролики вы можете здесь:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>
              <a
                href={urls.VK_VIDEO}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:opacity-90"
              >
                VKvideo
              </a>
            </li>
            <li>
              <a
                href={urls.RUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:opacity-90"
              >
                Rutube
              </a>
            </li>
            <li>
              <a
                href={urls.TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:opacity-90"
              >
                Telegram
              </a>
            </li>
            <li>
              <a
                href={urls.YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:opacity-90"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </BaseBlock>
  );
};

export default ListenAndWatchBlock;
