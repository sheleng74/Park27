/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experiences from './components/Experiences';
import Gallery from './components/Gallery';
import MenuHighlights from './components/MenuHighlights';
import SocialProof from './components/SocialProof';
import Reserve from './components/Reserve';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';

export default function App() {
  return (
    <div className="relative pb-[68px] lg:pb-0">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experiences />
        <Gallery />
        <MenuHighlights />
        <SocialProof />
        <Reserve />
        <VisitUs />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
