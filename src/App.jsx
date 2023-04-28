import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Firstcard from './Components/Firstcard'
import Cards2 from './Cards2'
import Footers from './Footers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Firstcard/>
      <Cards2/>
      <Footers/>
    </>
  )
}

export default App
