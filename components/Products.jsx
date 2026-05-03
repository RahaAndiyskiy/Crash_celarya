'use client';

import { useEffect, useRef, useState } from 'react';

export default function Products({ items }) {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorCount, setIndicatorCount] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragStartScroll, setDragStartScroll] = useState(0);

  const getIndicatorCount = () => {
    const container = carouselRef.current;
    if (!container) return 1;
    const cardWidth = 220 + 16; // card width + gap
    const scrollableWidth = container.scrollWidth - container.clientWidth;
    if (scrollableWidth <= 0) return 1;
    return Math.min(items.length, Math.ceil(scrollableWidth / cardWidth) + 1);
  };

  useEffect(() => {
    setIndicatorCount(getIndicatorCount());
    const handleResize = () => setIndicatorCount(getIndicatorCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [items.length]);

  const handleScroll = (event) => {
    const cardWidth = 220 + 16; // card width + gap
    const scrollLeft = event.currentTarget.scrollLeft;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(indicatorCount - 1, Math.max(0, index)));
  };

  const handlePointerDown = (event) => {
    const container = carouselRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(event.clientX - container.offsetLeft);
    setDragStartScroll(container.scrollLeft);
    container.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (event) => {
    if (!isDragging) return;
    event.preventDefault();
    const container = carouselRef.current;
    if (!container) return;
    const x = event.clientX - container.offsetLeft;
    const walk = x - startX;
    container.scrollLeft = dragStartScroll - walk;
  };

  const handlePointerLeave = () => {
    setIsDragging(false);
  };

  const scrollCarousel = (direction) => {
    const container = carouselRef.current;
    if (!container) return;
    const cardWidth = 220 + 16;
    container.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  };

  return (
    <section id="products" className="relative space-y-6 mt-24 lg:mt-12">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-12">
        <div className="lg:w-[30%] flex-shrink-0 lg:hidden">
          <div className="flex flex-row flex-nowrap items-start justify-between gap-6 overflow-visible">
            <div className="min-w-[220px] max-w-[420px] space-y-5">
              <img
                src="/optimized/Люблю школу.webp"
                alt="Люблю школу"
                loading="lazy"
                className="relative left-[0px] top-[31px] lg:left-[0px] lg:top-[0px] lg:translate-x-0 lg:translate-y-0 h-24 w-auto object-contain sm:h-[7.5rem] -rotate-[10deg] transition-opacity duration-500 ease-out"
              />
              <div className="text-left">
              </div>
            </div>
            <div className="flex-shrink-0 relative -mt-2 -ml-10 lg:ml-0 lg:mt-0 max-[420px]:-ml-12 max-[360px]:-ml-14">
              <img
                src="/optimized/Манул_Хит.webp"
                alt=""
                loading="lazy"
                className="relative left-[-50px] top-[2px] lg:left-[0px] max-[420px]:left-[-40px] max-[360px]:left-[-26px] top-[15px] lg:top-[0px] lg:translate-x-0 lg:translate-y-0 h-[180px] w-auto object-contain drop-shadow-[0_4px_0_rgba(0,0,0,0.7)] transition-opacity duration-500 ease-out"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="relative w-full px-[50px] lg:px-[50px]">
          <button
            type="button"
            onClick={() => scrollCarousel(-1)}
            className="hidden lg:flex absolute left-0 top-1/2 z-10 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-slate-200/70 transition hover:bg-slate-50"
            aria-label="Прокрутить влево"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollCarousel(1)}
            className="hidden lg:flex absolute right-0 top-1/2 z-10 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-slate-200/70 transition hover:bg-slate-50"
            aria-label="Прокрутить вправо"
          >
            ›
          </button>
          <div
            ref={carouselRef}
            className="products-carousel flex w-full gap-4 p-[50px] lg:p-[100px] overflow-x-auto overflow-y-visible snap-x snap-mandatory scroll-smooth cursor-grab"
            onScroll={handleScroll}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerLeave}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="product-card min-w-[220px] h-[326px] snap-start bg-white rounded-2xl p-3 shadow-none transform transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="overflow-hidden rounded-2xl p-[4px] bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                  <img
                    src={item.image}
                    loading="lazy"
                    className="w-full h-[246px] object-cover rounded-xl transition-opacity duration-500 ease-out"
                    alt={item.name}
                  />
                </div>

                <div className="mt-1 mb-1 text-center">
                  <p className="text-sm font-semibold text-gray-900 leading-tight">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: indicatorCount }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-6 bg-purple-400'
                  : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .products-carousel {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .products-carousel::-webkit-scrollbar {
          display: none;
        }

        .products-carousel:active {
          cursor: grabbing;
        }

        .product-card {
          box-shadow:
            0 0 44px rgba(139, 92, 246, 0.26),
            0 0 24px rgba(236, 72, 153, 0.28),
            0 0 6px rgba(56, 189, 248, 0.45);
        }
      `}</style>
    </section>
  );
}
