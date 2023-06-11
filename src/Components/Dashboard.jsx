import React from 'react';
import TransactionHistory from './TransactionHistory';
import SideBar from './SideBar';

const Dashboard = () => {
  return (
    <>
      <>
        <div>

          <nav className='nav-bg p-2 d-flex'>
            <div>
              <SideBar/>
            </div>

            <div className='mt-3 text-light text-center mx-auto'>
              <b className='me-5 pe-5'>Welcome</b>
            </div>
          </nav>
        
          <div className='card-bg'>
            <div className='container rounded-2 text-dark'>
                <div className='row'>

                  <div className='col-sm-12 col-md-6 col-lg-3 mx-auto text-center mt-2 shadow-lg'>
                    <div className='card card-text border-0 fs-5 pt-2'>
                      <div><span>₦</span> 3,000</div>
                      <p className='mt-2'>BALANCE</p>
                    </div>
                  </div>

                  <div className='col-sm-12 col-md-6 col-lg-3 mx-auto text-center mt-2 shadow-lg'>
                    <div className='card card-text border-0 fs-5 pt-2'>
                      <div>0</div>
                      <p className='mt-2'>TODAY'S TRANSACTIONS</p>
                    </div>
                  </div>

                  <div className='col-sm-12 col-md-6 col-lg-3 mx-auto text-center mt-2 shadow-lg'>
                    <div className='card card-text border-0 fs-5 pt-2'>
                      <div>0</div>
                      <p className='mt-2'>TOTAL TRANSACTIONS</p>
                    </div>
                  </div>

                  <div className='col-sm-12 col-md-6 col-lg-3 mx-auto text-center mt-2 shadow-lg'>
                    <div className='card card-text border-0 fs-5 pt-2'>
                      <div>0</div>
                      <p className='mt-2'>TOTAL SALES</p>
                    </div>
                  </div>
                </div>

            </div>
          {/* Transabtion History */}
         <TransactionHistory/>
          </div>  
        </div>
      </>
    </>
  );
}

export default Dashboard;
