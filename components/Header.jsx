'use client';

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-10 mx-auto flex w-full max-w-3xl items-center justify-between rounded-b-[28px] rounded-t-none bg-gradient-to-r from-rose-100 via-fuchsia-100 to-yellow-200 px-4 py-3 border-[12px] border-white border-t-0 shadow-[0_6px_0_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-2">
          <img src="/Logo_new.webp" alt="Крашцелярия" className="h-18 w-auto max-w-[220px] object-contain sm:h-22 sm:max-w-[160px]" />
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
            className="hero-icon-button hero-icon-button--purple inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#A78BFA] text-white transition-colors hover:bg-[#9774f0] md:hidden"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
        <div className="absolute left-[55%] top-full z-0 -translate-x-[40%] -translate-y-1/2 pointer-events-none h-[84px] w-auto opacity-95 sm:left-[60%] sm:h-[110px]">
          <img
            src="/newitem-sticker-button.webp"
            alt=""
            className="h-full w-auto rotate-10"
            aria-hidden="true"
          />
        </div>
      </header>
      <img src="/Manul_02.webp" alt="" aria-hidden="true" className="sr-only" />

      {menuOpen && (
        <div className="menu-backdrop fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-rose-100/80 via-fuchsia-100/70 to-yellow-200/70 p-6 backdrop-blur-xl md:hidden">
          <div className="relative w-full max-w-md rounded-[2rem] p-8 text-center text-white">
            <button
              type="button"
              aria-label="Закрыть меню"
              onClick={() => setMenuOpen(false)}
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-none border-[12px] border-white bg-[#A78BFA] text-xl text-white shadow-[0_14px_10px_-8px_rgba(0,0,0,0.72)] transition duration-300 ease-out hover:bg-[#9774f0]"
            >
              ✕
            </button>

            <div className="space-y-5 pt-4">
              <a
                href="#products"
                onClick={() => setMenuOpen(false)}
                className="block rounded-[1.2rem] border-[12px] border-white bg-gradient-to-br from-sky-200 via-cyan-200 to-sky-100 px-6 py-5 text-lg font-semibold text-primary shadow-[0_10px_0_rgba(0,0,0,0.78)] transform-gpu transition duration-300 ease-out hover:-translate-y-1 hover:rotate-0 rotate-[2deg]"
              >
                Хиты
              </a>
              <a
                href="#contacts"
                onClick={() => setMenuOpen(false)}
                className="block rounded-[1.2rem] border-[12px] border-white bg-gradient-to-br from-rose-200 via-rose-300 to-rose-100 px-6 py-5 text-lg font-semibold text-primary shadow-[0_10px_0_rgba(0,0,0,0.78)] transform-gpu transition duration-300 ease-out hover:-translate-y-1 hover:rotate-0 rotate-[1deg]"
              >
                Контакты
              </a>
            </div>

            <div className="mt-10 flex justify-center">
              <img
                src="/Manul_02.webp"
                alt="Манул"
                className="h-[21rem] w-auto object-contain drop-shadow-[0_10px_0_rgba(0,0,0,0.78)]"
              />
            </div>

          </div>
        </div>
      )}
    </>
  );
}
