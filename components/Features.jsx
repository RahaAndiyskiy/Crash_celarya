export default function Features({ items }) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-medium">УТП</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">Что делает нас особенными</h2>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.id} className="rounded-[2rem] bg-slate-50 p-6">
            <div className="mb-4 h-12 w-12 rounded-3xl bg-violet-medium/10 text-center text-xl leading-12">✓</div>
            <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
