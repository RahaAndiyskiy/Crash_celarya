'use client';

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 mb-3 mx-auto flex w-full max-w-3xl items-center justify-between rounded-xl border border-white/20 bg-white/45 p-1 shadow-soft backdrop-blur-xl backdrop-saturate-150">
        <div className="flex items-center gap-2">
          <picture>
            <source srcSet="/logo-110.webp 110w, /logo-130.webp 130w" type="image/webp" sizes="(max-width: 640px) 110px, 130px" />
            <img src="/logo.png" alt="Крашцелярия" className="h-14 w-auto max-w-[100px] rounded-2xl object-contain sm:h-18 sm:max-w-[120px]" />
          </picture>
        </div>

        <nav className="hidden gap-4 md:flex text-sm text-slate-600">
          <a href="#products" className="hover:text-slate-900">Хиты</a>
          <a href="#categories" className="hover:text-slate-900">Категории</a>
          <a href="#contacts" className="hover:text-slate-900">Контакты</a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Поиск"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 shadow-sm transition hover:bg-slate-200"
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-transparent bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-sm transition hover:opacity-90 md:hidden"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <button className="hidden rounded-full bg-violet-medium px-4 py-1.5 text-sm font-semibold text-white shadow-soft md:inline-flex">
            Войти
          </button>
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
