import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Products from '../components/Products';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import { heroText, features, products, contacts } from '../content';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F3FF] text-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-28">
        <Header />
      </div>

      <Hero data={heroText} />

      <Features items={features} />

      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <main className="space-y-20 pt-0">
          <Products items={products} />
          <Contacts data={contacts} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
