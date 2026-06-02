import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ImpactHub from './pages/ImpactHub';
import SolutionsLab from './pages/SolutionsLab';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import JoinUs from './pages/JoinUs';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/impact-hub" element={<ImpactHub />} />
            <Route path="/solutions-lab" element={<SolutionsLab />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/join" element={<JoinUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
