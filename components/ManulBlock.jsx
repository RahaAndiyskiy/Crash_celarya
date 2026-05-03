'use client';

'use client';

export default function ManulBlock() {
  return (
    <div className="w-full max-w-none rounded-[2rem] bg-transparent p-1 flex items-end justify-center overflow-visible">
      <picture>
        <source srcSet="/optimized/manul_upscaled-500.webp 500w" type="image/webp" sizes="(max-width: 640px) 200px, 312px" />
        <img
          src="/optimized/manul_upscaled-500.webp"
          alt="Манул"
          loading="eager"
          className="mx-auto w-[200px] sm:w-[312px] lg:w-[468px] lg:translate-y-7.5 max-w-none object-contain"
        />
      </picture>
    </div>
  );
}
