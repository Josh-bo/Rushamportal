import React from 'react';
import { Link } from 'react-router-dom';

const MTNPlans = () => {
  return (
    <>
      <div>
        <div className='balD text-light p-3 fs-5 mx-auto text-center '>
          MTN DATA PLAN</div>

            <div className='back text-light fs-5 ms-3 mt-1'>
              <Link to="/" className='nav-link'>
                  <i class="ri-arrow-left-line"></i>
              </Link>
            </div>

      <div className='container mt-1'>
        <small>Select Type</small>
        <div className='italic-line w-100'></div>
      </div>

        {/* PLANS */}
        <div>
          <div className='AllMtnPlan'>
            <div className='row p-2'>
              <div className='d-flex'>
                <button className='but bg-light mx-2 all'>All</button>
                <button className='but bg-light mx-2 all'>SME</button>
                <button className='but bg-light mx-2 all'>CPT</button>
              </div>
            </div>


            {/* <div className='mx-auto text-center p-2 d-flex'>
              <button className='but bg-light mx-2 all'>All</button>
              <button className='but bg-light mx-2 sme'>SME</button>
              <button className='but bg-light mx-2 sme2'>SME 2</button>
              <button className='but bg-light mx-2'>CPT</button>
              <button className='but bg-light mx-2 gifting'>GIFTING</button>
            </div> */}
          </div>



        {/* Plans GB */}
        <div className='row'>
          <div className='mx-auto text-center'>
            <button className='btn smeCenter p-2 text-light mt-1'>MTN SME 0.5GB - 30 days - ₦109</button><br />

            <button className='btn smeCenter p-2 text-light mt-3'>MTN SME 1.0GB - 30 days - ₦216</button><br />

            <button className='btn smeCenter p-2 text-light mt-3'>MTN SME 2.0GB - 30 days - ₦432</button><br />

            <button className='btn smeCenter p-2 text-light mt-3'>MTN SME 3.0GB - 30 days - ₦648</button><br />

            <button className='btn smeCenter p-2 text-light mt-3'>MTN SME 5.0GB - 30 days - ₦1080</button><br />

            <button className='btn smeCenter p-2 text-light mt-3'>MTN SME 10.0GB - 30 days - ₦2160</button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default MTNPlans;
