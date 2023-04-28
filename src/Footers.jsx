import React from 'react';

const Footers = () => {
  return (
    <>
        {/* Text cards */}
      <section className='mt-5 p-2'>
          <div className='container-fluid border rounded p-3'>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-3 mx-auto text-center mt-2'>
                    <b>Products</b>
                    <p className='mt-3'><a href="" className='nav-link links'>Airtime to cash</a></p>
                    <p className='mt-2'><a href="" className='nav-link links'>Naira Pin</a></p>
                    <p className='mt-2'><a href="" className='nav-link links'>Data Top-up</a></p>
                    <p className='mt-2'><a href="" className='nav-link links'>Data Top-up</a></p>
                    <hr />
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3 mx-auto text-center mt-2'>
                    <b>Company</b>
                    <p className='mt-3'><a href="" className='nav-link links'>About</a></p>
                    <p className='mt-2'><a href="" className='nav-link links'>Our Blog</a></p>
                    <p className='mt-2'><a href="" className='nav-link links'>Privacy policy</a></p>
                    <p className='mt-2'><a href="" className='nav-link links'>Term of Service</a></p>
                    <hr />
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3 mx-auto text-center mt-2'>
                    <b>Developers</b>
                    <p className='mt-3'><a href="" className='nav-link links'>API Reference</a></p>
                    <p className='mt-2'><a href="" className='nav-link links'>Documentation</a></p>
                    <p className='mt-2'><a href="" className='nav-link links'>Libraries</a></p>
                    <p className='mt-2 '><a href="" className='nav-link links'></a></p>
                    <hr />
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3 mx-auto text-center'>
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
              <div className='text-end'>JOSH - BAM</div>
              </div>
          </div>
      </section>
    </>
  );
}

export default Footers;
