export default function Hero({ data }) {
  return (
    <section className="w-full px-4 pt-0 pb-6 relative z-0 -mt-55">
      <div className="mx-auto max-w-6xl">
        <div className="relative -top-12 rounded-[2rem] border border-slate-200/70 bg-white/95 p-6 shadow-[0_36px_88px_rgba(15,23,42,0.12)] sm:p-10">
          <div className="relative">
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
