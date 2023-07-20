import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import TopNav from "./TopNav";

    const Create = () => {
      const [fullName, setfullName] = useState("")
      const [userName, setuserName] = useState("")
      const [phoneNumber, setphoneNumber] = useState("")
      const [password, setpassword] = useState("")
      const [message, setmessage] = useState("")
      let navigate = useNavigate()
  
      const submitDetails = () => {
          let details = {
              fullName: fullName,
              userName: userName,
              userPhoneNumber: phoneNumber,
              password: password
          }
          const endpoint = "https://my-vtu-portal-backend.vercel.app/user/student"
          // console.log(details);
          axios.post(endpoint,details)
          .then((response)=>{
              console.log(response.data);
              setmessage(response.data.message)
              if(response.data.status){
                  setfullName("")
                  setuserName("")
                  setphoneNumber("")
                  setpassword("")
                  navigate('/login')
              }
          })
          .catch((err)=>{
              setmessage(err)
          })
        }

        return (
          <>
      <TopNav />
      <div className="container mt-5 pt-2">
        <div className="row">
          <div className="col-12 mx-auto text-center w-75 border rounded p-2">
          {
                message ? <div className="alert alert-success text-center">{message}</div> : null
            }
            <h4 className=" fs-3 rounded-3 text-secondary"><i className="">REGISTER ACCOUNT</i></h4>
            <hr />
         {/* {isError && <div className='alert alert-danger'>{message}</div>} */}
            <form>
              <input
                // onChange={onChange}
                type="text"
                className="form-group form-control mt-3"
                name="fullName"
                placeholder="Full-name"
                id=""
                onChange={(e) => setfullName(e.target.value)}

              />
              <input
                // onChange={onChange}
                type="text"
                className="form-group form-control mt-3"
                name="userName"
                placeholder="User Name"
                id=""
                onChange={(e) => setuserName(e.target.value)}
              />
              <input
                // onChange={onChange}
                type="text"
                className="form-group form-control mt-3"
                name="email"
                placeholder="E-mail"
                id=""
              />
              <input
                // onChange={onChange}
                type="text"
                className="form-group form-control mt-3"
                name="phoneNumber"
                placeholder="Phone Number"
                id=""
                onChange={(e) => setphoneNumber(e.target.value)}

              />
              <input
                // onChange={onChange}
                type="password"
                className="form-group form-control mt-3"
                name="password"
                placeholder="Password"
                id=""
                onChange={(e) => setpassword(e.target.value)}

              />
            </form>
            <button
             onClick={submitDetails}
              className="btn createBtn text-light w-100 mt-4"
              type="submit"
            >
              CREATE
            </button>
            <Link to="/login" className="text-dark">
              <input type="checkbox" className="mx-2 mt-4" name="" id="" />I
              already have an account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;