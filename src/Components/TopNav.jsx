import React from 'react';
import logo from '../assets/Capture-removebg-preview (1).PNG'


const TopNav = () => {
  return (
    <>
    <div className=''>
      <div className='text-center'>
          <div class="dropdown">
            <div className='' type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={logo} alt="" width={"300px"} />
            </div>
    
      <ul class="dropdown-menu down text-center w-100 bg-">
        <li><a class="dropdown-item" href="#">Home</a></li>
        <li><a class="dropdown-item" href="#">About</a></li>
        <li><a class="dropdown-item" href="#">Contact</a></li>
        <li><a class="dropdown-item" href="#"><button className='btn btn-outline-info w-50'>LOGIN</button></a></li>
        <li><a class="dropdown-item" href="#"><button className='btn btn-outline-success w-50'>Create account</button></a></li>
      </ul>
    </div>

      </div>
    </div>

    </>
  );
}

export default TopNav;
