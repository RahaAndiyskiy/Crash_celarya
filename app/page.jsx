import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Products from '../components/Products';
import Categories from '../components/Categories';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import { heroText, features, products, categories, contacts } from '../content';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 pt-24">
        <Header />
      </div>

      <Hero data={heroText} />

      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <main className="space-y-20 pt-0">
          <Features items={features} />
          <Products items={products} />
          <Categories items={categories} />
          <Contacts data={contacts} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
