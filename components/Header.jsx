'use client';

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-10 mx-auto flex w-full max-w-3xl items-center justify-between rounded-b-[28px] rounded-t-none bg-gradient-to-r from-rose-100 via-fuchsia-100 to-yellow-200 px-4 py-3 border-[12px] border-white shadow-[0_16px_30px_-25px_rgba(15,23,42,0.35)]">
        <div className="flex items-center gap-2">
          <img src="/LOGO.webp" alt="Крашцелярия" className="h-18 w-auto max-w-[140px] object-contain sm:h-22 sm:max-w-[160px]" />
        </div>

        <nav className="hidden gap-4 md:flex text-sm text-secondary">
          <a href="#products" className="hover:text-primary">Хиты</a>
          <a href="#categories" className="hover:text-primary">Категории</a>
          <a href="#contacts" className="hover:text-primary">Контакты</a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Поиск"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-secondary transition hover:bg-slate-100"
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
          <button className="hidden rounded-full bg-violet-700 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-violet-600 md:inline-flex">
            Войти
          </button>
        </div>
        <div className="absolute left-1/2 top-full z-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[72px] w-auto opacity-95 sm:h-[96px]">
          <img
            src="/newitem-sticker-button.webp"
            alt=""
            className="h-full w-auto rotate-10"
            aria-hidden="true"
          />
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-6 backdrop-blur-xl md:hidden">
          <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-slate-900/95 p-8 text-center text-white shadow-2xl">
            <button
              type="button"
              aria-label="Закрыть меню"
              onClick={() => setMenuOpen(false)}
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-slate-800 text-xl text-white transition hover:bg-slate-700"
            >
              ✕
            </button>

            <div className="space-y-5 pt-4">
              <a
                href="#products"
                onClick={() => setMenuOpen(false)}
                className="block rounded-3xl bg-white/10 px-6 py-4 text-lg font-semibold text-white transition hover:bg-white/20"
              >
                Хиты
              </a>
              <a
                href="#categories"
                onClick={() => setMenuOpen(false)}
                className="block rounded-3xl bg-white/10 px-6 py-4 text-lg font-semibold text-white transition hover:bg-white/20"
              >
                Категории
              </a>
              <a
                href="#contacts"
                onClick={() => setMenuOpen(false)}
                className="block rounded-3xl bg-white/10 px-6 py-4 text-lg font-semibold text-white transition hover:bg-white/20"
              >
                Контакты
              </a>
            </div>

            <div className="mt-8">
              <button className="w-full rounded-full bg-violet-medium px-6 py-4 text-sm font-semibold text-white transition hover:bg-violet-500">
                Войти
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
