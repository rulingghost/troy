import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';
import Home from './pages/Home';
import SubPage from './pages/SubPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category/:slug" element={<SubPage />} />
        </Routes>
        <Footer />
        <FloatingSocials />
      </div>
    </Router>
  );
}

export default App;
