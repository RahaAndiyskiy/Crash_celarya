export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 pt-6 text-slate-600">
      <div className="flex flex-col gap-6 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between">
        <div className="text-lg font-semibold text-slate-900">Крашцелярия</div>
        <nav className="flex flex-wrap gap-4 text-sm">
          <a href="#products" className="hover:text-slate-900">Хиты</a>
          <a href="#categories" className="hover:text-slate-900">Категории</a>
          <a href="#contacts" className="hover:text-slate-900">Контакты</a>
        </nav>
      </div>
      <p className="mt-6 text-sm text-slate-500">© 2026 Крашцелярия. Все права защищены.</p>
    </footer>
  );
}
