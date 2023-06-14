import React from 'react';

const ReturnToTop = () => {
  return (
    <>
        <a href="#Up">
          <div className='balD text-light returnTop fixed-bottom rounded mb-4 text-center'>
            <div className='p-1'>
            <i className="ri-arrow-up-fill"></i>
            </div> 
          </div>
        </a>
    </>
  );
}

export default ReturnToTop;
