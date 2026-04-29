export default function Products({ items }) {
  return (
    <section id="products" className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-medium">Хиты</p>
          <h2 className="mt-3 text-2xl font-semibold text-primary sm:text-3xl">Популярные товары</h2>
        </div>
        <span className="text-sm text-secondary">От классики до новинок</span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((product) => (
          <article key={product.id} className="overflow-hidden rounded-[2rem] bg-white">
            <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-primary">{product.name}</h3>
              <p className="mt-3 text-sm font-semibold text-secondary">{product.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
