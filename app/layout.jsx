import './globals.css';
import CursorRepel from '../components/CursorRepel';
import ParticlesCanvas from '../components/ParticlesCanvas';

export const metadata = {
  title: 'Крашцелярия — магазин канцелярии',
  description: 'Светлый лендинг магазина канцелярии с акцентами лайм и фиолет.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="preload"
          href="/Nunito/Nunito-VariableFont_wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <CursorRepel />
        <ParticlesCanvas />
        {children}
      </body>
    </html>
  );
}
