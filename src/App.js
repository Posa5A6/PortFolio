//import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
