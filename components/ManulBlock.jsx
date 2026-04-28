export default function ManulBlock() {
  return (
    <div className="w-full max-w-[500px] rounded-[2rem] bg-transparent p-1 flex items-end justify-center overflow-visible">
      <picture>
        <source srcSet="/manul_upscaled-320.webp 320w, /manul_upscaled-500.webp 500w" type="image/webp" sizes="(max-width: 640px) 320px, 500px" />
        <img
          src="/manul_upscaled.png"
          alt="Манул"
          className="mx-auto w-[320px] sm:w-[500px] object-contain"
        />
      </picture>
    </div>
  );
}
