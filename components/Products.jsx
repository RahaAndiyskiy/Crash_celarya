export default function Products({ items }) {
  return (
    <section id="products" className="space-y-6 mt-24">
      <div className="flex flex-row flex-nowrap items-start justify-between gap-6">
        <div className="min-w-[220px] max-w-[420px] space-y-5">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border-[12px] border-white bg-gradient-to-br from-rose-200 via-rose-300 to-pink-200 text-sm font-semibold text-primary shadow-[10px_10px_0_rgba(0,0,0,0.78)] -rotate-[6deg]">
            Хиты
          </div>
          <div className="text-left">
            <h2 className="text-5xl font-nunito font-black tracking-tight text-primary leading-[0.95]">
              Популярные
              <br />
              товары
            </h2>
            <p className="mt-3 font-rubik text-sm text-secondary leading-relaxed">
              То, что берут чаще всего.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img src="/Манул_Хиты.webp" alt="" className="h-[180px] w-auto object-contain" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          <button className="rounded-full border border-slate-200 bg-violet-600/10 px-4 py-3 text-sm font-semibold text-violet-700">Все</button>
          <button className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-primary">Канцелярия</button>
          <button className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-primary">Мерч</button>
          <button className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-primary">Игрушки</button>
        </div>

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {items.slice(0, 4).map((product) => (
          <article key={product.id} className="overflow-hidden rounded-[1.25rem] bg-white p-5 shadow-[0_14px_0_rgba(0,0,0,0.08)]">
            <img src={product.image} alt={product.name} className="h-56 w-full rounded-[1.25rem] object-cover" />
            <div className="mt-5 space-y-3">
              <h3 className="text-lg font-semibold text-primary">{product.name}</h3>
              <p className="text-sm text-secondary">{product.description}</p>
              <div className="flex items-center justify-between pt-3">
                <span className="text-lg font-semibold text-primary">{product.price}</span>
                <button className="rounded-full border border-violet-500 px-4 py-2 text-sm font-semibold text-violet-700 transition hover:bg-violet-50">
                  В корзину
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="rounded-[2rem] border border-dashed border-violet-300 bg-white/90 p-5 shadow-[0_16px_0_rgba(0,0,0,0.06)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-primary">Смотреть все хиты</p>
            <p className="text-sm text-secondary">Ещё больше топовых товаров</p>
          </div>
          <button className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 text-white transition hover:bg-violet-600">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
