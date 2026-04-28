export default function ManulBlock() {
  return (
    <div className="w-full max-w-[500px] rounded-[2rem] bg-transparent p-1 flex items-end justify-center overflow-visible">
      <picture>
        <source srcSet="/manul_upscaled.webp" type="image/webp" />
        <img
          src="/manul_upscaled.png"
          alt="Манул"
          className="mx-auto w-[420px] sm:w-[500px] object-contain"
        />
      </picture>
    </div>
  );
}
