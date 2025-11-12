'use client';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />
      <CallToAction />
      <Contact />
      <Footer />
    </main>
  );
}
