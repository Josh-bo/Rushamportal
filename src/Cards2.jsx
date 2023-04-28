import React from 'react';
import image from './assets/time.PNG'
import secure from './assets/security.PNG'
import same from './assets/same.PNG'
import sup from './assets/sup.PNG'

const Cards2 = () => {
  return (
    <>
      {/* Card 2 */}

      <section className='pt-4'>
      <div className='container-fluid mt-5 pt-2 ps-5 pe-5'>
          <div className='row'>
              <div className='col-sm-12 col-md-6 col-lg-3 mt-3 mx-auto card2 rounded text-center p-3'>
                  <div className='mb-3'>
                        <img src={image} alt="" />
                    </div>
                  <b className='mb-2'>Fast & Reliable.</b>
                  <p className='mt-3'>With experience, we have learnt in the past years to be able to fully optimize our platform for speed and dependability.</p>
              </div>

              <div className='col-sm-12 col-md-6 col-lg-3 mt-3 mx-auto card2 rounded text-center p-3'>
                  <div className='mb-3'>
                        <img src={secure} alt="" />
                    </div>
                  <b className='mb-2'>Security.</b>
                  <p className='mt-3'>Rusham has embraced technology in its operations to ensure that you can peform transactions securely and efficiently.</p>
              </div>
              

              <div className='col-sm-12 col-md-6 col-lg-3 mt-3 mx-auto card2 rounded text-center p-3'>
                  <div className='mb-2'>
                        <img src={same} alt="" />
                    </div>
                  <b className='mb-2'>Seamless Transactions.</b>
                  <p className='mt-3'>Rusham is structured in a manner that makes it easy to use so that you can conveniently access & perform transactions.</p>
              </div>

              <div className='col-sm-12 col-md-6 col-lg-3 mt-3 mx-auto card2 rounded text-center p-3'>
                  <div className='mb-3'>
                        <img src={sup} alt="" />
                    </div>
                  <b className='mb-2'>Customer Support.</b>
                  <p className='mt-3'>Get prompt response to your complaints, issues or enquiries by using any of our available call or social channels.</p>
              </div>

             </div>
            </div>
      </section>
    </>
  );
}

export default Cards2;
