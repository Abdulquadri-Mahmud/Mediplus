import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import React from 'react'
import HomePage from '../Pages/HomePage';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContactPage from '../Pages/ContactPage';

export default function PagesRoutes() {
  return (
    <Router>
      <Header/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}
