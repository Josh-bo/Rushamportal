import React from 'react';

const MTNPlans = () => {
  return (
    <>
      <div>
        <div className='balD text-light p-3 fs-5 mx-auto text-center '>MTN DATA PLAN</div>

      <div className='container mt-1'>
        <small><b>Select Type</b></small>
        <div className='italic-line w-100'></div>
      </div>

        {/* PLANS */}
        <div>
          <div className='container'>
            <div className='mx-auto text-center p-2'>
              <button className='but text-light mx-2'>All</button>
              <button className='but text-light mx-2 sme'>SME</button>
              <button className='but text-light mx-2 sme2'>SME 2</button>
              <button className='but text-light mx-2'>CPT</button>
              <button className='but text-light mx-2 gifting'>GIFTING</button>
            </div>
          </div>



        {/* Plans GB */}
          <div className='mx-auto text-center p-3'>
            <button className='btn smeCenter p-2 w-100 text-light mt-1'><b>MTN SME 0.5GB - 30 days - ₦109</b></button>

            <button className='btn smeCenter p-2 w-100 text-light mt-3'><b>MTN SME 1.0GB - 30 days - ₦216</b></button>

            <button className='btn smeCenter p-2 w-100 text-light mt-3'><b>MTN SME 2.0GB - 30 days - ₦432</b></button>

            <button className='btn smeCenter p-2 w-100 text-light mt-3'><b>MTN SME 3.0GB - 30 days - ₦648</b></button>

            <button className='btn smeCenter p-2 w-100 text-light mt-3'><b>MTN SME 5.0GB - 30 days - ₦1080</b></button>

            <button className='btn smeCenter p-2 w-100 text-light mt-3'><b>MTN SME 10.0GB - 30 days - ₦2160</b></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MTNPlans;
