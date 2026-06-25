import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Hero from './components/Hero'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Testimonials from './pages/Testimonials'


const App = () => {
  return (
    <>
      <Navbar />
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