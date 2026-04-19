import React, { useEffect, useState } from 'react';
import BaseBlock from './BaseBlock';

const PhotoGallery = () => {
  const [activePhoto, setActivePhoto] = useState(null);

  useEffect(() => {
    if (!activePhoto) return;
    const onKey = (e) => e.key === 'Escape' && setActivePhoto(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activePhoto]);

  return (
    <>
      <div className="space-y-3">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {portraitPhotos.map((photo, index) => (
            <div
              key={index}
              className="cursor-zoom-in overflow-hidden rounded-lg transition-opacity hover:opacity-90"
              style={{ aspectRatio: '3/4' }}
              onClick={() => setActivePhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {landscapePhotos.map((photo, index) => (
            <div
              key={index}
              className="cursor-zoom-in overflow-hidden rounded-lg transition-opacity hover:opacity-90"
              style={{ aspectRatio: '3/2' }}
              onClick={() => setActivePhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-h-full max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-2xl bg-white p-2">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="block max-h-[85vh] w-full rounded-xl object-contain"
              />
            </div>
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute -right-3 -top-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-sm font-bold text-[var(--color-primary-dark)] shadow-lg transition-colors hover:bg-[var(--color-accent-yellow)]"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const portraitPhotos = [
  { src: new URL('../../assets/pastor/pastor-03.webp', import.meta.url).href, alt: 'Пастор Виталий' },
  { src: new URL('../../assets/pastor/pastor-04.webp', import.meta.url).href, alt: 'Пастор Виталий' },
  { src: new URL('../../assets/pastor/pastor-05.webp', import.meta.url).href, alt: 'Пастор Виталий' },
  { src: new URL('../../assets/pastor/pastor-08.webp', import.meta.url).href, alt: 'Пастор Виталий' },
  { src: new URL('../../assets/pastor/pastor-09.webp', import.meta.url).href, alt: 'Пастор Виталий' },
  { src: new URL('../../assets/pastor/pastor-10.webp', import.meta.url).href, alt: 'Пастор Виталий' },
  { src: new URL('../../assets/pastor/pastor-11.webp', import.meta.url).href, alt: 'Пастор Виталий' },
  { src: new URL('../../assets/pastor/pastor-13.webp', import.meta.url).href, alt: 'Пастор Виталий' },
  { src: new URL('../../assets/pastor/pastor-16.webp', import.meta.url).href, alt: 'Пастор Виталий' },
  { src: new URL('../../assets/pastor/pastor-17.webp', import.meta.url).href, alt: 'Пастор Виталий' },
  { src: new URL('../../assets/pastor/pastor-18.webp', import.meta.url).href, alt: 'Пастор Виталий' },
  { src: new URL('../../assets/pastor/pastor-19.webp', import.meta.url).href, alt: 'Пастор Виталий' },
  { src: new URL('../../assets/pastor/pastor-20.webp', import.meta.url).href, alt: 'Пастор Виталий' },
  { src: new URL('../../assets/pastor/pastor-21.webp', import.meta.url).href, alt: 'Пастор Виталий' },
  { src: new URL('../../assets/pastor/pastor-22.webp', import.meta.url).href, alt: 'Пастор Виталий' },
  { src: new URL('../../assets/pastor/pastor-23.webp', import.meta.url).href, alt: 'Пастор Виталий' },
];

const landscapePhotos = [
  { src: new URL('../../assets/pastor/pastor-01.webp', import.meta.url).href, alt: 'Пастор Виталий' },
  { src: new URL('../../assets/pastor/pastor-02.webp', import.meta.url).href, alt: 'Пастор Виталий' },
  { src: new URL('../../assets/pastor/pastor-06.webp', import.meta.url).href, alt: 'Пастор Виталий' },
  { src: new URL('../../assets/pastor/pastor-07.webp', import.meta.url).href, alt: 'Пастор Виталий' },
  { src: new URL('../../assets/pastor/pastor-12.webp', import.meta.url).href, alt: 'Пастор Виталий' },
  { src: new URL('../../assets/pastor/pastor-14.webp', import.meta.url).href, alt: 'Пастор Виталий' },
  { src: new URL('../../assets/pastor/pastor-15.webp', import.meta.url).href, alt: 'Пастор Виталий' },
];

const pastorSections = [
  {
    id: 1,
    name: 'Биография',
    content: (
      <div className="text-left">
        <div className="space-y-4 text-sm leading-relaxed text-gray-700">
          <p>
            <strong className="text-[var(--color-primary-dark)]">
              Знакомьтесь: пастор Виталий Юрьевич Передереев
            </strong>
          </p>
          <p>
            Первая встреча с Богом произошла в его жизни, когда Виталию было
            всего шестнадцать. Это было внезапное, но очень глубокое
            переживание, которое спустя годы привело его к осознанному поиску
            Бога. В 2005 году он пришёл в протестантскую церковь, где начался
            его путь настоящего ученичества и активного служения.
          </p>

          <p>
            <strong className="text-[var(--color-primary-dark)]">
              От миссии к основанию церкви
            </strong>
          </p>
          <p>
            Для Виталия вера никогда не была теорией. С первых дней в церкви он
            искал, где может быть полезен. Это стремление в 2017 году привело
            его на миссию в другой город. Там он основал свою первую церковь и
            принял рукоположение в сан пастора. Этот опыт стал фундаментом для
            всего, что он делает сегодня.
          </p>

          <p>
            <strong className="text-[var(--color-primary-dark)]">
              «Доброе Духовное» в Ростове-на-Дону
            </strong>
          </p>
          <p>
            В 2025 году пастор Виталий получил видение об открытии новой церкви
            в Ростове-на-Дону. История «Доброго Духовного» началась с небольшой
            группы из восьми человек. Несмотря на малый состав, община с первых
            дней стала динамично расти, привлекая людей искренностью и
            открытостью.
          </p>
          <p>
            «Любовь к Богу через любовь к человеку» — это не просто красивый
            лозунг, а жизненное кредо пастора, которое легло в основу видения
            всей нашей церкви.
          </p>

          <p>
            <strong className="text-[var(--color-primary-dark)]">
              О личном
            </strong>
          </p>
          <p>
            Пастор Виталий убеждён, что вера проявляется в повседневных делах.
            Он счастливый муж уже 30 лет. Также он отец троих детей и уже трижды
            дедушка. Его можно встретить не только за кафедрой, но и на берегу с
            удочкой, в кругу друзей в бане или в дороге (пастор любит
            путешествовать).
          </p>
          <p>
            Прежде всего Виталий ценит честное, живое общение. Для него
            пасторство — не должность, а возможность быть рядом с людьми в их
            радостях и трудностях, воплощая Божью любовь в каждом поступке.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    name: 'Образование',
    content: (
      <div className="text-left">        <div className="space-y-3 text-sm leading-relaxed text-gray-700">
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
    name: 'Фото',
    content: <PhotoGallery />,
  },
];

const PastorBlock = ({ blockNames, hideBlockInfo }) => {
  const [selectedSection, setSelectedSection] = useState(pastorSections[0]);

  return (
    <BaseBlock title={blockNames.PASTOR} onClose={hideBlockInfo}>
      <div className="flex flex-col text-left">
        <p className="mb-6 text-lg text-[var(--color-primary-dark)]">
          Религиозная группа "Служение ДОБРОЕ ДУХОВНОЕ"
        </p>

        <div className="mb-6 grid grid-cols-3 gap-2 text-xs">
          {pastorSections.map((section) => (
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

export default PastorBlock;
