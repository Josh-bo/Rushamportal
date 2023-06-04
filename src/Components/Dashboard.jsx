import React from 'react';
import SideScroll from './SideScroll';

const Dashboard = () => {
  return (
    <>
      <>
        <div>

          <nav className='nav-bg p-2 d-flex'>
            <div>
              <SideScroll/>
            </div>

            <div className='mt-3 text-light text-center mx-auto'>
              <b className='me-5 pe-5'>Welcome</b>

            </div>
            
          </nav>

        <div className='p-2'>
          <div className='container-fluid nav-bg mt-2 text-light rounded'>
            <div className='row'>
              <div className='col-6 mt-1 mx-auto text-center'>
                <p><b className='fs-5 balance'>CURRENT BALANCE :</b> <br /> ₦ <b>3,000</b></p>
              </div>

              <div className='col-6 mt-1 mx-auto text-center'>
                <p><b className='fs-5 balance'>PREVIOUS BALANCE :</b> <br /> ₦ <b>2,300</b></p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Dashboard;
