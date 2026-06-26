import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Hero from './components/Hero'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Testimonials from './pages/Testimonials'
import { useLocation } from 'react-router-dom'

function ScrollToTop(){
  const {pathname} = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname])
  return null;
}

const App = () => {
  return (
    <>

      <Navbar />
      <ScrollToTop/>
      <main className='pt-20'>
        <Routes>
          <Route path='/' element={<Hero />}></Route>
          <Route path='/Features' element={<Features />}></Route>
          <Route path='/Pricing' element={<Pricing />}></Route>
          <Route path='/Testimonials' element={<Testimonials />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App