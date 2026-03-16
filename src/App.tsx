/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Splash } from './components/Splash';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30 font-sans overflow-x-hidden">
      <CustomCursor />
      {showSplash ? (
        <Splash onComplete={() => setShowSplash(false)} />
      ) : (
        <>
          <AnimatedBackground />
          <Navbar />
          <main className="relative z-10 flex flex-col">
            <Hero />
            <Education />
            <Experience />
            <Skills />
            <Certifications />
            <Contact />
          </main>
          
          <footer className="relative z-10 py-8 text-center text-slate-500 text-sm border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-md">
            <p>© {new Date().getFullYear()} Sahil Chhabra. All rights reserved.</p>
          </footer>
        </>
      )}
    </div>
  );
}
