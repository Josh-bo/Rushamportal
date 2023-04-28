import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Firstcard from './Components/Firstcard'
import Cards2 from './Cards2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Firstcard/>
      <Cards2/>
    </>
  )
}

export default App
