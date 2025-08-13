import { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import {
  AboutUsBlock,
  DailyMessageBlock,
  HowToFindUsBlock,
  PartnersBlock,
  AddictionHelpBlock,
  SocialMediaBlock,
  RadioPlayerBlock,
  DonateBlock,
  LegalInfoBlock,
  PrayerRequestBlock,
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

  // Функции для управления блоками (объявляем здесь, чтобы они были доступны в компонентах)
  const showBlockInfo = (blockType) => {
    setSelectedBlock(blockType);
    // Обновляем URL для переключения страниц
    window.history.pushState(
      { block: blockType },
      '',
      `/${blockUrlKeys[blockType]}`
    );
  };

  // Функция для скрытия информационного блока
  const hideBlockInfo = () => {
    setSelectedBlock(null);
    // Возвращаемся к главной странице
    window.history.pushState({}, '', '/');
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
    [blockNames.SOCIAL_MEDIA]: (
      <SocialMediaBlock blockNames={blockNames} hideBlockInfo={hideBlockInfo} />
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
    <>
      <main className="relative mx-auto hidden h-[90vh] w-full max-w-6xl overflow-hidden text-sm font-semibold md:flex lg:text-base xl:text-lg">
        <aside className="flex h-full w-1/4 flex-col gap-4 xl:gap-7 xl:pr-3">
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

        <section className="flex h-full w-1/2 flex-col gap-7 overflow-hidden px-3 text-white">
          {selectedBlock ? (
            // Показываем соответствующий компонент
            blockComponents[selectedBlock]
          ) : (
            // Обычный контент
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
                  backgroundImage: "url('./src/assets/about.webp')",
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
                className={`${
                  contentKey ? 'hidden' : 'grid'
                } flex-1 grid-cols-2 gap-4 xl:gap-7`}
              >
                <Link
                  href={`/${contentRoutes['intro']}`}
                  className="flex h-full transform cursor-pointer items-center justify-center rounded-2xl bg-cover bg-center bg-no-repeat p-5 grayscale transition duration-300 hover:scale-105 hover:grayscale-0 lg:p-7"
                  style={{
                    backgroundImage: "url('./src/assets/about.webp')",
                  }}
                >
                  <span className="text-center text-lg font-bold text-white drop-shadow-lg">
                    {blockNames.ABOUT_US}
                  </span>
                </Link>
                <Link
                  href={`/${contentRoutes['reviews']}`}
                  className="flex h-full transform cursor-pointer items-center justify-center rounded-2xl bg-cover bg-center bg-no-repeat p-5 grayscale transition duration-300 hover:scale-105 hover:grayscale-0 lg:p-7"
                  style={{
                    backgroundImage: "url('./src/assets/reviews.webp')",
                  }}
                >
                  <span className="text-center text-lg font-bold text-white drop-shadow-lg">
                    {blockNames.PARTNERS}
                  </span>
                </Link>

                <Link
                  href={`/${contentRoutes['howItWork']}`}
                  className="flex h-full transform cursor-pointer items-center justify-center rounded-2xl bg-cover bg-center bg-no-repeat p-5 grayscale transition duration-300 hover:scale-105 hover:grayscale-0 lg:p-7"
                  style={{
                    backgroundImage: "url('./src/assets/inside.webp')",
                  }}
                >
                  <span className="text-center text-lg font-bold text-white drop-shadow-lg">
                    {blockNames.HOW_TO_FIND_US}
                  </span>
                </Link>

                <Link
                  href={`/${contentRoutes['faq']}`}
                  className="flex h-full transform cursor-pointer items-center justify-center rounded-2xl bg-cover bg-center bg-no-repeat p-5 grayscale transition duration-300 hover:scale-105 hover:grayscale-0 lg:p-7"
                  style={{
                    backgroundImage: "url('./src/assets/faq.webp')",
                  }}
                >
                  <span className="text-center text-lg font-bold text-white drop-shadow-lg">
                    {blockNames.PARTNERS}
                  </span>
                </Link>
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

        <aside className="flex w-1/4 flex-col gap-4 xl:gap-7 xl:pl-3">
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
            className="flex h-[18%] cursor-pointer justify-end rounded-2xl bg-[#FEB603] hover:opacity-90"
          >
            <p className="w-5/6 p-5 text-right text-[#023047] lg:w-3/4">
              {blockNames.ADDICTION_HELP}
            </p>
          </div>

          <div
            onClick={() => showBlockInfo(blockNames.SOCIAL_MEDIA)}
            className="h-[7%] cursor-pointer rounded-2xl bg-[#8FAED3] hover:opacity-90"
          >
            <p className="flex h-full w-full items-center justify-center rounded-2xl p-5 font-semibold text-[#023047]">
              YouTube | Telegram | VK
            </p>
          </div>
          <div
            onClick={() => showBlockInfo(blockNames.RADIO_PLAYER)}
            className="blue-two-layers h-[18%] cursor-pointer rounded-2xl hover:opacity-90"
          >
            <p className="mt-4 flex h-full w-full rounded-2xl p-5">
              {blockNames.RADIO_PLAYER}
            </p>
          </div>
          <div
            onClick={() => showBlockInfo(blockNames.DONATE)}
            className="white-gray-two-layers h-[18%] cursor-pointer rounded-2xl hover:opacity-90"
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
    </>
  );
}

export default StartPage;
