import { useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DesignCollection from './components/DesignCollection';
import Features from './components/Features';
import Contact from './components/Contact';
import ContactDialog from './components/ContactDialog';
import Footer from './components/Footer';

export default function App() {
  const [selectedDesign, setSelectedDesign] = useState('');
  const contactSelect = useRef(null);
  const contactDialog = useRef(null);
  function chooseDesign(name) {
    setSelectedDesign(name);
    document.getElementById('contact').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    contactSelect.current?.focus({ preventScroll: true });
  }
  return (
    <>
      <a href="#main" className="sr-only fixed top-3 left-3 z-50 rounded-md bg-action px-4 py-3 text-base text-white focus:not-sr-only">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <DesignCollection onChoose={chooseDesign} />
        <Features />
        <Contact ref={contactSelect} selectedDesign={selectedDesign} onDesignChange={setSelectedDesign} onDemoContact={() => contactDialog.current.showModal()} />
      </main>
      <Footer />
      <ContactDialog ref={contactDialog} selectedDesign={selectedDesign} />
    </>
  );
}
