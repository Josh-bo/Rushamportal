import React from 'react';

const Footers = () => {
  return (
    <>
        {/* Text cards */}
      <section className='mt-5'>
          <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-3 mx-auto text-end'>
                    <b>Products</b>
                    <p className='mt-3'><a href="" className='nav-link links'>Airtime to cash</a></p>
                    <p className='mt-2'><a href="" className='nav-link links'>Naira Pin</a></p>
                    <p className='mt-2'><a href="" className='nav-link links'>Data Top-up</a></p>
                    <p className='mt-2'><a href="" className='nav-link links'>Data Top-up</a></p>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3 mx-auto text-end'>
                    <b>Company</b>
                    <p className='mt-3'><a href="" className='nav-link links'>About</a></p>
                    <p className='mt-2'><a href="" className='nav-link links'>Our Blog</a></p>
                    <p className='mt-2'><a href="" className='nav-link links'>Privacy policy</a></p>
                    <p className='mt-2'><a href="" className='nav-link links'>Term of Service</a></p>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3 mx-auto text-end'>
                    <b>Developers</b>
                    <p className='mt-3'><a href="" className='nav-link links'>API Reference</a></p>
                    <p className='mt-2'><a href="" className='nav-link links'>Documentation</a></p>
                    <p className='mt-2'><a href="" className='nav-link links'>Libraries</a></p>
                    {/* <p className='mt-2'><a href="" className='nav-link links'>Term of Service</a></p> */}
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3 mx-auto text-end'>
                    <b>Social Media</b>
                    <p className='mt-3'><a href="" className='nav-link links'>API Reference</a></p>
                    <p className='mt-2'><a href="" className='nav-link links'>Documentation</a></p>
                    <p className='mt-2'><a href="" className='nav-link links'>Libraries</a></p>
                    <p className='mt-2'><a href="" className='nav-link links'>Term of Service</a></p>
                </div>
            </div>
          </div>
      </section>


      {/* Last Footer */}
      <section className='mb-3'>
          <div className='container-fluid'>
              <div className='text-center p-4'>
                  <div className='last p-4'>&copy;2023 . Rusham Technology Ltd.</div>
              </div>
          </div>
      </section>
    </>
  );
}

export default Footers;
