import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ContentProvider } from './context/ContentContext';
import TopBanner from './components/TopBanner';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingSupport from './components/FloatingSupport';
import Home from './pages/Home';
import SubPage from './pages/SubPage';
import ContactPage from './pages/ContactPage';
import CategoryOverviewPage from './pages/CategoryOverviewPage';
import Admin from './pages/Admin';

function AppContent() {
  const [showBanner, setShowBanner] = useState(true);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  // Reset banner visibility and scroll to top on route change and page reload
  useEffect(() => {
    setShowBanner(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  if (isAdmin) {
    return (
      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    );
  }

  return (
    <div className="app-container">
      {showBanner && <TopBanner onClose={() => setShowBanner(false)} />}
      <Header hasBanner={showBanner} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iletisim" element={<ContactPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/:category" element={<CategoryOverviewPage />} />
        <Route path="/:category/:slug" element={<SubPage />} />
      </Routes>
      <FloatingSupport />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ContentProvider>
      <Router>
        <AppContent />
      </Router>
    </ContentProvider>
  );
}

export default App;
