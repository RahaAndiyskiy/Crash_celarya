export default function Features({ items }) {
  const cardBackgrounds = {
    1: 'bg-gradient-to-br from-lime-200 via-lime-300 to-lime-100',
    2: 'bg-gradient-to-br from-violet-200 via-fuchsia-200 to-violet-100',
    3: 'bg-gradient-to-br from-rose-200 via-rose-300 to-rose-100',
  };

  return (
    <section className="space-y-8 pt-8 px-4 sm:px-6">
      <div className="space-y-4 text-center mx-auto w-full max-w-4xl">
        <p
          className="mx-auto inline-flex rounded-[1rem] px-5 py-1 text-center text-[0.9rem] font-black uppercase tracking-[0.2em] sm:text-[1.1rem]"
          style={{
            color: 'rgb(249, 168, 212)',
            backgroundColor: 'white',
            backgroundImage:
              'linear-gradient(white, white), linear-gradient(90deg, rgb(249, 168, 212), rgb(251, 207, 234), rgb(249, 168, 212))',
            backgroundOrigin: 'padding-box, border-box',
            backgroundClip: 'padding-box, border-box',
            border: '1px solid transparent',
            boxShadow:
              'inset 0 0 12px rgba(0,0,0,0.08), 0 0 0 6px rgba(255,255,255,0.24), 0 0 0 10px rgba(249,168,212,0.55), 0 0 18px rgba(251,207,234,0.35), 0 0 28px rgba(250,204,21,0.12)',
          }}
        >
          НАШ ВАЙБ
        </p>
        <h2 className="text-2xl font-nunito font-extrabold leading-tight text-primary sm:text-3xl">
          Это не просто{' '}
          <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent">
            магазин
          </span>
          .
          <br />
          Это место для{' '}
          <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent">
            тусовок
          </span>
          .
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-secondary sm:text-base">
          Тут есть все, что нужно для школы, учебы и твоего стиля.
        </p>
      </div>

      {items?.length ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className={`relative mx-auto max-w-[420px] min-h-[280px] sm:min-h-[320px] overflow-hidden rounded-[2rem] border-[12px] border-white ${cardBackgrounds[item.id] ?? 'bg-slate-100'} shadow-[8px_8px_1px_-2px_rgba(15,23,42,0.22)] transition hover:-translate-y-1`}
            >
              <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-8 text-center">
                <h3 className="text-[clamp(1.4rem,4vw,2.2rem)] font-nunito font-semibold text-primary tracking-[-0.03em]">
                  {item.title.split('. ').map((part, index, array) => (
                    <span key={index} className="block">
                      {part.trim()}
                      {index < array.length - 1 ? '.' : ''}
                    </span>
                  ))}
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
