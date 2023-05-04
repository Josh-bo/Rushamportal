import { useState } from 'react'
import TopNav from './TopNav'
import HeroSection from './Components/HeroSection'
import Firstcard from './Components/Firstcard'
import Cards2 from './Cards2'
import Footers from './Footers'

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
