import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const NavBar = lazy(() => import('./components/NavBar'));
const Hero = lazy(() => import('./components/Hero'));
const AppSection = lazy(() => import('./components/AppSection'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Banner = lazy(() => import('./components/Banner'));
const Install = lazy(() => import('./components/Install'));
const RedireccionarIdioma = lazy(() => import('./components/RedireccionarIdioma'));
import { IdiomaProvider } from './components/IdiomaContext';

function App() {
  return (
    <>
      <Router>
        <IdiomaProvider>
          <RedireccionarIdioma />

          {/* Carga inmediata de Hero y NavBar */}
          <Suspense fallback={<div>Loading...</div>}>
          <NavBar /> 
            <Hero />
            
          </Suspense>

          {/* Carga diferida de otros componentes */}
          <Suspense fallback={<div>Loading...</div>}>
            <Install />
            <AppSection />
            <Banner />
            <About />
            <Contact />
            <Footer />
          </Suspense>

        </IdiomaProvider>
      </Router>
    </>
  );
}

export default App;
