export default function Contacts({ data }) {
  return (
    <section id="contacts" className="relative px-4 pb-24 pt-10 bg-[#F5F3FF] overflow-hidden">
      <div className="mx-auto max-w-md text-center space-y-6">

        {/* Заголовок (фикс ширины, не прыгает) */}
        <img
          src="/optimized/Контакты.webp"
          alt="Контакты"
          className="mx-auto w-[260px] sm:w-[300px] h-auto"
        />

        <div className="space-y-1">
          <p className="text-xl font-semibold text-slate-900">
            Залетай на тусу или звони
          </p>
          <p className="text-slate-500">{data.location}</p>
          <p className="text-slate-500">{data.hours}</p>
        </div>

        <div className="mx-auto w-fit">
          <a
            href="https://t.me/NatashaTishman"
            target="_blank"
            rel="noreferrer"
            className="block w-fit -translate-y-6 
            sm:translate-y-16 
            rotate-[-6deg] 
            rounded-2xl 
            bg-gradient-to-br from-pink-400 to-purple-500 
            px-6 py-3 
            border-4 border-white
            text-sm font-semibold text-white 
            shadow-[0_2px_0_rgba(0,0,0,0.6)]
            transition hover:rotate-0 hover:shadow-xl"
          
            aria-label="Написать нам"
          >
            {data.button}
          </a>
        </div>

        {/* КАРТА — база */}
        <div className="relative pt-10">
          <div className="rounded-3xl border bg-white p-4 shadow-2xl shadow-purple-500/50 ring-2 ring-purple-200/60">
            <div className="h-[220px] rounded-2xl bg-slate-200 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-pink-500"></div>
            </div>
            <p className="mt-3 text-sm text-slate-500 text-left">
              Здесь будет карта, чтобы найти нас быстро.
            </p>
          </div>

          {/* МАНУЛ С МОРОЖЕНЫМ — ПРИВЯЗАН К КАРТЕ */}
          <img
            src="/optimized/Мороженое.webp"
            alt="Мороженое"
            loading="lazy"
            className="pointer-events-none
            absolute left-1/2 
            -translate-x-1/2 
            -top-[110px]
            w-[220px] sm:w-[180px]
            z-10 "
          />
        </div>

        {/* Соцсети */}
        <div className="flex flex-wrap justify-center gap-3 pt-6">
          <a href="/socials" aria-label="Instagram" className="h-8 w-8 flex items-center justify-center rounded-xl bg-white shadow">
            <img src="/Icons SVG/icons8-instagram-100.svg" className="h-5 w-5" />
          </a>
          <a href="https://t.me/crushschooltrends" target="_blank" rel="noreferrer" aria-label="Telegram" className="h-8 w-8 flex items-center justify-center rounded-xl bg-white shadow">
            <img src="/Icons SVG/icons8-telegram-app-100.svg" className="h-5 w-5" />
          </a>
          <a href="/socials" aria-label="VK" className="h-8 w-8 flex items-center justify-center rounded-xl bg-white shadow">
            <img src="/Icons SVG/icons8-vk-com-100.svg" className="h-5 w-5" />
          </a>
          <a href="/socials" aria-label="TikTok" className="h-8 w-8 flex items-center justify-center rounded-xl bg-white shadow">
            <img src="/Icons SVG/icons8-tiktok-100.svg" className="h-5 w-5" />
          </a>
          <a href="/socials" aria-label="YouTube" className="h-8 w-8 flex items-center justify-center rounded-xl bg-white shadow">
            <img src="/Icons SVG/icons8-youtube-100.svg" className="h-5 w-5" />
          </a>
          <a href="/socials" aria-label="Pinterest" className="h-8 w-8 flex items-center justify-center rounded-xl bg-white shadow">
            <img src="/Icons SVG/icons8-pinterest-100.svg" className="h-5 w-5" />
          </a>
          <a href="/socials" aria-label="Likee" className="h-8 w-8 flex items-center justify-center rounded-xl bg-white shadow">
            <img src="/Icons SVG/icons8-likee-50.svg" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
