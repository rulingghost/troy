import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBanner from './components/TopBanner';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SubPage from './pages/SubPage';

function App() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <Router>
      <div className="app-container">
        {showBanner && <TopBanner onClose={() => setShowBanner(false)} />}
        <Header hasBanner={showBanner} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category/:slug" element={<SubPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
