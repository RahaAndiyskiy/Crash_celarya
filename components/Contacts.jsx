export default function Contacts({ data }) {
  return (
    <section id="contacts" className="relative grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-5">
        <img src="/Контакты.webp" alt="Контакты" className="h-auto max-w-[260px] -rotate-[8deg]" />
        <h2 className="text-2xl font-nunito font-black text-primary sm:text-3xl">Залетай на тусу<br />или звони</h2>
        <div className="space-y-2 text-secondary font-rubik">
          <p>{data.location}</p>
          <p>{data.hours}</p>
        </div>
        <a href="https://t.me/crushschooltrends" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl border-[12px] border-white bg-gradient-to-br from-violet-200 via-fuchsia-200 to-violet-100 px-6 py-3 text-sm font-semibold text-primary shadow-[0_0_30px_rgba(139,92,246,0.4)] transform transition duration-200 hover:-translate-y-0.5 rotate-[7deg]">
          {data.button}
        </a>
      </div>
      <div className="product-card mt-16 rounded-2xl bg-white p-3 shadow-[0_0_45px_rgba(139,92,246,0.18),0_0_24px_rgba(236,72,153,0.16),0_0_10px_rgba(56,189,248,0.2)] transform transition-transform duration-300 hover:scale-[1.02] z-10">
        <div className="overflow-hidden rounded-2xl p-[4px] bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 shadow-[0_0_40px_rgba(236,72,153,0.18),0_0_20px_rgba(139,92,246,0.15),0_0_8px_rgba(56,189,248,0.2)]">
          <div className="relative h-48 rounded-xl bg-slate-200">
            <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500 shadow-[0_0_16px_rgba(236,72,153,0.35)]" />
          </div>
        </div>
        <p className="mt-3 text-sm text-secondary">Здесь будет карта, чтобы найти нас быстро.</p>
      </div>
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-6 rounded-2xl bg-white p-4 shadow-[0_0_45px_rgba(139,92,246,0.18),0_0_24px_rgba(236,72,153,0.16),0_0_10px_rgba(56,189,248,0.2)] ring-1 ring-white">
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/socials" aria-label="Instagram" className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-[0_0_20px_rgba(139,92,246,0.16)] transition hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(139,92,246,0.24)]">
              <img src="/Icons SVG/icons8-instagram-50.svg" alt="Instagram" className="h-8 w-8" />
            </a>
            <a href="https://t.me/crushschooltrends" target="_blank" rel="noreferrer" aria-label="Telegram" className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-[0_0_20px_rgba(139,92,246,0.16)] transition hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(139,92,246,0.24)]">
              <img src="/Icons SVG/icons8-telegram-app-50.svg" alt="Telegram" className="h-8 w-8" />
            </a>
            <a href="/socials" aria-label="VK" className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-[0_0_20px_rgba(139,92,246,0.16)] transition hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(139,92,246,0.24)]">
              <img src="/Icons SVG/icons8-vk-circled-50.svg" alt="VK" className="h-8 w-8" />
            </a>
            <a href="/socials" aria-label="TikTok" className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-[0_0_20px_rgba(139,92,246,0.16)] transition hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(139,92,246,0.24)]">
              <img src="/Icons SVG/icons8-тикток-50.svg" alt="TikTok" className="h-8 w-8" />
            </a>
            <a href="/socials" aria-label="Likee" className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-[0_0_20px_rgba(139,92,246,0.16)] transition hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(139,92,246,0.24)]">
              <img src="/Icons SVG/icons8-likee-50.svg" alt="Likee" className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
      <img src="/Мороженое.webp" alt="Мороженое" className="pointer-events-none absolute right-6 top-[calc(50%+25px)] h-auto max-w-[220px] -translate-y-1/2 z-20" />
    </section>
  );
}
