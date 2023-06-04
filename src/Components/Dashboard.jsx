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
                <p><b className='fs-5 balance'>Wallet Balance :</b> <br /> ₦ <b>3,000</b></p>
              </div>

              <div className='col-6 mt-1 mx-auto text-center'>
                <p><b className='fs-5 balance'>Total Transactions :</b> <br /> ₦ <b>0</b></p>
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
            <div className='p-2' style={{background:"#C4C6C9"}}>
              <div className='container text-center'>
                <p className='What text-start'>What will you like to do</p>
                <div className='row'>
                  <div className='col-sm-12 col-md-6 col-lg-4'>
                    <div className='row'>
                      <div className='col-6 mt-2'>
                        <div className='bg-light zon rounded-2 text-danger p-1 pt-2'>
                          <span className='card-title'>Airtime To Cash</span><br />
                          <span className='text-dark card-text'>Instant convert your airtime to cash </span>
                        </div>
                      </div>
                      <div className='col-6 mt-2'>
                        <div className='bg-light rounded-2 text-danger p-1 pt-2'>
                          <span className='card-title'>Airtime To Cash</span><br />
                          <span className='text-dark card-text'>Instant convert your airtime to cash </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-sm-12 col-md-6 col-lg-4'>
                    <div className='row'>
                      <div className='col-6 mt-2'>
                        <div className='bg-light rounded-2 text-danger p-1 pt-2'>
                          <span className='card-title'>Airtime To Cash</span><br />
                          <span className='text-dark card-text'>Instant convert your airtime to cash </span>
                        </div>
                      </div>
                      <div className='col-6 mt-2'>
                        <div className='bg-light rounded-2 text-danger p-1 pt-2'>
                          <span className='card-title'>Airtime To Cash</span><br />
                          <span className='text-dark card-text'>Instant convert your airtime to cash </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className='col-sm-12 col-md-6 col-lg-4'>
                    <div className='row'>
                      <div className='col-6 mt-2'>
                        <div className='bg-light rounded-2 text-danger p-1 pt-2'>
                          <span className='card-title'>Airtime To Cash</span><br />
                          <span className='text-dark card-text'>Instant convert your airtime to cash </span>
                        </div>
                      </div>
                      <div className='col-6 mt-2'>
                        <div className='bg-light rounded-2 text-danger p-1 pt-2'>
                          <span className='card-title'>Airtime To Cash</span><br />
                          <span className='text-dark card-text'>Instant convert your airtime to cash </span>
                        </div>
                      </div>
                    </div>
                  </div>




                  {/* <div className='col-3 bg-light rounded mx-auto text-center' style={{width:"160px"}}>
                    <div>
                      <p>Airtime to Cash</p>
                      <p>Airtime to Cash</p>
                      <p>Airtime to Cash</p>
                    </div>
                  </div> */}
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
