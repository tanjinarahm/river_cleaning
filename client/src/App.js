import React, { useState, useRef } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

import Home from './pages/index'
// import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
      <Router>
        <Home/>
        {/* <HeroSection/> */}
      </Router>
    </>
  );
}

export default App;
