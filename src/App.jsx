import { useState } from 'react'
import TopNav from './Components/TopNav'
import HeroSection from './Components/HeroSection'
import Firstcard from './Components/Firstcard'
import Cards2 from './Components/Cards2'
import Footers from './Components/Footers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopNav/>
      <HeroSection/>
      <Firstcard/>
      <Cards2/>
      <Footers/>
    </>
  )
}

export default App
