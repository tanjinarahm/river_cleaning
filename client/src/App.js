import React, { useState, useRef } from 'react';
import 
  {BrowserRouter 
  as Router, Switch, Route}
from 'react-router-dom'

import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/index.js'
import ServicesPage from './pages/services'
import ReviewsPage from './pages/reviews'
import ReviewForm from './pages/review-form'



const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  };


  return (
    <>
      <Router>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>
          <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/services" component={ServicesPage} exact/>
              <Route path="/reviews" component={ReviewsPage} exact/>
              <Route path="/submitreview" component={ReviewForm} exact/>
          </Switch>
          {/* <HeroSection/> */}
          <Footer/>
      </Router>
    </>
  );
};

export default App