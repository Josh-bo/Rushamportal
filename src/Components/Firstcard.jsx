import React from 'react';
import phone from '../assets/phone.PNG'
import handphone from '../assets/handphone.PNG'
import globe from '../assets/globe.PNG'
import check from '../assets/check.PNG'
import cards from '../assets/card.PNG'
import moves from '../assets/move.PNG'

const Firstcard = () => {
  return (
    <>
      <div className='container-fluid mt-5 pt-2 ps-5 pe-5'>
          <div className='row'>
              <div className='col-sm-12 col-md-6 col-lg-3 mt-3 mx-auto cardbg rounded text-center p-3'>
                  <div>
                        <img src={phone} alt="" />
                    </div>
                  <b className='title'>Instant Airtime to cash</b>
                  <p>Convert your airtime to cash in seconds using the new and improved Airtime to cash service.</p>
              </div>

              <div className='col-sm-12 col-md-6 col-lg-3 mt-3 mx-auto cardbg rounded text-center p-3'>
                  <div>
                        <img src={handphone} alt="" />
                    </div>
                  <b className='title'>Airtime Topup</b>
                  <p>Purchase airtime for MTN, Glo, 9mobile & Airtel at the best possible / discounted rates.</p>
              </div>

              <div className='col-sm-12 col-md-6 col-lg-3 mt-3 mx-auto cardbg rounded text-center p-3'>
                  <div>
                        <img src={globe} alt="" />
                    </div>
                  <b className='title'>Data Purchase</b>
                  <p>We offer the best rates on data purchase for all available networks in Nigeria.</p>
              </div>

              <div className='col-sm-12 col-md-6 col-lg-3 mt-3 mx-auto cardbg rounded text-center p-3'>
                  <div>
                        <img src={check} alt="" />
                    </div>
                  <b className='title'>Bill Payments</b>
                  <p>Pay for your Tv/Cable (Dstv, Gotv, etc.), Internet, Electricity & other merchants using the Rusham app.</p>
              </div>

              <div className='col-sm-12 col-md-6 col-lg-3 mt-3 mx-auto cardbg rounded text-center p-3'>
                  <div>
                        <img src={cards} alt="" />
                    </div>
                  <b className='title'>Airtime Payments</b>
                  <p>Send and receive payments, pay bills & Receive & send cash using Rusham.</p>
              </div>

              <div className='col-sm-12 col-md-6 col-lg-3 mt-3 mx-auto cardbg rounded text-center p-3'>
                  <div>
                        <img src={moves} alt="" />
                    </div>
                  <b className='title'>Send & Receive Money</b>
                  <p>With Rusham, you can send & receive money with ease. Send money to bank, merchants & other users instantly.</p>
              </div>

          {/* WHY RUSHAM */}
          <section className='mt-5 pt-5'>
            <div className='text-center'>
              <div className='fs-1 why w-50 mx-auto'>Why Rusham ?</div>
              <div className='to-make'><b>To make transaction more <span className="text-danger">Easier</span> and <span className="text-danger">Faster</span>.</b></div>
            </div>
          </section>

          </div>
      </div>
    </>
  );
}

export default Firstcard;
