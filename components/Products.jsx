export default function Products({ items }) {
  return (
    <section id="products" className="space-y-6 mt-24">
      <div className="flex flex-row flex-nowrap items-start justify-between gap-6 overflow-hidden">
        <div className="min-w-[220px] max-w-[420px] space-y-5">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border-[12px] border-white bg-gradient-to-br from-rose-200 via-rose-300 to-pink-200 text-sm font-semibold text-primary shadow-[10px_10px_0_rgba(0,0,0,0.78)] -rotate-[6deg]">
            Хиты
          </div>
          <div className="text-left">
            <h2 className="text-2xl font-nunito font-black tracking-tight text-primary leading-[0.95]">
              Популярные
              <br />
              товары
            </h2>
            <p className="mt-2 font-rubik text-[14px] text-secondary leading-relaxed">
              То, что берут чаще всего.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 relative -mt-2 -ml-10 max-[390px]:-ml-12 max-[360px]:-ml-14">
          <img
            src="/Манул_Хит.webp"
            alt=""
            className="relative left-[-21px] max-[390px]:left-[-24px] max-[360px]:left-[-26px] top-[15px] h-[180px] w-auto object-contain drop-shadow-[0_4px_0_rgba(0,0,0,0.7)]"
          />
        </div>
      </div>

      <div className="rounded-[1rem] bg-white/90 border border-violet-100 p-4 shadow-[0_16px_0_rgba(0,0,0,0.06)]">
        <div className="-mx-4 overflow-x-auto pb-4 pl-4">
          <div className="flex gap-4 snap-x snap-mandatory">
            {items.slice(0, 4).map((product) => (
              <article
                key={product.id}
                className="w-[85vw] sm:w-[240px] md:w-[260px] lg:w-[280px] flex-shrink-0 snap-center overflow-hidden rounded-[1.25rem] bg-white p-4 shadow-[0_20px_40px_-24px_rgba(20,23,42,0.16)] font-nunito"
              >
                <img src={product.image} alt={product.name} className="h-44 w-full rounded-[1rem] object-cover" />
                <div className="mt-4 space-y-3 text-left">
                  <h3 className="text-base font-black text-primary">{product.name}</h3>
                  <span className="block text-lg font-black text-primary">{product.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
