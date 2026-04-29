'use client';

'use client';

export default function ManulBlock() {
  return (
    <div className="w-full max-w-none rounded-[2rem] bg-transparent p-1 flex items-end justify-center overflow-visible">
      <picture>
        <source srcSet="/manul_upscaled-320.webp 320w, /manul_upscaled-500.webp 500w" type="image/webp" sizes="(max-width: 640px) 200px, 312px" />
        <img
          src="/manul_upscaled.png"
          alt="Манул"
          className="mx-auto w-[200px] sm:w-[312px] max-w-none object-contain"
          style={{ width: '312px', maxWidth: 'none' }}
        />
      </picture>
    </div>
  );
}
