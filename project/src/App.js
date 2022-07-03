import React from 'react';
import './App.css';

import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
        </header>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-us' element={<AboutPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
      </div>
    );
  }
}

export default App;
