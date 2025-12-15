import { useEffect, useState } from 'react';
import { useRadioPlayer } from '../contexts/radioPlayerContext';
import RadioPlayer from './RadioPlayer';
import logo from '../assets/logo.svg';
import mainBanner from '../assets/main-banner.png';
import howGodTreatsYou from '../assets/how-god-treats-you.webp';
import whatWeBelieve from '../assets/what-we-believe.webp';
import listenAndWatch from '../assets/listen-and-watch.webp';
import pastor from '../assets/pastor.png';
import rutubeIcon from '../assets/rutube_white.svg';
import youtubeIcon from '../assets/youtube.svg';
import telegramIcon from '../assets/telegram.svg';
import vkIcon from '../assets/vk.svg';
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

const META_DATA = {
  [blockNames.ABOUT_US]: {
    title: 'О нас - Доброе Духовное',
    description:
      'Узнайте больше о нашей миссии, команде и о том, как мы служим людям, неся им благую весть.',
  },
  [blockNames.DAILY_MESSAGE]: {
    title: 'Ежедневное послание - Доброе Духовное',
    description:
      'Получайте ежедневное духовное ободрение и наставление через наши короткие послания.',
  },
  [blockNames.HOW_TO_FIND_US]: {
    title: 'Как нас найти - Доброе Духовное',
    description:
      'Найдите адреса наших центров, время служений и контактную информацию. Мы всегда рады видеть вас!',
  },
  [blockNames.PARTNERS]: {
    title: 'Партнёры - Доброе Духовное',
    description:
      'Познакомьтесь с нашими партнёрами, которые помогают нам в служении и распространении благой вести.',
  },
  [blockNames.ADDICTION_HELP]: {
    title: 'Помощь зависимым - Доброе Духовное',
    description:
      'Мы предлагаем помощь и поддержку людям, страдающим от наркотической, алкогольной и других зависимостей.',
  },
  [blockNames.RADIO_PLAYER]: {
    title: 'Радиоплеер - Прямой эфир Доброго Духовного Радио',
    description:
      'Слушайте прямой эфир нашего радио, где бы вы ни находились. Духовная музыка, проповеди и ободряющие программы.',
  },
  [blockNames.DONATE]: {
    title: 'Пожертвовать - Поддержите наше служение',
    description:
      'Ваша поддержка помогает нам продолжать наше служение. Узнайте, как вы можете сделать пожертвование.',
  },
  [blockNames.LEGAL_INFO]: {
    title: 'Юридическая информация - Доброе Духовное',
    description:
      'Ознакомьтесь с юридической информацией о нашей организации, нашими правилами и условиями.',
  },
  [blockNames.PRAYER_REQUEST]: {
    title: 'Молитвенная просьба - Доброе Духовное',
    description:
      'Мы верим в силу молитвы. Отправьте нам свою молитвенную просьбу, и мы будем молиться за вас.',
  },
  [blockNames.HOW_GOD_TREATS_YOU]: {
    title: 'Как Бог относится к тебе - Доброе Духовное',
    description:
      'Узнайте о Божьей любви, милости и прощении. Мы поможем вам понять, как Бог видит вас.',
  },
  [blockNames.WHAT_WE_BELIEVE]: {
    title: 'Во что мы верим - Доброе Духовное',
    description:
      'Ознакомьтесь с основами нашего вероучения, нашими ценностями и принципами.',
  },
  [blockNames.LISTEN_AND_WATCH]: {
    title: 'Слушать и смотреть - Проповеди и материалы',
    description:
      'Смотрите и слушайте записи наших проповедей, семинаров и других духовных материалов в удобное для вас время.',
  },
  [blockNames.PASTOR]: {
    title: 'Пастор - Доброе Духовное',
    description:
      'Познакомьтесь с нашим пастором, его служением и учением. Найдите вдохновение в его словах.',
  },
  DEFAULT: {
    title:
      'Служение "ДОБРОЕ ДУХОВНОЕ" - Проявить любовь к Богу через любовь к человеку',
    description:
      'Мы поместная церковь с видением открывать Божью любовь к людям, рассказывая им о жертве Иисуса Христа. Мы развиваем медиа-направление для проповеди Евангелия и приглашаем вас присоединиться к нам.',
  },
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

  useEffect(() => {
    const updateMetaTags = (title, description) => {
      document.title = title;
      const descriptionTag = document.querySelector('meta[name="description"]');
      if (descriptionTag) {
        descriptionTag.setAttribute('content', description);
      }
    };

    const metaData = META_DATA[selectedBlock] || META_DATA.DEFAULT;
    updateMetaTags(metaData.title, metaData.description);
  }, [selectedBlock]);
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
  const { isPlaying, togglePlay } = useRadioPlayer();

  const toggleRadioPlayer = () => {
    setRadioPlayerVisible(!radioPlayerVisible);
  };

  const closeRadioPlayer = () => {
    if (isPlaying) {
      togglePlay();
    }
    setRadioPlayerVisible(false);
  };

  // Объект для переключения между компонентами
  const blockComponents = {
    [blockNames.ABOUT_US]: (
      <AboutUsBlock
        blockNames={blockNames}
        hideBlockInfo={hideBlockInfo}
        showBlockInfo={showBlockInfo}
      />
    ),
    [blockNames.DAILY_MESSAGE]: (
      <DailyMessageBlock
        blockNames={blockNames}
        hideBlockInfo={hideBlockInfo}
      />
    ),
    [blockNames.HOW_TO_FIND_US]: (
      <HowToFindUsBlock
        key={`how-to-find-us-${Date.now()}`}
        blockNames={blockNames}
        hideBlockInfo={hideBlockInfo}
      />
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
    <div className="relative mx-auto w-full max-w-7xl">
      {/* Mobile Layout */}
      <div className="relative flex h-[93vh] w-full flex-col text-sm font-semibold md:hidden">
        <div className="flex flex-col gap-2 p-2">
          <div
            onClick={() => {
              hideBlockInfo();
              window.history.pushState({}, '', '/');
            }}
            className="flex cursor-pointer items-center justify-center rounded-xl bg-white p-4 transition-colors hover:bg-gray-50"
          >
            <img src={logo} alt="Логотип" className="w-40" />
          </div>
          {selectedBlock ? (
            blockComponents[selectedBlock]
          ) : (
            <>
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  showBlockInfo(blockNames.HOW_TO_FIND_US);
                }}
                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat p-3 text-white"
                style={{
                  backgroundImage: `url(${mainBanner})`,
                  height: '200px',
                }}
              >
                <div className="flex w-full items-center justify-center">
                  <div className="rounded-md bg-white/80 px-6 py-2 text-center shadow-md transition-all hover:bg-white/90 hover:shadow-lg">
                    <span className="text-sm font-bold text-[#023047]">
                      ПРИХОДИТЕ НА ВОСКРЕСНОЕ БОГОСЛУЖЕНИЕ!
                    </span>
                  </div>
                </div>
              </Link>

              <div className="grid grid-cols-1 gap-4">
                <div
                  onClick={() => showBlockInfo(blockNames.HOW_GOD_TREATS_YOU)}
                  className="flex h-48 cursor-pointer rounded-xl bg-cover bg-center bg-no-repeat p-3 grayscale hover:opacity-90 hover:grayscale-0"
                  style={{
                    backgroundImage: `url(${howGodTreatsYou})`,
                  }}
                >
                  <span className="w-2/3 text-left text-lg font-bold text-white drop-shadow-lg">
                    КАК БОГ ОТНОСИТСЯ К ТЕБЕ
                  </span>
                </div>

                <div
                  onClick={() => showBlockInfo(blockNames.WHAT_WE_BELIEVE)}
                  className="flex h-48 cursor-pointer rounded-xl bg-cover bg-center bg-no-repeat p-3 grayscale hover:opacity-90 hover:grayscale-0"
                  style={{
                    backgroundImage: `url(${whatWeBelieve})`,
                  }}
                >
                  <span className="w-2/3 text-left text-lg font-bold text-white drop-shadow-lg">
                    ВО ЧТО МЫ ВЕРИМ
                  </span>
                </div>

                <div
                  onClick={() => showBlockInfo(blockNames.LISTEN_AND_WATCH)}
                  className="flex h-48 cursor-pointer rounded-xl bg-cover bg-center bg-no-repeat p-3 grayscale hover:opacity-90 hover:grayscale-0"
                  style={{
                    backgroundImage: `url(${listenAndWatch})`,
                  }}
                >
                  <span className="w-2/3 text-left text-lg font-bold text-white drop-shadow-lg">
                    СЛУШАТЬ И СМОТРЕТЬ
                  </span>
                </div>

                <div
                  onClick={() => showBlockInfo(blockNames.PASTOR)}
                  className="flex h-48 cursor-pointer rounded-xl bg-cover bg-center bg-no-repeat p-3 grayscale hover:opacity-90 hover:grayscale-0"
                  style={{
                    backgroundImage: `url(${pastor})`,
                  }}
                >
                  <span className="w-2/3 text-left text-lg font-bold text-white drop-shadow-lg">
                    ПАСТОР
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={() => showBlockInfo(blockNames.ABOUT_US)}
                  className="h-32 cursor-pointer rounded-xl bg-[var(--color-primary-light)] text-left text-[var(--color-primary-dark)] hover:opacity-80"
                >
                  <p className="flex h-full items-center rounded-xl p-3 text-sm">
                    {blockNames.ABOUT_US}
                  </p>
                </div>

                <div
                  onClick={() => showBlockInfo(blockNames.DAILY_MESSAGE)}
                  className="h-32 cursor-pointer rounded-2xl bg-[var(--color-accent-orange)] text-left text-[var(--color-primary-dark)] transition-colors hover:opacity-90"
                >
                  <p className="flex h-full items-center rounded-xl p-3 text-sm">
                    {blockNames.DAILY_MESSAGE}
                  </p>
                </div>

                <div
                  onClick={() => showBlockInfo(blockNames.HOW_TO_FIND_US)}
                  className="blue-two-layers h-32 cursor-pointer rounded-2xl hover:opacity-90"
                >
                  <p className="flex h-full items-center rounded-2xl p-4 text-sm text-white">
                    {blockNames.HOW_TO_FIND_US}
                  </p>
                </div>

                <div
                  onClick={() => showBlockInfo(blockNames.PARTNERS)}
                  className="white-gray-two-layers h-32 cursor-pointer rounded-2xl hover:opacity-90"
                >
                  <p className="flex h-full items-center rounded-2xl p-4 text-sm text-[var(--color-primary-dark)]">
                    {blockNames.PARTNERS}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={() => showBlockInfo(blockNames.PRAYER_REQUEST)}
                  className="h-32 cursor-pointer rounded-2xl bg-[var(--color-primary-light)] hover:opacity-90"
                >
                  <p className="flex h-full items-center rounded-2xl p-4 text-sm text-[var(--color-primary-dark)]">
                    {blockNames.PRAYER_REQUEST}
                  </p>
                </div>

                <div
                  onClick={() => showBlockInfo(blockNames.ADDICTION_HELP)}
                  className="h-32 cursor-pointer rounded-2xl bg-[var(--color-accent-orange)] hover:opacity-90"
                >
                  <p className="flex h-full items-center rounded-2xl p-4 text-sm text-[var(--color-primary-dark)]">
                    {blockNames.ADDICTION_HELP}
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-3 rounded-xl bg-[var(--color-primary-light)] p-3">
                <a
                  href="https://youtube.com/@dobroeduhovnoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-dark)] transition-opacity hover:opacity-90"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img src={youtubeIcon} alt="YouTube" className="h-5 w-5" />
                </a>

                <a
                  href="https://rutube.ru/channel/65324607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-dark)] transition-opacity hover:opacity-90"
                  onClick={(e) => e.stopPropagation()}
                  aria-label="Мы на Rutube"
                >
                  <img src={rutubeIcon} alt="Rutube" className="h-5 w-5" />
                </a>

                <a
                  href="https://t.me/dobroeduhovnoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-dark)] transition-opacity hover:opacity-90"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={telegramIcon}
                    alt="Telegram"
                    className="h-5 w-5"
                    style={{ transform: 'translate(-1px, 1px)' }}
                  />
                </a>

                <a
                  href="https://vk.com/dobroeduhovnoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-dark)] transition-opacity hover:opacity-90"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img src={vkIcon} alt="VK" className="h-5 w-5" />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={toggleRadioPlayer}
                  className="blue-two-layers relative h-32 cursor-pointer rounded-2xl hover:opacity-90"
                >
                  {!radioPlayerVisible ? (
                    <p className="flex h-full items-center rounded-2xl p-4 text-sm text-white">
                      {blockNames.RADIO_PLAYER}
                    </p>
                  ) : (
                    <RadioPlayer onClose={closeRadioPlayer} />
                  )}
                </div>

                <div
                  onClick={() => showBlockInfo(blockNames.DONATE)}
                  className="white-gray-two-layers h-32 cursor-pointer rounded-2xl hover:opacity-90"
                >
                  <p className="flex h-full items-center rounded-2xl p-4 text-sm text-[var(--color-primary-dark)]">
                    {blockNames.DONATE}
                  </p>
                </div>
              </div>

              <div
                onClick={() => showBlockInfo(blockNames.LEGAL_INFO)}
                className="h-12 cursor-pointer rounded-2xl bg-[var(--color-primary-light)] hover:opacity-90"
              >
                <p className="flex h-full items-center justify-center rounded-2xl p-4 text-sm text-[var(--color-primary-dark)]">
                  {blockNames.LEGAL_INFO}
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="relative hidden h-[93vh] w-full text-sm font-semibold md:flex lg:text-base xl:text-lg">
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
            className="h-[18%] cursor-pointer rounded-2xl bg-[var(--color-primary-light)] text-left text-[var(--color-primary-dark)] hover:opacity-80"
          >
            <p className="mt-4 flex rounded-2xl p-5">{blockNames.ABOUT_US}</p>
          </div>
          <div
            onClick={() => showBlockInfo(blockNames.DAILY_MESSAGE)}
            className="h-[18%] cursor-pointer rounded-2xl bg-[var(--color-accent-orange)] text-left text-[var(--color-primary-dark)] transition-colors hover:opacity-90"
          >
            <p className="mt-4 flex h-full w-full rounded-2xl p-5">
              {blockNames.DAILY_MESSAGE}
            </p>
          </div>
          <div
            onClick={() => showBlockInfo(blockNames.HOW_TO_FIND_US)}
            className="blue-two-layers h-[18%] cursor-pointer rounded-2xl hover:opacity-90"
          >
            <p className="mt-4 flex h-full w-full rounded-2xl p-5 text-white">
              {blockNames.HOW_TO_FIND_US}
            </p>
          </div>
          <div
            onClick={() => showBlockInfo(blockNames.PARTNERS)}
            className="white-gray-two-layers h-[18%] cursor-pointer rounded-2xl hover:opacity-90"
          >
            <p className="mt-4 flex h-full w-full rounded-2xl p-5 text-[var(--color-primary-dark)]">
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
                  showBlockInfo(blockNames.HOW_TO_FIND_US);
                }}
                className="flex h-[14%] w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat p-5 text-white lg:p-7"
                style={{
                  backgroundImage: `url(${mainBanner})`,
                }}
              >
                <div className="flex w-full items-center justify-center">
                  <div className="rounded-md bg-white/80 px-8 py-3 text-center shadow-md transition-all hover:bg-white/90 hover:shadow-lg">
                    <span className="text-base font-bold text-[#023047]">
                      ПРИХОДИТЕ НА ВОСКРЕСНОЕ БОГОСЛУЖЕНИЕ!
                    </span>
                  </div>
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
                    backgroundImage: `url(${howGodTreatsYou})`,
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
                    backgroundImage: `url(${whatWeBelieve})`,
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
                    backgroundImage: `url(${listenAndWatch})`,
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
                    backgroundImage: `url(${pastor})`,
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
            className="flex h-[14%] cursor-pointer justify-end rounded-2xl bg-[var(--color-primary-light)] hover:opacity-90"
          >
            <p className="w-3/4 p-5 text-right text-[var(--color-primary-dark)] lg:w-2/3">
              {blockNames.PRAYER_REQUEST}
            </p>
          </div>
          <div
            onClick={() => showBlockInfo(blockNames.ADDICTION_HELP)}
            className="flex h-[19%] cursor-pointer justify-end rounded-2xl bg-[var(--color-accent-orange)] hover:opacity-90"
          >
            <p className="w-5/6 p-5 text-right text-[var(--color-primary-dark)] lg:w-3/4">
              {blockNames.ADDICTION_HELP}
            </p>
          </div>

          <div className="h-[7%] rounded-2xl bg-[var(--color-primary-light)] hover:opacity-90">
            <div className="flex h-full w-full items-center justify-center gap-4 p-3">
              <a
                href="https://youtube.com/@dobroeduhovnoe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-dark)] transition-opacity hover:opacity-90"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={youtubeIcon} alt="YouTube" className="h-5 w-5" />
              </a>

              <a
                href="https://rutube.ru/channel/65324607"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-dark)] transition-opacity hover:opacity-90"
                onClick={(e) => e.stopPropagation()}
                aria-label="Мы на Rutube"
              >
                <img src={rutubeIcon} alt="Rutube" className="h-5 w-5" />
              </a>

              <a
                href="https://t.me/dobroeduhovnoe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-dark)] transition-opacity hover:opacity-90"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={telegramIcon}
                  alt="Telegram"
                  className="h-5 w-5"
                  style={{ transform: 'translate(-1px, 1px)' }}
                />
              </a>

              {/* VK */}
              <a
                href="https://vk.com/dobroeduhovnoe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-dark)] transition-opacity hover:opacity-90"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={vkIcon} alt="VK" className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div
            onClick={toggleRadioPlayer}
            className="blue-two-layers relative h-[19%] cursor-pointer rounded-2xl hover:opacity-90"
          >
            {!radioPlayerVisible ? (
              <p className="mt-4 flex h-full w-full rounded-2xl p-5 text-white">
                {blockNames.RADIO_PLAYER}
              </p>
            ) : (
              <RadioPlayer onClose={closeRadioPlayer} />
            )}
          </div>
          <div
            onClick={() => showBlockInfo(blockNames.DONATE)}
            className="white-gray-two-layers h-[19%] cursor-pointer rounded-2xl hover:opacity-90"
          >
            <p className="mt-4 flex h-full w-full rounded-2xl p-5 text-[var(--color-primary-dark)]">
              {blockNames.DONATE}
            </p>
          </div>
          <div
            onClick={() => showBlockInfo(blockNames.LEGAL_INFO)}
            className="h-[7%] cursor-pointer rounded-2xl bg-[var(--color-primary-light)] hover:opacity-90"
          >
            <p className="flex h-full w-full items-center justify-center rounded-2xl p-5 text-right text-[var(--color-primary-dark)]">
              {blockNames.LEGAL_INFO}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default StartPage;
