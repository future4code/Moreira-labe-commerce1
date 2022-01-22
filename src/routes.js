import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import MarketPlace from './pages/MarketPlace'

class RoutesApp extends Component {
    render() {
        return (
            <BrowserRouter>
            <Routes>
              <Route path="/" element ={<Home />} />
              <Route path="/marketplace" element ={<MarketPlace />} />
            </Routes>
          </BrowserRouter> 
        );
    }
}

export default RoutesApp;
