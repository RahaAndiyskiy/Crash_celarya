export default function Contacts({ data }) {
  return (
    <section id="contacts" className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-5">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-medium">Контакты</p>
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">Заходи на чашку кофе или пиши нам</h2>
        <div className="space-y-2 text-secondary">
          <p>{data.location}</p>
          <p>{data.hours}</p>
        </div>
        <button className="inline-flex rounded-2xl bg-violet-medium px-6 py-3 text-sm font-semibold text-white hover:bg-violet-light">
          {data.button}
        </button>
      </div>
      <div className="rounded-[1.75rem] bg-white p-6 text-secondary">
        <div className="mb-4 h-48 rounded-[1.5rem] bg-slate-200" />
        <p className="text-sm">Здесь будет карта, чтобы найти нас быстро.</p>
      </div>
    </section>
  );
}
