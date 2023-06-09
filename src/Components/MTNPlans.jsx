import React from 'react';

const MTNPlans = () => {
  return (
    <>
      <div>
        <div className='balD text-light p-3 fs-5 mx-auto text-center '>MTN DATA PLAN</div>

      <div className='container mt-1'>
        <small>Select Type</small>
        <div className='italic-line w-100'></div>
      </div>

        {/* PLANS */}
        <div>
          <div className='container'>
            <div className='mx-auto text-center p-2'>
              <button className='but bg-light mx-2'>All</button>
              <button className='but bg-light mx-2 sme'>SME</button>
              <button className='but bg-light mx-2 cpt'>CPT</button>
              <button className='but bg-light mx-2 gifting'>GIFTING</button>
            </div>
          </div>



        {/* Plans GB */}
          <div className='mx-auto text-center p-3'>
          
            <button className='btn smeCenter p-2 text-light mt-3'>MTN SME 1.0GB - 30 days - ₦216</button><br />

            <button className='btn smeCenter p-2 text-light mt-3'>MTN SME 2.0GB - 30 days - ₦432</button><br />

            <button className='btn smeCenter p-2 text-light mt-3'>MTN SME 3.0GB - 30 days - ₦648</button><br />

            <button className='btn smeCenter p-2 text-light mt-3'>MTN SME 5.0GB - 30 days - ₦1080</button><br />

            <button className='btn smeCenter p-2 text-light mt-3'>MTN SME 10.0GB - 30 days - ₦2160</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MTNPlans;
