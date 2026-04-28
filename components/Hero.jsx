import ManulBlock from './ManulBlock';

export default function Hero({ data }) {
  return (
    <section className="w-full px-4 pt-20 pb-6">
      <div className="mx-auto max-w-6xl relative overflow-visible">
        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-[71%] pointer-events-none">
          <ManulBlock />
        </div>

        <div className="bg-slate-50 p-6 sm:p-10 text-center shadow-[0_-18px_24px_-18px_rgba(15,23,42,0.16)]">
          <div className="relative mx-auto max-w-3xl">
            <h1 className="mb-3 text-[28px] font-bold leading-[1.2]">
              Канцтовары,
              <br />
              в которые ты <span className="text-purple-600">влюбишься</span>
            </h1>

            <p className="mb-5 text-sm text-gray-500 leading-relaxed">
              Яркий выбор для учебы, творчества и офисных идей. Стильный ассортимент для тех, кто любит жить в цвете.
            </p>

            <div className="mb-4 w-full">
              <div className="flex flex-col gap-3">
                <button className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 px-4 py-3 text-sm font-medium text-white">
                  Смотреть хиты →
                </button>
                <button className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-slate-900">
                  <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-base">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l8.8 8.8 8.8-8.8a5.5 5.5 0 0 0 0-7.8Z" />
                    </svg>
                  </span>
                  Каталог
                </button>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
              <span className="text-lg">🐾</span>
              <span className="border-b border-purple-400">Одобрено Манулом</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
