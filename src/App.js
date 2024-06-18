import React from 'react'
import './App.css';
import { Route, Routes } from "react-router-dom"
import Homepage from './pages/HomePage/home'
import AboutPage from './pages/AboutPage/about'
import GalleryPage from './pages/GalleryPage/gallery'
import UpcomingEventsPage from './pages/UpcomingEventsPage/upcomingevent'
import ContactPage from './pages/ContactPage/contact'
import IrelandPage from './pages/IrelandPage/ireland'
import EPatrikaPage from './pages/EPatrikaPage/Epatrika'
import OdishaPage from './pages/OdishaPage/Odisha'
import Culture from './pages/Culture'
import Festival from './pages/Festival'
import Food from './pages/Food'
import ArtandCraft from './pages/Artandcraft'
import Historyandheritage from './pages/Historyandheritage'
import Leaders from './pages/Leaders'
import Odiasnow from './pages/Odiasnow'
import Placetovisit from './pages/Placetovisit'
import Signin from './pages/SignInPage/Signin'
import Donation from './pages/DonationPage/Donation'

const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Homepage />}/>
    <Route path="/about" element={<AboutPage />} />
    <Route path="/gallery" element={<GalleryPage />} />
    <Route path="/upcoming-events" element={<UpcomingEventsPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/ireland" element={<IrelandPage />} />
    <Route path="/e-patrika" element={<EPatrikaPage />} />
    <Route path="/odisha" element={<OdishaPage />} />
    <Route path="/culture" element={<Culture />} />
    <Route path="/festival" element={<Festival />} />
    <Route path="/food" element={<Food />} />
    <Route path="/artandcraft" element={<ArtandCraft />} />
    <Route path="/historyandheritage" element={<Historyandheritage />} />
    <Route path="/leaders" element={<Leaders />} />
    <Route path="/odiasnow" element={<Odiasnow />} />
    <Route path="/placetovisit" element={<Placetovisit />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/donation" element={<Donation />} />
    </Routes>
    </>
  )
}

export default App