import { Capabilities } from '@/components/Capabilities';
import { Company } from '@/components/Company';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Capabilities />
        <Company />
      </main>
      <Footer />
    </>
  );
}
