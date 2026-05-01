import Link from 'next/link';

export default function SocialsStub() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100/80 via-fuchsia-100/70 to-yellow-200/70 text-slate-900 px-4 py-4 sm:px-6 font-rubik">
      <div className="w-full max-w-2xl relative rounded-[2rem] border-white bg-white/95 p-2 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.2)]">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h1 className="mb-4 w-full text-4xl font-black text-primary leading-tight sm:text-6xl font-nunito">
            <span className="block">Пока что пусто,</span>
            <span className="block">приходи позже</span>
          </h1>
        </div>

        <img
          src="/manul_dreamV2.webp"
          alt="Манул"
          className="mx-auto w-full max-w-[420px] object-contain"
        />

        <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center mt-4">
          <Link href="/" className="catalog-button inline-flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-base font-semibold text-primary shadow-sm sm:w-auto mb-[20px]">
            <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-base">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l8.8 8.8 8.8-8.8a5.5 5.5 0 0 0 0-7.8Z" />
              </svg>
            </span>
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
}
