import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className={`min-h-screen text-charcoal dark:text-gray-100 transition-colors duration-300 ${theme === 'dark' ? 'bg-dark-bg' : 'bg-cream'}`}>
        <Routes>
          <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="*" element={<NotFound theme={theme} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
