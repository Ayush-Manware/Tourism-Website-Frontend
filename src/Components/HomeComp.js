import React from 'react'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'

import { Routes, Route } from 'react-router-dom'
import Register from './Register_Login/Register'
import Login from './Register_Login/Login'
import Home from './Routes/Home'
// import ViewtourPackages from './Routes/ViewTourPackages'
import ViewStyleTourPackages from './Routes/ViewStyleTourPackages'
import IndiaTourism from './Routes/IndianTourism'
import ViewIndiaTourism from './Routes/ViewIndiaTourism'
import TourPackages from './Routes/TourPackages'
import PlacesToVisit from './Routes/PlacesToVisit'
import TourOffers from './Routes/TourOffers'
import ViewTourOffers from './Routes/ViewTourOffers'
import ContactUs from './Routes/ContactUs'
import Footer from './Footer/Footer'
import ViewtourPackages from './Routes/ViewTourPackages'


export default function HomeComp() {

  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/user/register' element={<Register />} />
        <Route path='/user/login' element={<Login />} />
        <Route path='/' element={<Home />} />
            <Route path='/tour-packages/:places' element={<ViewtourPackages />} />
            <Route path='/style-tour-packages/:styles' element={<ViewStyleTourPackages />} />
        <Route path='/india_tourism' element={<IndiaTourism />} />
            <Route path='/india-tourism/:states' element={<ViewIndiaTourism />} />
        <Route path='/tour_packages' element={<TourPackages />} />
        <Route path='/places_to_visit' element={<PlacesToVisit />} />
        <Route path='/tour_offers' element={<TourOffers />} />
            <Route path='/tour-offers/:offers' element={<ViewTourOffers />} />
        <Route path='/contact_us' element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  )
}