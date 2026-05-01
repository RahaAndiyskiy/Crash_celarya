export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 pt-6 text-secondary">
      <div className="flex flex-col gap-6 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <img src="/LOGO.webp" alt="Крашцелярия" className="h-14 w-auto object-contain" />
        </div>
        <nav className="flex flex-wrap gap-4 text-sm">
          <a href="#products" className="hover:text-primary">Хиты</a>
          <a href="#contacts" className="hover:text-primary">Контакты</a>
        </nav>
      </div>
      <p className="mt-6 text-sm text-secondary">© 2026 Крашцелярия. Все права защищены.</p>
    </footer>
  );
}
