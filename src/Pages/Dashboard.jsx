import React from 'react';
import SideScroll from '../Components/SideScroll';
import TransactionHistory from '../Components/TransactionHistory';
import axios from 'axios';

const Dashboard = () => {

const getIndexBack = localStorage.getItem("usersIndex");
const index = Number(getIndexBack); // Convert the string to a number

// const endpoint = "http://localhost:8000/user/getMembers";
const endpoint = "https://my-vtu-portal-backend.vercel.app/user/getMembers";

axios
  .get(endpoint)
  .then((result) => {
    const getResult = result.data;

    if (Array.isArray(getResult) && index >= 0 && index < getResult.length) {
      const userFullName = getResult[index].fullName;
      const userBalance = getResult[index].balance;
      // console.log(user);
      disName.innerHTML = userFullName;
      displayBalance.innerHTML = Number(userBalance);
      console.log(userBalance);
      // Display user details here
    } else {
      console.log("Invalid index or data structure.");
    }
  })
  .catch((err) => {
    console.log(err);
  });


  return (
    <>
      <>
        <div>

          <nav className='nav-bg p-2 d-flex'>
            <div>
              <SideScroll/>
            </div>

            <div className='mt-3 text-light text-center mx-auto'>
              <b className='me-5 pe-5'>Welcome, <span id='disName'></span></b>
            </div>
          </nav>
        
          <div className='card-bg'>
            <div className='container rounded-2 text-dark'>
                <div className='row'>

                  <div className='col-sm-12 col-md-6 col-lg-3 mx-auto text-center mt-2 shadow-lg'>
                    <div className='card card-text border-0 fs-5 pt-2'>
                      <div><span>₦</span> <span id='displayBalance'></span></div>
                      <p className='mt-2'>BALANCE</p>
                    </div>
                  </div>

                  <div className='col-sm-12 col-md-6 col-lg-3 mx-auto text-center mt-2 shadow-lg'>
                    <div className='card card-text border-0 fs-5 pt-2'>
                      <div>0</div>
                      <p className='mt-2'>TODAY'S TRANSACTIONS</p>
                    </div>
                  </div>

                  <div className='col-sm-12 col-md-6 col-lg-3 mx-auto text-center mt-2 shadow-lg'>
                    <div className='card card-text border-0 fs-5 pt-2'>
                      <div>0</div>
                      <p className='mt-2'>TOTAL TRANSACTIONS</p>
                    </div>
                  </div>

                  <div className='col-sm-12 col-md-6 col-lg-3 mx-auto text-center mt-2 shadow-lg'>
                    <div className='card card-text border-0 fs-5 pt-2'>
                      <div>0</div>
                      <p className='mt-2'>TOTAL SALES</p>
                    </div>
                  </div>
                </div>

            </div>
            
          {/* Transaction History */}
         <TransactionHistory/>
          </div>  
        </div>
      </>
    </>
  );
}

export default Dashboard;
