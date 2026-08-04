import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TopBanner from './components/TopBanner';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SubPage from './pages/SubPage';
import ContactPage from './pages/ContactPage';

function AppContent() {
  const [showBanner, setShowBanner] = useState(true);
  const location = useLocation();

  // Reset banner visibility on route change and page reload
  useEffect(() => {
    setShowBanner(true);
  }, [location.pathname]);

  return (
    <div className="app-container">
      {showBanner && <TopBanner onClose={() => setShowBanner(false)} />}
      <Header hasBanner={showBanner} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iletisim" element={<ContactPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/:category/:slug" element={<SubPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
