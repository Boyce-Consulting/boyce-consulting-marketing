'use client';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <LogoMarquee />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}
