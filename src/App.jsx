import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.min.css';
import './App.css';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductRange from './components/ProductRange';
import Footer from './components/Footer';
import Newsroom from './components/Newsroom';

// Import Product Category Components
import Desizing from './components/products/Desizing';
import Mercerisation from './components/products/Mercerisation';
import CationicSofteners from './components/products/CationicSofteners';
import AfterTreatment from './components/products/AfterTreatment';
import SiliconeSofteners from './components/products/SiliconeSofteners';
import GarmentProcessing from './components/products/GarmentProcessing';
import NonIonicSofteners from './components/products/NonIonicSofteners';
import PolyesterProcessing from './components/products/PolyesterProcessing';
import StabilizersSequestering from './components/products/StabilizersSequestering';
import WettingScouring from './components/products/WettingScouring';
import DefoamersLubricants from './components/products/DefoamersLubricants';
import Finishing from './components/products/Finishing';
import AllProducts from './components/products/AllProducts';
import Contact from './components/Contact';
import FloatingScrollIndicator from './components/FloatingScrollIndicator';
import Preloader from './components/Preloader';

// Import Data
import { productData } from './data/products';

// Import Bootstrap JS for carousel and other interactive elements
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// ScrollToTop component to reset scroll position on route change and handle hash scrolling
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <Preloader />
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <div className="container py-5 overflow-hidden">
                  <About />
                  <ProductRange />
                </div>
              </>
            } />
            <Route path="/all-products" element={<AllProducts />} />
            <Route path="/desizing" element={<Desizing />} />
            <Route path="/cationic-softeners" element={<CationicSofteners />} />
            <Route path="/mercerisation" element={<Mercerisation />} />
            <Route path="/silicone-softeners" element={<SiliconeSofteners />} />
            <Route path="/garment-processing" element={<GarmentProcessing />} />
            <Route path="/after-treatment" element={<AfterTreatment />} />
            <Route path="/wetting-scouring" element={<WettingScouring />} />
            <Route path="/stabilizers-sequestering" element={<StabilizersSequestering />} />
            <Route path="/polyester-processing" element={<PolyesterProcessing />} />
            <Route path="/non-ionic-softeners" element={<NonIonicSofteners />} />
            <Route path="/defoamers-lubricants" element={<DefoamersLubricants />} />
            <Route path="/finishing" element={<Finishing />} />
            <Route path="/news" element={<Newsroom />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add more routes as categories are added to productData */}
          </Routes>
        </main>
        <FloatingScrollIndicator />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
