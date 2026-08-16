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
import NotFoundPage from './pages/NotFoundPage';
import Admin from './pages/Admin';

import { useContent } from './context/ContentContext';

function AppContent() {
  const { content, lang } = useContent();
  const [showBanner, setShowBanner] = useState(true);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  // Update dynamic document title & scroll to top on route / language change
  useEffect(() => {
    setShowBanner(true);
    window.scrollTo({ top: 0, behavior: 'instant' });

    const siteTitle = content?.general?.siteTitle || 'Alexander Troy';
    const seoTitle = content?.seo?.metaTitle;
    const isEn = lang === 'EN';

    if (isAdmin) {
      document.title = `${siteTitle} CMS • Yönetim Paneli`;
      return;
    }

    if (location.pathname === '/' || location.pathname === '') {
      document.title = seoTitle || `${siteTitle} • Enjoy Your Journey`;
    } else if (location.pathname.includes('/iletisim') || location.pathname.includes('/contact')) {
      document.title = isEn ? `Contact Us • ${siteTitle}` : `İletişim & Randevu • ${siteTitle}`;
    } else {
      const parts = location.pathname.split('/').filter(Boolean);
      if (parts.length > 0) {
        const formatted = parts.map(p => p.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())).join(' — ');
        document.title = `${formatted} • ${siteTitle}`;
      } else {
        document.title = `${siteTitle} • Enjoy Your Journey`;
      }
    }
  }, [location.pathname, content, lang, isAdmin]);

  if (isAdmin) {
    return (
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFoundPage />} />
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
        <Route path="*" element={<NotFoundPage />} />
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
