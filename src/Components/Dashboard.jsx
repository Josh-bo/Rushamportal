import React from 'react';
import SideScroll from './SideScroll';
import TransactionHistory from './TransactionHistory';

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
                <p><b className='fs-5 balance'>Wallet</b> <br /> ₦ <b>3,000</b></p>
              </div>

              <div className='col-6 mt-1 mx-auto text-center'>
                <p><b className='fs-5 balance'>Deals</b> <br /><b>0</b></p>
              </div>
            </div>
          </div>
          </div>

        <div className='container text-center mb-2'>
          <div className='row'>
            <div className='col-5 mx-auto'>
              <button className='btn btn-warning'>Add Funds</button>
            </div>

            <div className='col-5 mx-auto'>
              <button className='btn btn-dark'>Transfer</button>
            </div>
          </div>
        </div>
        {/* Line in between */}
          <div className=''>
            <div className='p-2 pb-5 pt-5' style={{background:"#C4C6C9"}}>
              <div className='container text-center'>
                <p className='What text-start'>What will you like to do</p>
                <div className='row'>
                  <div className='col-sm-12 col-md-6 col-lg-4'>
                    <div className='row'>
                      <div className='col-6 mt-2'>
                        <div className='bg-light zon rounded-2 text-danger p-1 pt-2'>
                          <span className='card-title'>Airtime To Cash</span><br />
                          <span className='text-dark card-text'>Instant convert your airtime to cash at a cheaper rate.</span>
                        </div>
                      </div>
                      <div className='col-6 mt-2'>
                        <div className='bg-light zon rounded-2 text-danger p-1 pt-2'>
                          <span className='card-title'>Data TopUp</span><br />
                          <span className='text-dark card-text'>Buy data at the cheaper rates, available on all networks </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-sm-12 col-md-6 col-lg-4'>
                    <div className='row'>
                      <div className='col-6 mt-2'>
                        <div className='bg-light zon rounded-2 text-danger p-1 pt-2'>
                          <span className='card-title'>Airtime TopUp</span><br />
                          <span className='text-dark card-text'>Buy airtime for networks at cheaper rates and lasting one.</span>
                        </div>
                      </div>
                      <div className='col-6 mt-2'>
                        <div className='bg-light zon rounded-2 text-danger p-1 pt-2'>
                          <span className='card-title'>Pay Bills</span><br />
                          <span className='text-dark card-text pt-3'>Make bills payment with no service fee at a better time .</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className='col-sm-12 col-md-6 col-lg-4'>
                    <div className='row'>
                      <div className='col-6 mt-2'>
                        <div className='bg-light zon rounded-2 text-danger p-1 pt-2'>
                          <span className='card-title'>Make Money (Referral)</span><br />
                          <span className='text-dark card-text'>Refer your family and friends and earn.</span>
                        </div>
                      </div>
                      <div className='col-6 mt-2'>
                        <div className='bg-light zon rounded-2 text-danger p-1 pt-2'>
                          <span className='card-title'>Channels Subscription</span><br />
                          <span className='text-dark card-text'>Instant convert your airtime to cash.</span>
                        </div>
                      </div>
                    </div>
                  </div>




               {/* Transaction Section */}
               <TransactionHistory/>
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
