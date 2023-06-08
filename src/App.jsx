// import { useState } from 'react'
import {Route, Routes} from 'react-router-dom';
import Login from './Components/Login';
import { useEffect } from 'react';
import Homepage from './Components/Homepage';
import Create from './Components/Create';
import Dashboard from './Components/Dashboard';
import BuyData from './Components/BuyData';
import MTNPlans from './Components/MTNPlans';

// const [count, setCount] = useState(0)
function App() {
  useEffect(() => {
    if('serviceWorker' in navigator){
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError =>{
          console.log('SW registration failed: ', registrationError);
        })
      })
    }
 }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/home' element={<Homepage/>} />
        {/* <Route path="/home" element={<Navigate to='/'/>} /> */}
        {/* <Route path="/about" element={<About/>} /> */}
        {/* <Route path="/contact" element={<Contact/>} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/dash" element={<Dashboard/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/buydata" element={<BuyData/>} />
        <Route path="/MTN" element={<MTNPlans/>} />
        <Route path="/Plan" element={<BuyData/>} />
        {/* <Route path="/login" element={</>} /> */}
      </Routes>
    </>
  )
}

export default App
