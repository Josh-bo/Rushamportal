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
        </div>
      </>
    </>
  );
}

export default Dashboard;
