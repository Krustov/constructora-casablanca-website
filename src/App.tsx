import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Showcase } from './components/Showcase';
import { Solutions } from './components/Solutions';
import { Products } from './components/Products';
import { Advantages } from './components/Advantages';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-casa-light text-casa-dark selection:bg-casa-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Solutions />
        <Products />
        <Advantages />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
