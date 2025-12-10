import React from 'react';
import BaseBlock from './BaseBlock';
import { urls } from '../../constants';

const ListenAndWatchBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <BaseBlock title={blockNames.LISTEN_AND_WATCH} onClose={hideBlockInfo}>
      <div className="flex flex-col text-left">
        <div className="mb-6">
          <p className="mb-3 text-lg text-gray-700">
            Посмотреть наши программы, шортсы и другие ролики вы можете здесь:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700">
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
                href={urls.VK_VIDEO}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:opacity-90"
              >
                VK
              </a>
            </li>
          </ul>
        </div>
      </div>
    </BaseBlock>
  );
};

export default ListenAndWatchBlock;
