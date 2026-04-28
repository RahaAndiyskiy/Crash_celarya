export default function Categories({ items }) {
  return (
    <section id="categories" className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-medium">Категории</p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">Быстрый выбор по разделам</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((category) => (
          <div key={category.id} className="flex items-center gap-4 rounded-[2rem] bg-slate-50 p-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-lime-soft text-2xl">
              {category.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
