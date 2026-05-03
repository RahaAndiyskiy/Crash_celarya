export default function Contacts({ data }) {
  return (
    <section id="contacts" className="relative px-4 pb-24 pt-10 bg-[#F5F3FF] overflow-visible lg:m-20 lg:pb-16 lg:pt-12">
      <div className="mx-auto max-w-md text-center space-y-6 lg:max-w-6xl lg:text-left lg:space-y-8">
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-12">
          <div className="lg:w-[35%] space-y-6 lg:space-y-4">

            {/* Заголовок (фикс ширины, не прыгает) */}
            <img
              src="/optimized/Контакты.webp"
              alt="Контакты"
              className="mx-auto w-[260px] sm:w-[300px] h-auto lg:mx-0"
            />

            <div className="space-y-1">
              <p className="text-xl font-semibold text-slate-900">
                Залетай на тусу или звони
              </p>
              <p className="text-slate-500">{data.location}</p>
              <p className="text-slate-500">{data.hours}</p>
            </div>

            <div className="mx-auto w-fit lg:mx-0">
              <a
                href="https://t.me/NatashaTishman"
                target="_blank"
                rel="noreferrer"
                className="block w-fit -translate-y-6 
                sm:translate-y-16 
                lg:translate-y-0
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
          </div>

          <div className="lg:w-[65%]">
            <div className="relative pt-10 lg:pt-0">
              <div className="rounded-3xl border bg-white p-4 shadow-2xl shadow-purple-500/50 ring-2 ring-purple-200/60 ring-1 ring-white ring-inset">
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
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full translate-y-[60%] sm:translate-y-[40%] w-[220px] sm:w-[180px] z-10"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-6 lg:pt-4">
              <a href="/socials" aria-label="Instagram" className="h-12 w-12 flex items-center justify-center rounded-xl bg-white shadow">
                <img src="/Icons SVG/icons8-instagram-100.svg" className="h-6 w-6" />
              </a>
              <a href="https://t.me/crushschooltrends" target="_blank" rel="noreferrer" aria-label="Telegram" className="h-12 w-12 flex items-center justify-center rounded-xl bg-white shadow">
                <img src="/Icons SVG/icons8-telegram-app-100.svg" className="h-6 w-6" />
              </a>
              <a href="/socials" aria-label="VK" className="h-12 w-12 flex items-center justify-center rounded-xl bg-white shadow">
                <img src="/Icons SVG/icons8-vk-com-100.svg" className="h-6 w-6" />
              </a>
              <a href="/socials" aria-label="TikTok" className="h-12 w-12 flex items-center justify-center rounded-xl bg-white shadow">
                <img src="/Icons SVG/icons8-tiktok-100.svg" className="h-6 w-6" />
              </a>
              <a href="/socials" aria-label="YouTube" className="h-12 w-12 flex items-center justify-center rounded-xl bg-white shadow">
                <img src="/Icons SVG/icons8-youtube-100.svg" className="h-6 w-6" />
              </a>
              <a href="/socials" aria-label="Pinterest" className="h-12 w-12 flex items-center justify-center rounded-xl bg-white shadow">
                <img src="/Icons SVG/icons8-pinterest-100.svg" className="h-6 w-6" />
              </a>
              <a href="/socials" aria-label="Likee" className="h-12 w-12 flex items-center justify-center rounded-xl bg-white shadow">
                <img src="/Icons SVG/icons8-likee-50.svg" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
