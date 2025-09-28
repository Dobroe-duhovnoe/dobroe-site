import { Link } from 'react-router-dom';
import mainBanner from '../assets/main-banner.png';
import howGodTreatsYou from '../assets/how-god-treats-you.png';
import whatWeBelieve from '../assets/what-we-believe.png';
import listenAndWatch from '../assets/listen-and-watch.png';
import pastor from '../assets/pastor.png';

const blockNames = {
  HOW_GOD_TREATS_YOU: 'КАК БОГ ОТНОСИТСЯ К ТЕБЕ',
  WHAT_WE_BELIEVE: 'ВО ЧТО МЫ ВЕРИМ',
  LISTEN_AND_WATCH: 'СЛУШАТЬ И СМОТРЕТЬ',
  PASTOR: 'ПАСТОР',
};

export default function HomePage() {
  return (
    <>
      <Link
        to="/how-to-find-us"
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

      <div className="grid flex-1 grid-cols-2 gap-4 text-2xl leading-tight xl:gap-7">
        <Link
          to="/how-god-treats-you"
          className="flex h-full cursor-pointer rounded-2xl bg-cover bg-center bg-no-repeat p-5 grayscale hover:opacity-90 hover:grayscale-0 lg:p-7"
          style={{
            backgroundImage: `url(${howGodTreatsYou})`,
          }}
        >
          <span className="w-2/3 text-left font-bold text-white drop-shadow-lg">
            {blockNames.HOW_GOD_TREATS_YOU}
          </span>
        </Link>

        <Link
          to="/what-we-believe"
          className="flex h-full cursor-pointer rounded-2xl bg-cover bg-center bg-no-repeat p-5 grayscale hover:opacity-90 hover:grayscale-0 lg:p-7"
          style={{
            backgroundImage: `url(${whatWeBelieve})`,
          }}
        >
          <span className="w-2/3 text-left font-bold text-white drop-shadow-lg">
            {blockNames.WHAT_WE_BELIEVE}
          </span>
        </Link>

        <Link
          to="/listen-and-watch"
          className="flex h-full cursor-pointer rounded-2xl bg-cover bg-center bg-no-repeat p-5 grayscale hover:opacity-90 hover:grayscale-0 lg:p-7"
          style={{
            backgroundImage: `url(${listenAndWatch})`,
          }}
        >
          <span className="w-2/3 text-left font-bold text-white drop-shadow-lg">
            {blockNames.LISTEN_AND_WATCH}
          </span>
        </Link>

        <Link
          to="/pastor"
          className="flex h-full cursor-pointer rounded-2xl bg-cover bg-center bg-no-repeat p-5 grayscale hover:opacity-90 hover:grayscale-0 lg:p-7"
          style={{
            backgroundImage: `url(${pastor})`,
          }}
        >
          <span className="w-2/3 text-left font-bold text-white drop-shadow-lg">
            {blockNames.PASTOR}
          </span>
        </Link>
      </div>
    </>
  );
}
