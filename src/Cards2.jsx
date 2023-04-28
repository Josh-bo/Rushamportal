import React from 'react';
import image from './assets/time.PNG'

const Cards2 = () => {
  return (
    <>
      {/* Card 2 */}

      <section className='mt-5 pt-4'>
          <div className='container-fluid'>
            <div className='row mx-auto text-center'>
                <div className=''><img src={image} alt="image" /></div>
                <div>
                    <b>Fast & Reliable.</b>
                    <p>With experience, we have learnt in the past years to be able to fully optimize our platform for speed and dependability.</p>

                    <div>
                        <a href="" className='nav-link text-danger'>More </a>
                    </div>
                </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default Cards2;
