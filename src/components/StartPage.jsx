import { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import {
  AboutUsBlock,
  DailyMessageBlock,
  HowToFindUsBlock,
  PartnersBlock,
  AddictionHelpBlock,
  RadioPlayerBlock,
  DonateBlock,
  LegalInfoBlock,
  PrayerRequestBlock,
  ListenAndWatchBlock,
  HowGodTreatsYouBlock,
  WhatWeBelieveBlock,
  PastorBlock,
} from './blocks';

const blockNames = {
  ABOUT_US: 'О НАС',
  DAILY_MESSAGE: 'ЕЖЕДНЕВНОЕ ПОСЛАНИЕ',
  HOW_TO_FIND_US: 'КАК НАС НАЙТИ',
  PARTNERS: 'ПАРТНЁРЫ',
  ADDICTION_HELP: 'ПОМОЩЬ ОТ ЗАВИСИМОСТИ (НАРКО, АЛКО, ИГРОВОЙ И Т.Д.)',
  SOCIAL_MEDIA: 'СОЦИАЛЬНЫЕ СЕТИ',
  RADIO_PLAYER: 'РАДИОПЛЕЕР',
  DONATE: 'ПОЖЕРТВОВАТЬ',
  LEGAL_INFO: 'ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ',
  PRAYER_REQUEST: 'МЫ ХОТИМ ПОМОЛИТЬСЯ ЗА ВАС',
  HOW_GOD_TREATS_YOU: 'КАК БОГ ОТНОСИТСЯ К ТЕБЕ',
  WHAT_WE_BELIEVE: 'ВО ЧТО МЫ ВЕРИМ',
  LISTEN_AND_WATCH: 'СЛУШАТЬ И СМОТРЕТЬ',
  PASTOR: 'ПАСТОР',
};

const blockUrlKeys = {
  [blockNames.ABOUT_US]: 'about',
  [blockNames.DAILY_MESSAGE]: 'daily-message',
  [blockNames.HOW_TO_FIND_US]: 'how-to-find-us',
  [blockNames.PARTNERS]: 'partners',
  [blockNames.ADDICTION_HELP]: 'addiction-help',
  [blockNames.SOCIAL_MEDIA]: 'social-media',
  [blockNames.RADIO_PLAYER]: 'radio-player',
  [blockNames.DONATE]: 'donate',
  [blockNames.LEGAL_INFO]: 'legal-info',
  [blockNames.PRAYER_REQUEST]: 'prayer-request',
  [blockNames.HOW_GOD_TREATS_YOU]: 'how-god-treats-you',
  [blockNames.WHAT_WE_BELIEVE]: 'what-we-believe',
  [blockNames.LISTEN_AND_WATCH]: 'listen-and-watch',
  [blockNames.PASTOR]: 'pastor',
};

const AboutVersion = ({ isStartPage }) => (
  <div>About Version {isStartPage ? 'Start Page' : ''}</div>
);

const Download = () => <div>Download Component</div>;
const Feedback = ({ onClose }) => (
  <div>
    Feedback Component <button onClick={onClose}>Close</button>
  </div>
);
const FrequentlyAskedQuestions = () => <div>FAQ Component</div>;
const HowItWorks = () => <div>How It Works Component</div>;
const LevelIntro = () => <div>Level Intro Component</div>;
const Login = ({ handleClick }) => (
  <div>
    Login Component{' '}
    <button onClick={() => handleClick('connect')}>Connect</button>
  </div>
);
const Logo = () => <div>Logo Component</div>;
const Partners = () => <div>Partners Component</div>;
const PasswordRecovery = () => <div>Password Recovery Component</div>;
const Reviews = () => <div>Reviews Component</div>;

// Временные заглушки для иконок
const Close = ({ className, onClick }) => (
  <svg
    className={className}
    onClick={onClick}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const LevelLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const useRouter = () => {
  const navigate = (path) => {
    // Здесь можно использовать window.history или другой способ навигации
    console.log('Navigating to:', path);
  };

  const replace = (path) => {
    console.log('Replacing with:', path);
  };

  return { navigate, replace, pathname: window.location.pathname };
};

// Простой Link компонент
const Link = ({ href, children, className, ...props }) => (
  <a href={href} className={className} {...props}>
    {children}
  </a>
);

const contentRoutes = {
  signIn: 'sign-in',
  connect: 'connect-with-us',
  updates: 'updates',
  partners: 'partners',
  intro: 'what-is-level',
  reviews: 'reviews',
  howItWork: 'how-it-works',
  faq: 'faq',
  download: 'download',
  logo: 'about',
};

function StartPage({ defaultContentKey = null }) {
  const router = useRouter();
  const [contentKey, setContentKey] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [radioPlayerVisible, setRadioPlayerVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Функции для управления блоками (объявляем здесь, чтобы они были доступны в компонентах)
  const showBlockInfo = (blockType) => {
    if (selectedBlock !== blockType) {
      setSelectedBlock(blockType);
      // Обновляем URL для переключения страниц
      window.history.pushState(
        { block: blockType },
        '',
        `/${blockUrlKeys[blockType]}`
      );
    }
  };

  // Функция для скрытия информационного блока
  const hideBlockInfo = () => {
    if (selectedBlock !== null) {
      setSelectedBlock(null);
      // Возвращаемся к главной странице
      window.history.pushState({}, '', '/');
    }
  };

  // Функции для управления радиоплеером
  const toggleRadioPlayer = () => {
    setRadioPlayerVisible(!radioPlayerVisible);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Здесь можно добавить логику воспроизведения/паузы
    console.log(isPlaying ? 'Pause' : 'Play');
  };

  const closeRadioPlayer = () => {
    setRadioPlayerVisible(false);
    setIsPlaying(false);
  };

  // Объект для переключения между компонентами
  const blockComponents = {
    [blockNames.ABOUT_US]: (
      <AboutUsBlock blockNames={blockNames} hideBlockInfo={hideBlockInfo} />
    ),
    [blockNames.DAILY_MESSAGE]: (
      <DailyMessageBlock
        blockNames={blockNames}
        hideBlockInfo={hideBlockInfo}
      />
    ),
    [blockNames.HOW_TO_FIND_US]: (
      <HowToFindUsBlock blockNames={blockNames} hideBlockInfo={hideBlockInfo} />
    ),
    [blockNames.PARTNERS]: (
      <PartnersBlock blockNames={blockNames} hideBlockInfo={hideBlockInfo} />
    ),
    [blockNames.ADDICTION_HELP]: (
      <AddictionHelpBlock
        blockNames={blockNames}
        hideBlockInfo={hideBlockInfo}
      />
    ),
    [blockNames.RADIO_PLAYER]: (
      <RadioPlayerBlock blockNames={blockNames} hideBlockInfo={hideBlockInfo} />
    ),
    [blockNames.DONATE]: (
      <DonateBlock blockNames={blockNames} hideBlockInfo={hideBlockInfo} />
    ),
    [blockNames.LEGAL_INFO]: (
      <LegalInfoBlock blockNames={blockNames} hideBlockInfo={hideBlockInfo} />
    ),
    [blockNames.PRAYER_REQUEST]: (
      <PrayerRequestBlock
        blockNames={blockNames}
        hideBlockInfo={hideBlockInfo}
      />
    ),
    [blockNames.HOW_GOD_TREATS_YOU]: (
      <HowGodTreatsYouBlock
        blockNames={blockNames}
        hideBlockInfo={hideBlockInfo}
      />
    ),
    [blockNames.WHAT_WE_BELIEVE]: (
      <WhatWeBelieveBlock
        blockNames={blockNames}
        hideBlockInfo={hideBlockInfo}
      />
    ),
    [blockNames.LISTEN_AND_WATCH]: (
      <ListenAndWatchBlock
        blockNames={blockNames}
        hideBlockInfo={hideBlockInfo}
      />
    ),
    [blockNames.PASTOR]: (
      <PastorBlock blockNames={blockNames} hideBlockInfo={hideBlockInfo} />
    ),
  };

  useEffect(() => {
    if (defaultContentKey) {
      setContentKey(defaultContentKey);
    }
  }, [defaultContentKey]);

  const handleContentClick = async (newContentKey) => {
    if (defaultContentKey) {
      await router.replace('/', undefined, { shallow: true, scroll: false });
    }
    if (contentKey === newContentKey) {
      setContentKey(null);
    } else {
      setContentKey(newContentKey);
      handleClick(newContentKey);
    }
  };

  const contentObjects = {
    signIn: <Login handleClick={() => handleContentClick('connect')} />,
    connect: (
      <div className="flex w-full flex-col gap-6 md:gap-0">
        <p className="mb-4 font-semibold md:font-bold">{blockNames.ABOUT_US}</p>
        <Feedback onClose={() => setContentKey(null)} />
      </div>
    ),
    updates: <AboutVersion isStartPage={true} />,
    partners: <Partners />,
    intro: <LevelIntro />,
    reviews: <Reviews />,
    howItWork: <HowItWorks />,
    faq: <FrequentlyAskedQuestions />,
    download: <Download />,
    logo: <Logo />,
    passwordRecovery: <PasswordRecovery contentKey={contentKey} />,
  };

  const handleClick = (contentKey) => {
    if (contentKey && contentRoutes[contentKey]) {
      router.replace(`/${contentRoutes[contentKey]}`, undefined, {
        shallow: true,
        scroll: false,
      });
    }
  };

  // Обработка навигации по истории браузера
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.block) {
        setSelectedBlock(event.state.block);
      } else {
        setSelectedBlock(null);
      }
    };

    // Восстанавливаем состояние при загрузке страницы
    const path = window.location.pathname;
    if (path !== '/') {
      // Находим соответствующий блок по английскому URL
      const foundBlock = Object.entries(blockUrlKeys).find(
        ([, urlKey]) => urlKey === path.substring(1)
      );
      if (foundBlock) {
        setSelectedBlock(foundBlock[0]);
      }
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  return (
    <main className="relative mx-auto hidden h-[93vh] w-full max-w-7xl text-sm font-semibold md:flex lg:text-base xl:text-lg">
      <aside className="flex h-full w-1/4 flex-col gap-4 leading-tight xl:gap-7 xl:pr-3">
        <div
          onClick={() => {
            hideBlockInfo();
            window.history.pushState({}, '', '/');
          }}
          className="flex h-[14%] cursor-pointer items-center justify-center rounded-2xl bg-white transition-colors hover:bg-gray-50"
        >
          <img src={logo} alt="Логотип" className="w-52" />
        </div>

        <div
          onClick={() => showBlockInfo(blockNames.ABOUT_US)}
          className="h-[18%] cursor-pointer rounded-2xl bg-[#8FAED3] text-left text-[#023047] hover:opacity-80"
        >
          <p className="mt-4 flex rounded-2xl p-5">{blockNames.ABOUT_US}</p>
        </div>
        <div
          onClick={() => showBlockInfo(blockNames.DAILY_MESSAGE)}
          className="h-[18%] cursor-pointer rounded-2xl bg-[#FEB603] text-left text-[#023047] transition-colors hover:opacity-90"
        >
          <p className="mt-4 flex h-full w-full rounded-2xl p-5">
            {blockNames.DAILY_MESSAGE}
          </p>
        </div>
        <div
          onClick={() => showBlockInfo(blockNames.HOW_TO_FIND_US)}
          className="blue-two-layers h-[18%] cursor-pointer rounded-2xl hover:opacity-90"
        >
          <p className="mt-4 flex h-full w-full rounded-2xl p-5">
            {blockNames.HOW_TO_FIND_US}
          </p>
        </div>
        <div
          onClick={() => showBlockInfo(blockNames.PARTNERS)}
          className="white-gray-two-layers h-[18%] cursor-pointer rounded-2xl hover:opacity-90"
        >
          <p className="mt-4 flex h-full w-full rounded-2xl p-5 text-[#023047]">
            {blockNames.PARTNERS}
          </p>
        </div>
      </aside>

      <section className="flex h-full w-1/2 flex-col gap-7 px-3 leading-tight text-white">
        {selectedBlock ? (
          blockComponents[selectedBlock]
        ) : (
          <>
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                hideBlockInfo();
                window.history.pushState({}, '', '/');
              }}
              className="flex h-[14%] w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat p-5 text-white lg:p-7"
              style={{
                backgroundImage: "url('./src/assets/how-god-treats-you.webp')",
              }}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="w-1/3 text-left text-[#023047]">
                  {'КОНФЕРЕНЦИЯ «МЕДИАКОМАНДА» - 2025'}
                </p>
                <p className="w-1/4 text-right text-[#023047]">
                  {'10-11 октября 2025'}
                </p>
              </div>
            </Link>
            <div
              className={`grid flex-1 grid-cols-2 gap-4 text-2xl leading-tight transition-opacity duration-300 xl:gap-7 ${
                contentKey ? 'pointer-events-none opacity-0' : 'opacity-100'
              }`}
            >
              <div
                onClick={() => showBlockInfo(blockNames.HOW_GOD_TREATS_YOU)}
                className="flex h-full cursor-pointer rounded-2xl bg-cover bg-center bg-no-repeat p-5 grayscale hover:opacity-90 hover:grayscale-0 lg:p-7"
                style={{
                  backgroundImage:
                    "url('./src/assets/how-god-treats-you.webp')",
                }}
              >
                <span className="w-2/3 text-left font-bold text-white drop-shadow-lg">
                  КАК БОГ ОТНОСИТСЯ К ТЕБЕ
                </span>
              </div>
              <div
                onClick={() => showBlockInfo(blockNames.WHAT_WE_BELIEVE)}
                className="flex h-full cursor-pointer rounded-2xl bg-cover bg-center bg-no-repeat p-5 grayscale hover:opacity-90 hover:grayscale-0 lg:p-7"
                style={{
                  backgroundImage: "url('./src/assets/what-we-believe.webp')",
                }}
              >
                <span className="w-2/3 text-left font-bold text-white drop-shadow-lg">
                  ВО ЧТО МЫ ВЕРИМ
                </span>
              </div>

              <div
                onClick={() => showBlockInfo(blockNames.LISTEN_AND_WATCH)}
                className="flex h-full cursor-pointer rounded-2xl bg-cover bg-center bg-no-repeat p-5 grayscale hover:opacity-90 hover:grayscale-0 lg:p-7"
                style={{
                  backgroundImage: "url('./src/assets/listen-and-watch.webp')",
                }}
              >
                <span className="w-2/3 text-left font-bold text-white drop-shadow-lg">
                  СЛУШАТЬ И СМОТРЕТЬ
                </span>
              </div>

              <div
                onClick={() => showBlockInfo(blockNames.PASTOR)}
                className="flex h-full cursor-pointer rounded-2xl bg-cover bg-center bg-no-repeat p-5 grayscale hover:opacity-90 hover:grayscale-0 lg:p-7"
                style={{
                  backgroundImage: "url('./src/assets/pastor.webp')",
                }}
              >
                <span className="w-2/3 text-left font-bold text-white drop-shadow-lg">
                  ПАСТОР
                </span>
              </div>
            </div>
          </>
        )}
        <div
          className={`relative p-10 text-3xl ${
            contentKey ? 'flex' : 'hidden'
          } h-full w-full overflow-hidden rounded-2xl bg-white text-black`}
        >
          {contentObjects[contentKey]}
          <Close
            className="absolute top-10 right-9 h-6 w-6 cursor-pointer stroke-black"
            onClick={() => {
              setContentKey(null);
              if (defaultContentKey) {
                router.replace('/', undefined, { shallow: true });
              }
            }}
          />
        </div>
      </section>

      <aside className="flex w-1/4 flex-col gap-4 leading-tight xl:gap-7 xl:pl-3">
        <div
          onClick={() => showBlockInfo(blockNames.PRAYER_REQUEST)}
          className="flex h-[14%] cursor-pointer justify-end rounded-2xl bg-[#8FAED3] hover:opacity-90"
        >
          <p className="w-3/4 p-5 text-right text-[#023047] lg:w-2/3">
            {blockNames.PRAYER_REQUEST}
          </p>
        </div>
        <div
          onClick={() => showBlockInfo(blockNames.ADDICTION_HELP)}
          className="flex h-[19%] cursor-pointer justify-end rounded-2xl bg-[#FEB603] hover:opacity-90"
        >
          <p className="w-5/6 p-5 text-right text-[#023047] lg:w-3/4">
            {blockNames.ADDICTION_HELP}
          </p>
        </div>

        <div className="h-[7%] rounded-2xl bg-[#8FAED3] hover:opacity-90">
          <div className="flex h-full w-full items-center justify-center gap-4 p-3">
            <a
              href="https://youtube.com/@dobroeduhovnoe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#023047] transition-opacity hover:opacity-90"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            <a
              href="https://t.me/dobroeduhovnoe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#023047] transition-opacity hover:opacity-90"
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
                className="fill-white"
              >
                <path
                  d="M1.20231 5.71119C1.20231 5.71119 7.45231 3.1317 9.61991 2.2234C10.4509 1.86011 13.2688 0.697478 13.2688 0.697478C13.2688 0.697478 14.5694 0.188871 14.461 1.42411C14.4248 1.93277 14.1358 3.71297 13.8468 5.63854C13.4133 8.36339 12.9436 11.3425 12.9436 11.3425C12.9436 11.3425 12.8714 12.1782 12.2572 12.3235C11.6431 12.4688 10.6315 11.8149 10.4509 11.6695C10.3063 11.5606 7.74131 9.92562 6.80201 9.12633C6.54911 8.90836 6.26011 8.47241 6.83811 7.96375C8.13871 6.76481 9.69216 5.27525 10.6315 4.33064C11.065 3.89464 11.4985 2.87737 9.69216 4.11261C7.12716 5.89286 4.59826 7.5641 4.59826 7.5641C4.59826 7.5641 4.02021 7.92739 2.93641 7.60041C1.85256 7.27347 0.588112 6.83747 0.588112 6.83747C0.588112 6.83747 -0.278888 6.29251 1.20231 5.71119Z"
                  fill="white"
                />
              </svg>
            </a>

            {/* VK */}
            <a
              href="https://vk.com/dobroeduhovnoe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#023047] transition-opacity hover:opacity-90"
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                width="17"
                height="11"
                viewBox="0 0 17 11"
                fill="none"
                className="fill-white"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.02754 10.3029H9.00864C9.00864 10.3029 9.30499 10.2704 9.45629 10.1073C9.59556 9.95757 9.5911 9.67636 9.5911 9.67636C9.5911 9.67636 9.57194 8.35992 10.1829 8.16606C10.7852 7.9751 11.5586 9.43839 12.3784 10.001C12.9983 10.4268 13.4694 10.3335 13.4694 10.3335L15.6613 10.3029C15.6613 10.3029 16.8079 10.2323 16.2642 9.33076C16.2197 9.25701 15.9476 8.66385 14.6345 7.445C13.2601 6.16933 13.4442 6.37567 15.0998 4.16904C16.108 2.82518 16.5111 2.00474 16.3852 1.65335C16.2651 1.31867 15.5236 1.40713 15.5236 1.40713L13.0556 1.4225C13.0556 1.4225 12.8726 1.39755 12.7369 1.47866C12.6044 1.5582 12.519 1.74359 12.519 1.74359C12.519 1.74359 12.1284 2.78351 11.6074 3.6679C10.5085 5.53406 10.0691 5.63255 9.88946 5.51668C9.47167 5.24662 9.57595 4.43175 9.57595 3.85285C9.57595 2.04441 9.85024 1.29037 9.04184 1.09518C8.77356 1.03033 8.57613 0.987551 7.89006 0.980644C7.00946 0.971508 6.26411 0.983317 5.84208 1.1901C5.56132 1.32758 5.34474 1.63396 5.47665 1.65157C5.63975 1.6734 6.0092 1.75117 6.20506 2.01789C6.45797 2.36193 6.44905 3.13469 6.44905 3.13469C6.44905 3.13469 6.59434 5.26355 6.10969 5.52804C5.77702 5.70942 5.32067 5.33909 4.34091 3.64607C3.83889 2.77884 3.45986 1.82025 3.45986 1.82025C3.45986 1.82025 3.38678 1.64109 3.25643 1.54528C3.09822 1.42919 2.87718 1.3922 2.87718 1.3922L0.531953 1.40757C0.531953 1.40757 0.179891 1.41738 0.0506524 1.57046C-0.0643249 1.70661 0.0415165 1.98826 0.0415165 1.98826C0.0415165 1.98826 1.87759 6.28386 3.95654 8.4486C5.8628 10.4333 8.02754 10.3029 8.02754 10.3029Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
        <div
          onClick={toggleRadioPlayer}
          className="blue-two-layers relative h-[19%] cursor-pointer rounded-2xl hover:opacity-90"
        >
          {!radioPlayerVisible ? (
            <p className="mt-4 flex h-full w-full rounded-2xl p-5">
              {blockNames.RADIO_PLAYER}
            </p>
          ) : (
            <div className="relative flex h-full flex-col items-center justify-center p-3">
              {/* Крестик закрытия */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeRadioPlayer();
                }}
                className="absolute top-2 right-3 text-lg font-bold text-white hover:text-gray-300"
              >
                ✕
              </button>

              {/* Название радиостанции */}
              <p className="mb-2 text-center text-sm text-white">
                Доброе Духовное Радио
              </p>

              {/* Кнопки управления */}
              <div className="flex items-center gap-3">
                {/* Кнопка Play/Pause */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlayPause();
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-200"
                >
                  {isPlaying ? (
                    <span className="-mt-0.5 text-lg text-[#023047]">⏸</span>
                  ) : (
                    <span className="ml-0.5 text-lg text-[#023047]">▶</span>
                  )}
                </button>

                {/* Индикатор громкости */}
                <div className="flex items-center gap-1">
                  <span className="text-xs text-white">🔊</span>
                  <div className="h-1 w-12 rounded bg-white">
                    <div className="h-1 w-8 rounded bg-[#FFB700]"></div>
                  </div>
                </div>
              </div>

              {/* Статус */}
              <p className="mt-2 text-xs text-white">
                {isPlaying ? 'В эфире' : 'Остановлено'}
              </p>
            </div>
          )}
        </div>
        <div
          onClick={() => showBlockInfo(blockNames.DONATE)}
          className="white-gray-two-layers h-[19%] cursor-pointer rounded-2xl hover:opacity-90"
        >
          <p className="mt-4 flex h-full w-full rounded-2xl p-5 text-[#023047]">
            {blockNames.DONATE}
          </p>
        </div>
        <div
          onClick={() => showBlockInfo(blockNames.LEGAL_INFO)}
          className="h-[7%] cursor-pointer rounded-2xl bg-[#8FAED3] hover:opacity-90"
        >
          <p className="flex h-full w-full items-center justify-center rounded-2xl p-5 text-right text-[#023047]">
            {blockNames.LEGAL_INFO}
          </p>
        </div>
      </aside>
    </main>
  );
}

export default StartPage;
