import './globals.css';

export const metadata = {
  title: 'Крашцелярия — магазин канцелярии',
  description: 'Светлый лендинг магазина канцелярии с акцентами лайм и фиолет.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
