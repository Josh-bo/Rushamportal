import React from 'react';
import { Link } from 'react-router-dom';

const ReturnToTop = () => {
  return (
    <>
    <a href="" id='Up'>
        
      <div className='balD text-light returnTop fixed-bottom rounded mb-4 text-center'>
        <div className='p-1'>
        <i class="ri-arrow-up-fill"></i>
        </div> 
      </div>
    </a>
    </>
  );
}

export default ReturnToTop;
