import React, { useState } from 'react';

const MyImageComponent = () => {
    
    return (
            <div>
        <div className='mx-auto text-center loader' id='loaderContainer'>
            <div className='loadCon p-5 bg-light shadow-lg text-muted rounded-5' style={{backgroundColor:"brow"}}>
                <div className='loadText text-center d-flex'>
                    <div className='fs-5 fw-bolder'>R</div>
                    <div className='fs-5 fw-bolder'>U</div>
                    <div className='fs-5 fw-bolder'>S</div>
                    <div className='fs-5 fw-bolder'>H</div>
                    {/* <div className='fs-5 fw-bolder load LL'>L</div> */}
                </div>
            </div>

            {/* <div >
      <div className="container mb-5 pb-5">
      {isLoading ? (
        <p>Loading...</p> // Display a loading message while data is being fetched
      ) : (
        <div className="row">
          {investmentData.map((item) => (
            <div className="col-sm-12 col-md-6 col-lg-3" key={item._id}>
              <div className="mx-auto text-center border mt-4">
                <img src={item.ImageName} alt="" className="w-100" />

                <div className="text-center">
                  <h3 className="mb-3 mt-3 text-muted">Investment</h3>
                  <p className="text-muted mb-0">{item.Description}</p>
                  <b className="fs-3" style={{color:"brown"}}>₦ {item.Amount}</b>
                  <button className="btn text-light my-2 w-100" style={{backgroundColor:"brown"}}> <b>BUY STOCK</b> </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div> */}
        </div>

            {/* <Footer/> */}
        </div>
    );
};

export default MyImageComponent;
