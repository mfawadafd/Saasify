import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Hero from './components/Hero'
import Features from './pages/Features'
import Pricing from './pages/Pricing'


const App = () => {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Hero/>}></Route>
      <Route path='/Features' element={<Features/>}></Route>
      <Route path='/Pricing' element={<Pricing/>}></Route>
    </Routes>
    </>
  )
}

export default App