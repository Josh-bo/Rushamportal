import React from 'react';
import SideScroll from './SideScroll';

const AirtelPlans = () => {
  return (
    <>
     <div>
        <div className='balD text-light p-3 fs-5 mx-auto text-center '>AIRTEL DATA PLAN</div>

      <div className='container mt-1'>
        <small>Select Type</small>
        <div className='italic-line w-100'></div>
      </div>

        {/* PLANS */}
        <div>
          <div className='container'>
            <div className='mx-auto text-center p-2'>
              <button className='but bg-light mx-2'>All</button>
              <button className='but bg-light mx-2 sme'>CG</button>
              <button className='but bg-light mx-2 sme2'>DG</button>
              <button className='but bg-light mx-2 gifting'>COOL</button>
            </div>
          </div>



        {/* Plans GB */}
          <div className='mx-auto text-center p-3'>
            <button className='btn smeCenter p-2 text-light mt-1'>CG 100.00 MB - 1 Week - ₦23</button><br />

            <button className='btn smeCenter p-2 text-light mt-3'>CG 300.0MB - 1 MONTH - ₦77</button><br />

            <button className='btn smeCenter p-2 text-light mt-3'>CG 500.0MB - 1 MONTH - ₦115</button><br />

            <button className='btn smeCenter p-2 text-light mt-3'>CG 1.0.GB - 1 MONTH - 230</button><br />

            <button className='btn smeCenter p-2 text-light mt-3'>CG 2.0.GB - 1 MONTH - 460</button><br />

            <button className='btn smeCenter p-2 text-light mt-3'>CG 5.0.GB - 1 MONTH - 1150</button><br />

            <button className='btn smeCenter p-2 text-light mt-3'>CG 10.0.GB - 1 MONTH - 2300</button><br />

            <button className='btn smeCenter p-2 text-light mt-3'>CG 15.0.GB - 1 MONTH - 3450</button><br />

            <button className='btn smeCenter p-2 text-light mt-3'>CG 20.0.GB - 1 MONTH - 4600</button><br />

            <button className='btn smeCenter p-2 text-light mt-3'>CG 100.0MB - 7days - 80</button><br />

          </div>
        </div>
      </div>
    </>
  );
}

export default AirtelPlans;
