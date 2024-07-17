import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import React from 'react'
import HomePage from '../Pages/HomePage';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function PagesRoutes() {
  return (
    <Router>
      {/* <Header/> */}
        <Routes>
            <Route path='/' element={<HomePage/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}
