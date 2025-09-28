import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useRadioPlayer } from '../contexts/radioPlayerContext';
import RadioPlayer from './RadioPlayer';
import logo from '../assets/logo.svg';

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

export default function Layout() {
  const [radioPlayerVisible, setRadioPlayerVisible] = useState(false);
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

  return (
    <div className="relative mx-auto w-full max-w-7xl">
      {/* Mobile Layout */}
      <div className="relative flex h-[93vh] w-full flex-col text-sm font-semibold md:hidden">
        <div className="flex flex-col gap-2 p-2">
          <Link
            to="/"
            className="flex cursor-pointer items-center justify-center rounded-xl bg-white p-4 transition-colors hover:bg-gray-50"
          >
            <img src={logo} alt="Логотип" className="w-40" />
          </Link>

          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/about"
              className="h-32 cursor-pointer rounded-xl bg-[var(--color-primary-light)] text-left text-[var(--color-primary-dark)] hover:opacity-80"
            >
              <p className="flex h-full items-center rounded-xl p-3 text-sm">
                {blockNames.ABOUT_US}
              </p>
            </Link>

            <Link
              to="/daily-message"
              className="h-32 cursor-pointer rounded-2xl bg-[var(--color-accent-orange)] text-left text-[var(--color-primary-dark)] transition-colors hover:opacity-90"
            >
              <p className="flex h-full items-center rounded-xl p-3 text-sm">
                {blockNames.DAILY_MESSAGE}
              </p>
            </Link>

            <Link
              to="/how-to-find-us"
              className="blue-two-layers h-32 cursor-pointer rounded-2xl hover:opacity-90"
            >
              <p className="flex h-full items-center rounded-2xl p-4 text-sm text-white">
                {blockNames.HOW_TO_FIND_US}
              </p>
            </Link>

            <Link
              to="/partners"
              className="white-gray-two-layers h-32 cursor-pointer rounded-2xl hover:opacity-90"
            >
              <p className="flex h-full items-center rounded-2xl p-4 text-sm text-[var(--color-primary-dark)]">
                {blockNames.PARTNERS}
              </p>
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-3 rounded-xl bg-[var(--color-primary-light)] p-3">
            <a
              href="https://youtube.com/@dobroeduhovnoe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-dark)] transition-opacity hover:opacity-90"
            >
              <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            <a
              href="https://t.me/dobroeduhovnoe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-dark)] transition-opacity hover:opacity-90"
            >
              <svg
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
                className="fill-white"
              >
                <path d="M1.20231 5.71119C1.20231 5.71119 7.45231 3.1317 9.61991 2.2234C10.4509 1.86011 13.2688 0.697478 13.2688 0.697478C13.2688 0.697478 14.5694 0.188871 14.461 1.42411C14.4248 1.93277 14.1358 3.71297 13.8468 5.63854C13.4133 8.36339 12.9436 11.3425 12.9436 11.3425C12.9436 11.3425 12.8714 12.1782 12.2572 12.3235C11.6431 12.4688 10.6315 11.8149 10.4509 11.6695C10.3063 11.5606 7.74131 9.92562 6.80201 9.12633C6.54911 8.90836 6.26011 8.47241 6.83811 7.96375C8.13871 6.76481 9.69216 5.27525 10.6315 4.33064C11.065 3.89464 11.4985 2.87737 9.69216 4.11261C7.12716 5.89286 4.59826 7.5641 4.59826 7.5641C4.59826 7.5641 4.02021 7.92739 2.93641 7.60041C1.85256 7.27347 0.588112 6.83747 0.588112 6.83747C0.588112 6.83747 -0.278888 6.29251 1.20231 5.71119Z" />
              </svg>
            </a>

            <a
              href="https://vk.com/dobroeduhovnoe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-dark)] transition-opacity hover:opacity-90"
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
                />
              </svg>
            </a>
          </div>

          {/* Radio Player and Donate */}
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

            <Link
              to="/donate"
              className="white-gray-two-layers h-32 cursor-pointer rounded-2xl hover:opacity-90"
            >
              <p className="flex h-full items-center rounded-2xl p-4 text-sm text-[var(--color-primary-dark)]">
                {blockNames.DONATE}
              </p>
            </Link>
          </div>

          <Link
            to="/legal-info"
            className="h-12 cursor-pointer rounded-2xl bg-[var(--color-primary-light)] hover:opacity-90"
          >
            <p className="flex h-full items-center justify-center rounded-2xl p-4 text-sm text-[var(--color-primary-dark)]">
              {blockNames.LEGAL_INFO}
            </p>
          </Link>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="relative hidden h-[93vh] w-full text-sm font-semibold md:flex lg:text-base xl:text-lg">
        {/* Left Sidebar */}
        <aside className="flex h-full w-1/4 flex-col gap-4 leading-tight xl:gap-7 xl:pr-3">
          <Link
            to="/"
            className="flex h-[14%] cursor-pointer items-center justify-center rounded-2xl bg-white transition-colors hover:bg-gray-50"
          >
            <img src={logo} alt="Логотип" className="w-52" />
          </Link>

          <Link
            to="/about"
            className="h-[18%] cursor-pointer rounded-2xl bg-[var(--color-primary-light)] text-left text-[var(--color-primary-dark)] hover:opacity-80"
          >
            <p className="mt-4 flex rounded-2xl p-5">{blockNames.ABOUT_US}</p>
          </Link>

          <Link
            to="/daily-message"
            className="h-[18%] cursor-pointer rounded-2xl bg-[var(--color-accent-orange)] text-left text-[var(--color-primary-dark)] transition-colors hover:opacity-90"
          >
            <p className="mt-4 flex h-full w-full rounded-2xl p-5">
              {blockNames.DAILY_MESSAGE}
            </p>
          </Link>

          <Link
            to="/how-to-find-us"
            className="blue-two-layers h-[18%] cursor-pointer rounded-2xl hover:opacity-90"
          >
            <p className="mt-4 flex h-full w-full rounded-2xl p-5 text-white">
              {blockNames.HOW_TO_FIND_US}
            </p>
          </Link>

          <Link
            to="/partners"
            className="white-gray-two-layers h-[18%] cursor-pointer rounded-2xl hover:opacity-90"
          >
            <p className="mt-4 flex h-full w-full rounded-2xl p-5 text-[var(--color-primary-dark)]">
              {blockNames.PARTNERS}
            </p>
          </Link>
        </aside>

        {/* Main Content */}
        <main className="flex h-full w-1/2 flex-col gap-7 px-3 leading-tight">
          <Outlet />
        </main>

        {/* Right Sidebar */}
        <aside className="flex w-1/4 flex-col gap-4 leading-tight xl:gap-7 xl:pl-3">
          <Link
            to="/prayer-request"
            className="flex h-[14%] cursor-pointer justify-end rounded-2xl bg-[var(--color-primary-light)] hover:opacity-90"
          >
            <p className="w-3/4 p-5 text-right text-[var(--color-primary-dark)] lg:w-2/3">
              {blockNames.PRAYER_REQUEST}
            </p>
          </Link>

          <Link
            to="/addiction-help"
            className="flex h-[19%] cursor-pointer justify-end rounded-2xl bg-[var(--color-accent-orange)] hover:opacity-90"
          >
            <p className="w-5/6 p-5 text-right text-[var(--color-primary-dark)] lg:w-3/4">
              {blockNames.ADDICTION_HELP}
            </p>
          </Link>

          {/* Social Media Links */}
          <div className="h-[7%] rounded-2xl bg-[var(--color-primary-light)] hover:opacity-90">
            <div className="flex h-full w-full items-center justify-center gap-4 p-3">
              <a
                href="https://youtube.com/@dobroeduhovnoe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-dark)] transition-opacity hover:opacity-90"
              >
                <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <a
                href="https://t.me/dobroeduhovnoe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-dark)] transition-opacity hover:opacity-90"
              >
                <svg
                  width="15"
                  height="13"
                  viewBox="0 0 15 13"
                  fill="none"
                  className="fill-white"
                >
                  <path d="M1.20231 5.71119C1.20231 5.71119 7.45231 3.1317 9.61991 2.2234C10.4509 1.86011 13.2688 0.697478 13.2688 0.697478C13.2688 0.697478 14.5694 0.188871 14.461 1.42411C14.4248 1.93277 14.1358 3.71297 13.8468 5.63854C13.4133 8.36339 12.9436 11.3425 12.9436 11.3425C12.9436 11.3425 12.8714 12.1782 12.2572 12.3235C11.6431 12.4688 10.6315 11.8149 10.4509 11.6695C10.3063 11.5606 7.74131 9.92562 6.80201 9.12633C6.54911 8.90836 6.26011 8.47241 6.83811 7.96375C8.13871 6.76481 9.69216 5.27525 10.6315 4.33064C11.065 3.89464 11.4985 2.87737 9.69216 4.11261C7.12716 5.89286 4.59826 7.5641 4.59826 7.5641C4.59826 7.5641 4.02021 7.92739 2.93641 7.60041C1.85256 7.27347 0.588112 6.83747 0.588112 6.83747C0.588112 6.83747 -0.278888 6.29251 1.20231 5.71119Z" />
                </svg>
              </a>

              <a
                href="https://vk.com/dobroeduhovnoe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-dark)] transition-opacity hover:opacity-90"
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
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Radio Player */}
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

          <Link
            to="/donate"
            className="white-gray-two-layers h-[19%] cursor-pointer rounded-2xl hover:opacity-90"
          >
            <p className="mt-4 flex h-full w-full rounded-2xl p-5 text-[var(--color-primary-dark)]">
              {blockNames.DONATE}
            </p>
          </Link>

          <Link
            to="/legal-info"
            className="h-[7%] cursor-pointer rounded-2xl bg-[var(--color-primary-light)] hover:opacity-90"
          >
            <p className="flex h-full w-full items-center justify-center rounded-2xl p-5 text-right text-[var(--color-primary-dark)]">
              {blockNames.LEGAL_INFO}
            </p>
          </Link>
        </aside>
      </div>
    </div>
  );
}
