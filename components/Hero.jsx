'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ManulBlock from './ManulBlock';

export default function Hero({ data }) {
  const manulOuterRef = useRef(null);
  const manulInnerRef = useRef(null);

  useEffect(() => {
    if (!manulOuterRef.current || !manulInnerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.9 });
      tl.set(manulOuterRef.current, { zIndex: 0 });
      tl.set(manulInnerRef.current, { yPercent: 35, scale: 0.96, opacity: 0 });
      tl.to(manulInnerRef.current, {
        yPercent: 15,
        scale: 0.985,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
      });
      tl.to(manulInnerRef.current, { yPercent: -37, scale: 1, duration: 0.08, ease: 'power2.out' });
      tl.to(manulOuterRef.current, { zIndex: 20, duration: 0 }, '-=0.012');
    }, manulOuterRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full pt-28 pb-6 bg-slate-50 overflow-x-hidden overflow-y-visible">
      <div className="mx-auto max-w-7xl relative overflow-visible px-4 sm:px-6">
        <div className="absolute -left-[3rem] -top-40 z-0 pointer-events-none sm:-left-[10rem] sm:-top-68">
          <img
            src="/клякса лайм.webp"
            alt=""
            className="h-[260px] w-auto rotate-180 object-contain opacity-95 sm:h-[360px]"
            aria-hidden="true"
          />
        </div>

        <div ref={manulOuterRef} className="absolute left-1/2 top-0 z-0 -translate-x-1/2 -translate-y-[71%] pointer-events-none">
          <div
            ref={manulInnerRef}
            className="will-change-transform"
            style={{ transform: 'translateY(35%) scale(0.96)', opacity: 0 }}
          >
            <ManulBlock />
          </div>
        </div>

        <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 z-10 p-6 sm:p-10 text-center overflow-hidden shadow-[0_-18px_24px_-18px_rgba(15,23,42,0.16)] bg-slate-50">
          <div className="relative mx-auto max-w-5xl">
            <h1 className="mb-3 text-[44px] sm:text-[56px] font-bold leading-[1.05] font-nunito">
              Канцтовары,
              <br />
              в которые ты{' '}
              <span className="relative inline-block text-purple-600 text-[48px] sm:text-[60px]">
                влюбишься
                <img
                  src="/Сердце лайм.webp"
                  alt=""
                  aria-hidden="true"
                  className="absolute left-[95%] top-[0%] mt-2 -translate-x-0 h-16 w-auto sm:h-20"
                  style={{ transform: 'rotate(45deg)' }}
                />
              </span>
            </h1>

            <p className="mb-5 text-base text-gray-500 leading-relaxed">
              Трендовая канцелярия, мерч блогеров и игрушки, которые хочется взять прямо сейчас!
            </p>

            <div className="relative mb-5 w-full">
              <div className="absolute left-[80%] top-[1%] z-0 -translate-y-1/2 translate-x-6 sm:translate-x-24 block">
                <img
                  src="/клякса фиол.webp"
                  alt=""
                  className="w-[180px] h-auto opacity-100 sm:w-[330px]"
                  aria-hidden="true"
                />
              </div>
              <div className="relative flex flex-col gap-3 z-10">
                <button className="w-full rounded-xl bg-lime-300 px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-lime-300">
                  Смотреть хиты
                </button>
                <button className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base font-semibold text-slate-900">
                  <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-base">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l8.8 8.8 8.8-8.8a5.5 5.5 0 0 0 0-7.8Z" />
                    </svg>
                  </span>
                  Каталог
                </button>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
              <span className="text-lg">🐾</span>
              <span className="border-b border-purple-400">Одобрено Манулом</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
