import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import React from 'react'
import HomePage from '../Pages/HomePage';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContactPage from '../Pages/ContactPage';
import BlogPage from '../Pages/BlogPage';
import SwipeUp from '../Components/SwipeUp';

export default function PagesRoutes() {
  return (
    <Router>
      <Header/>
      <SwipeUp/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/blog' element={<BlogPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}
