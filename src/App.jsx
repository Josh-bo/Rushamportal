// import { useState } from 'react'
import {Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import { useEffect } from 'react';
import Homepage from './Pages/Homepage';
import Create from './Pages/Create';
import Dashboard from './Pages/Dashboard';
import BuyData from './Pages/BuyData';
import MTNPlans from './Pages/MTNPlans';
import AirtelPlans from './Pages/AirtelPlans';
import MyImageLoader from './Components/MyImageLoader';

// const [count, setCount] = useState(0)
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Create/>} />
        <Route path='/home' element={<Homepage/>} />
        {/* <Route path="/home" element={<Navigate to='/'/>} /> */}
        {/* <Route path="/about" element={<About/>} /> */}
        {/* <Route path="/contact" element={<Contact/>} /> */}
        {/* <Route path="/create" element={<Create/>} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/dash" element={<Dashboard/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/buydata" element={<BuyData/>} />
        <Route path="/MTN" element={<MTNPlans/>} />
        <Route path="/AIRTEL" element={<AirtelPlans/>} />
        <Route path="/Plan" element={<BuyData/>} />
        <Route path="/img" element={<MyImageLoader/>} />
      </Routes>
    </>
  )
}

export default App
