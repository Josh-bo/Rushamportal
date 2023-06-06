import React from 'react';
import SideScroll from './SideScroll';

const BuyData = () => {
  return (
    <>
      <div>
        <nav className='dataBar p-2 d-flex'>
                <div>
                    <SideScroll/>
                </div>

                <div className='mt-3 text-light text-center mx-auto'>
                    <b className='me-5 pe-5'>Welcome</b>
                </div>
            </nav>

            <section>
                <div className='container mx-auto text-center mt-5 pt-5 w-75'>
                    <input type="number" name="" id="" className='form-control text-center' />
                    <button className='btn mt-4 w-100 card-color text-light'>SUBMIT</button>
                </div>
            </section>

            <section className='mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-3 col-md-6 col-lg-3'>
                           
                        </div>
                    </div>
                </div>
            </section>
      </div>
    </>
  );
}

export default BuyData;
