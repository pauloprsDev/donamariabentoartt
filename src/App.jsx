
import React, { Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'

import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Loading from './components/loading'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/footer'
import ErrorBoundary from './components/errorboundary'

// Import components directly
import Home from './components/Home'
import Products from './components/products'
import About from './components/about'
import Contact from './components/contact'

// AnimatedRoutes component definition
function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <ErrorBoundary>
          <AnimatedRoutes />
        </ErrorBoundary>
        <Footer />
      </div>
    </Router>
  )
}

export default App
