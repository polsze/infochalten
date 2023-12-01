import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import { AppSection } from './components/AppSection'
import { About } from './components/About'
import { Contact } from './components/Contact'
import Footer from './components/Footer'
import Banner from './components/Banner'
import { IdiomaProvider } from './components/IdiomaContext'
import Install from './components/Install'

function App() {

  return (
    <>
    <IdiomaProvider>
        <NavBar />
        <Hero /> 
        <Install />
        <AppSection />
        <Banner />
        <About />
        <Contact />
        <Footer />
      </IdiomaProvider>
    </>
  )
}

export default App
