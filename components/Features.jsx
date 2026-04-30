import { FiHeart, FiStar, FiZap } from 'react-icons/fi';
import { FaGlasses } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';

export default function Features({ items }) {
  const cardBackgrounds = {
    1: 'bg-gradient-to-br from-sky-200 via-cyan-200 to-sky-100',
    2: 'bg-gradient-to-br from-violet-200 via-fuchsia-200 to-violet-100',
    3: 'bg-gradient-to-br from-rose-200 via-rose-300 to-rose-100',
  };

  const cardTransforms = {
    1: 'rotate-[3deg]',
    2: '-rotate-[2.5deg]',
    3: 'rotate-[1.8deg]',
  };

  const cardShapes = {
    1: 'max-w-[520px] min-h-[320px] sm:max-w-[580px] sm:min-h-[360px] rounded-[1.2rem]',
    2: 'aspect-square max-w-[420px] sm:max-w-[480px] min-h-0 rounded-full',
    3: 'max-w-[440px] min-h-[300px] sm:min-h-[340px] rounded-[1.2rem]',
  };

  const pastelColors = ['text-rose-300', 'text-fuchsia-300', 'text-violet-300', 'text-sky-300', 'text-emerald-300', 'text-lime-300', 'text-amber-300', 'text-cyan-300'];
  const iconSizes = ['h-18 w-18', 'h-20 w-20', 'h-22 w-22', 'h-24 w-24'];
  const iconRotations = ['rotate-[8deg]', 'rotate-[12deg]', 'rotate-[16deg]', 'rotate-[20deg]'];

  const seededOption = (options, seed) => options[seed % options.length];
  const seedFor = (itemId, index) => (itemId * 7 + index * 13 + 11) % 97;

  const cardDecorations = {
    1: [
      { position: 'top-6 left-3', icon: FiStar, sizeOverride: 'h-20 w-20', rotateOverride: '-rotate-[10deg]' },
      { position: 'top-6 right-10', icon: IoSparkles },
    ],
    2: [
      { position: 'top-5 right-5', icon: FiZap },
      { position: 'left-1/2 bottom-6 -translate-x-1/2', icon: FaGlasses, sizeOverride: 'h-24 w-24', rotateOverride: '-rotate-[12deg]', colorOverride: 'text-violet-300' },
    ],
    3: [
      { position: 'top-5 left-10', icon: FiHeart },
      { position: 'top-8 right-4', icon: FiStar },
      { position: 'bottom-4 right-10', icon: IoSparkles },
    ],
  };

  const highlightTitleWords = (title) => {
    const gradientClasses = {
      'тусовки': 'from-violet-500 via-fuchsia-500 to-violet-400',
      'тренде': 'from-sky-300 via-cyan-300 to-blue-400',
      'Топовая': 'from-sky-300 via-cyan-300 to-blue-400',
    };
    const highlightRe = /(тусовки\.?|тренде\.?|Топовая\.?)/g;
    const lines = title.split('. ').map((line) => line.trim()).filter(Boolean);

    return lines.map((line, lineIndex) => {
      const parts = line.split(highlightRe);
      const needsDot = lineIndex < lines.length - 1 && !line.endsWith('.');

      return (
        <span key={lineIndex} className="block">
          {parts.map((part, partIndex) => {
            const normalized = part.replace(/\.$/, '');
            const gradientClass = gradientClasses[normalized];
            if (gradientClass) {
              return (
                <span
                  key={partIndex}
                  className={`relative inline-block whitespace-nowrap bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}
                >
                  {part}
                </span>
              );
            }
            return <span key={partIndex}>{part}</span>;
          })}
          {needsDot ? '.' : ''}
        </span>
      );
    });
  };

  return (
    <section className="space-y-8 pt-8 px-4 sm:px-6 pb-36 sm:pb-40 lg:pb-48 bg-gradient-to-b from-white to-[#F5F3FF] shadow-[0_-18px_24px_-18px_rgba(15,23,42,0.16)]">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-row items-start gap-8">
          <div className="flex-shrink-0">
            <img
              src="/Манул_Хиты.webp"
              alt="Манул"
              className="h-[220px] w-auto object-contain"
            />
          </div>
          <div className="flex-1 max-w-[520px] space-y-4 text-left">
            <p
              className="inline-flex rounded-none border-[12px] border-white bg-gradient-to-br from-sky-200 via-cyan-200 to-sky-100 px-5 py-1 text-[0.9rem] font-black uppercase tracking-[0.2em] text-primary shadow-[6px_6px_0_rgba(0,0,0,0.6)] sm:text-[1.1rem] -rotate-[6deg]"
            >
              НАШ ВАЙБ
            </p>
            <h2 className="text-2xl font-nunito font-extrabold leading-tight text-primary sm:text-3xl">
              Это не просто{' '}
              <span className="bg-gradient-to-r from-pink-400 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
                магазин
              </span>
              .
              <br />
              Это место для{' '}
              <span className="bg-gradient-to-r from-pink-400 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
                тусовок
              </span>
              .
            </h2>
            <p className="text-sm text-secondary sm:text-base">
              Тут есть все, что нужно
              <span className="block sm:inline"> для школы, учебы и твоего стиля.</span>
            </p>
          </div>
        </div>
      </div>

      {items?.length ? (
        <div className="relative grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.slice(0, 4).map((item) => (
            <article
              key={item.id}
              className={`relative mx-auto overflow-hidden border-[12px] border-white ${cardShapes[item.id] ?? 'max-w-[420px] min-h-[280px] sm:min-h-[320px] rounded-[1.2rem]'} ${cardBackgrounds[item.id] ?? 'bg-slate-100'} ${cardTransforms[item.id] ?? ''} transform-gpu shadow-[10px_10px_0_rgba(0,0,0,0.78)] transition duration-300 ease-out hover:-translate-y-1 hover:rotate-0`}
            >
              <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                {(cardDecorations[item.id] ?? []).map((dec, index) => {
                  const Icon = dec.icon;
                  const seed = seedFor(item.id, index);
                  const colorClass = dec.colorOverride ?? seededOption(pastelColors, seed + 1);
                  const sizeClass = dec.sizeOverride ?? seededOption(iconSizes, seed + 2);
                  const rotateClass = dec.rotateOverride ?? seededOption(iconRotations, seed + 3);
                  return (
                    <span
                      key={index}
                      className={`absolute ${dec.position} ${sizeClass} ${rotateClass} ${colorClass} opacity-80`}
                    >
                      <Icon className="h-full w-full" />
                    </span>
                  );
                })}
              </div>
              <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-8 text-center">
                <h3 className="text-[clamp(1.6rem,4vw,2.4rem)] font-nunito font-semibold text-primary tracking-[-0.03em]">
                {highlightTitleWords(item.title).map((part, index) =>
                  typeof part === 'string' ? (
                    <span key={index} className="block">
                      {part}
                    </span>
                  ) : (
                    <span key={index} className="block">
                      {part}
                    </span>
                  )
                )}
              </h3>
                <p className="mt-4 text-[clamp(0.95rem,2.4vw,1rem)] text-secondary leading-7">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] bg-white/90 p-8 text-center text-sm text-secondary ring-1 ring-slate-200/70 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.16)]">
          Пока нет данных для карточек.
        </div>
      )}
    </section>
  );
}
