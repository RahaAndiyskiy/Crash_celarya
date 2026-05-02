'use client';

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 mx-auto flex w-full max-w-3xl flex-col gap-1 rounded-2xl bg-white p-2 shadow-[0_0_45px_rgba(139,92,246,0.5),0_0_24px_rgba(236,72,153,0.5),0_0_10px_rgba(56,189,248,0.7)] ring-1 ring-white">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <img src="/optimized/Logo_new.webp" alt="Крашцелярия" loading="eager" className="h-18 w-auto max-w-[200px] object-contain sm:h-22 sm:max-w-[160px]" />
          </div>

          <nav className="hidden gap-4 md:flex text-sm text-secondary">
            <a href="#products" className="hover:text-primary">Хиты</a>
            <a href="#contacts" className="hover:text-primary">Контакты</a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Поиск"
              className="hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-secondary transition hover:bg-slate-100"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.65" y1="16.65" x2="21" y2="21" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Открыть меню"
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center border-4 border-white bg-transparent text-black transition-transform duration-200 hover:-translate-y-1 md:hidden"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        <div className="w-full rounded-2xl bg-transparent p-1 ring-1 ring-white">
          <div className="flex flex-wrap justify-center gap-2 max-[390px]:gap-2 max-[375px]:gap-2">
            <a href="/socials" aria-label="Instagram" className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-[0_0_20px_rgba(139,92,246,0.16)] transition hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(139,92,246,0.24)]">
              <img src="/Icons SVG/icons8-instagram-100.svg" alt="Instagram" className="h-8 w-8" />
            </a>
            <a href="https://t.me/crushschooltrends" target="_blank" rel="noreferrer" aria-label="Telegram" className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-[0_0_20px_rgba(139,92,246,0.16)] transition hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(139,92,246,0.24)]">
              <img src="/Icons SVG/icons8-telegram-app-100.svg" alt="Telegram" className="h-8 w-8" />
            </a>
            <a href="/socials" aria-label="VK" className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-[0_0_20px_rgba(139,92,246,0.16)] transition hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(139,92,246,0.24)]">
              <img src="/Icons SVG/icons8-vk-com-100.svg" alt="VK" className="h-8 w-8" />
            </a>
            <a href="/socials" aria-label="TikTok" className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-[0_0_20px_rgba(139,92,246,0.16)] transition hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(139,92,246,0.24)]">
              <img src="/Icons SVG/icons8-tiktok-100.svg" alt="TikTok" className="h-8 w-8" />
            </a>
            <a href="/socials" aria-label="YouTube" className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-[0_0_20px_rgba(139,92,246,0.16)] transition hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(139,92,246,0.24)]">
              <img src="/Icons SVG/icons8-youtube-100.svg" alt="YouTube" className="h-8 w-8" />
            </a>
            <a href="/socials" aria-label="Pinterest" className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-[0_0_20px_rgba(139,92,246,0.16)] transition hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(139,92,246,0.24)]">
              <img src="/Icons SVG/icons8-pinterest-100.svg" alt="Pinterest" className="h-8 w-8" />
            </a>
            <a href="/socials" aria-label="Likee" className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-[0_0_20px_rgba(139,92,246,0.16)] transition hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(139,92,246,0.24)]">
              <img src="/Icons SVG/icons8-likee-50.svg" alt="Likee" className="h-8 w-8" />
            </a>
          </div>
        </div>
      </header>
      <img src="/optimized/Manul_02.webp" alt="" aria-hidden="true" className="sr-only" />

      {menuOpen && (
        <div className="menu-backdrop fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-rose-100/80 via-fuchsia-100/70 to-yellow-200/70 p-6 backdrop-blur-xl md:hidden">
          <div className="relative w-full max-w-md rounded-[2rem] p-8 text-center text-white">
            <button
              type="button"
              aria-label="Закрыть меню"
              onClick={() => setMenuOpen(false)}
              className="absolute left-1/2 top-[-44px] inline-flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-none border-[6px] border-white bg-[#A78BFA] text-xl text-white shadow-[0_15px_0_-8px_rgba(0,0,0,0.72)] transition duration-300 ease-out hover:bg-[#9774f0] max-[375px]:left-[50%] max-[375px]:top-[76px] max-[375px]:-translate-x-1/2 max-[414px]:left-1/2 max-[414px]:top-[-20px] max-[414px]:-translate-x-1/2 max-[430px]:left-1/2 max-[430px]:top-[-20px] max-[430px]:-translate-x-1/2"
            >
              ✕
            </button>

            <div className="space-y-4 pt-3">
              <a
                href="#products"
                onClick={() => setMenuOpen(false)}
                className="relative -top-[7px] mx-auto block rounded-[1.2rem] border-[12px] border-white bg-gradient-to-br from-sky-200 via-cyan-200 to-sky-100 px-6 py-5 text-lg font-semibold text-primary shadow-[0_10px_0_rgba(0,0,0,0.78)] transform-gpu transition duration-300 ease-out hover:-translate-y-1 hover:rotate-0 rotate-[2deg] max-[375px]:top-[90px] max-[414px]:top-[54px] max-[430px]:top-[54px]"
              >
                Хиты
              </a>
              <a
                href="#contacts"
                onClick={() => setMenuOpen(false)}
                className="relative -top-[70px] mx-auto block rounded-[1.2rem] border-[12px] border-white bg-gradient-to-br from-rose-200 via-rose-300 to-rose-100 px-6 py-5 text-lg font-semibold text-primary shadow-[0_10px_0_rgba(0,0,0,0.78)] transform-gpu transition duration-300 ease-out hover:-translate-y-1 hover:rotate-0 rotate-[1deg] max-[375px]:top-[100px] max-[414px]:top-[68px] max-[430px]:top-[68px]"
              >
                Контакты
              </a>
            </div>

            <div className="mt-6 flex justify-center">
              <img
                src="/optimized/Manul_02.webp"
                alt="Манул"
                className="relative left-[-3px] top-[76px] h-[21rem] w-auto object-contain drop-shadow-[0_10px_0_rgba(0,0,0,0.78)] translate-y-[56px] max-[375px]:top-[-23px] max-[375px]:translate-y-0"
              />
            </div>

          </div>
        </div>
      )}
    </>
  );
}
