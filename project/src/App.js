import React from 'react';
import './App.css';

import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import Forms from './pages/Forms';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/forms">Forms</Link>
        </header>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-us' element={<AboutPage />} />
            <Route path='/forms' element={<Forms />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
      </div>
    );
  }
}

export default App;
