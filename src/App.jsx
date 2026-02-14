import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/NavBar';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className='bg-blue-50 min-h-screen'>
        <Routes>
          <Route path='/' element={
            <>
              <Navbar />
              <Home />
              <About />
              <Skills />
              <Projects />
              <Services />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          } />

          {/* Auth Routes */}
          <Route />

        </Routes>
      </div>
    </Router>
  )
}

export default App