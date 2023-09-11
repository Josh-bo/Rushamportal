import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "../Components/TopNav";
import logo from "../assets/rushlogo.png";

const Create = () => {
  const [fullName, setFullName] = useState("");
  const [email, setUserMail] = useState("");
  const [phoneNumber, setUserPhoneNumber] = useState("");
  const [password, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  const submitDetails = () => {
    setIsLoading(true);
    setMessage("");

    let UserDetails = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };

    // console.log(email);

    const sliceEmail = email
    const last10Letters = sliceEmail.slice(-10);
    let doneEmail = last10Letters
    console.log(doneEmail);


    if(userFullName.value == "" || userEmail.value == "" || userPhoneNumber.value == "" || userPassword.value == ""){
      // alert("Empty")
      displayError.innerHTML = `Please Enter All Fields Correctly`
      // displayError.style.color = "Red"
      document.getElementById("displayError").className = "alert alert-danger"

      setTimeout(() => {
        displayError.innerHTML = ""
      document.getElementById("displayError").className = ""
      }, 3000);
      
      setIsLoading(false);
    }else if(doneEmail != "@gmail.com"){
      displayError.innerHTML = `Incorrect Mail !`
      // displayError.style.color = "Red"
      document.getElementById("displayError").className = "alert alert-danger"

      setTimeout(() => {
        displayError.innerHTML = ""
      document.getElementById("displayError").className = ""
      }, 3000);
      setIsLoading(false);
    }
    else{
     const findMails = "http://localhost:8000/user/getMembers";
     axios.get(findMails)
     .then((response) => {
       // Handle the successful response here
      //  console.log(response.data);
       setIsLoading(false);

       let getMailBack = response.data
       getMailBack.find((item, i) => {
       let initialEmail = item.email
        
        if(email == initialEmail){
          displayError.innerHTML = "Email already exists"
          document.getElementById("displayError").className = "alert alert-danger"
          setTimeout(() => {
            displayError.innerHTML = ""
          document.getElementById("displayError").className = ""
          }, 3000);
        }else{
        const endpoint = "http://localhost:8000/user/postMembers";
          axios
          .post(endpoint, UserDetails)
          .then((response) => {
            console.log("Response received:", response.data);
            setMessage("");
            if (response.data.status) {
              console.log("Successful registration");
              setFullName("");
              setUserMail("");
              setUserPhoneNumber("");
              setUserPassword("");
              setMessage("Registration successful.");
              
              
          displayError.innerHTML = "Registration successful."    
          document.getElementById("displayError").className = "alert alert-success";

          // setIsLoading(true);
              setTimeout(() => {
                displayError.innerHTML = ""
              document.getElementById("displayError").className = ""
              navigate('/login')
              }, 1000);
            } else {
              console.log("Registration failed");
            }
          })
          .catch((err) => {
            setIsLoading(false);
            console.error("Error:", err);
          });
        }
       })
     })
     .catch((error) => {
       console.error("Error:", error);
     });   
   
   

      };
  }

  return (
    <>
      <TopNav />
      <div className="container mt-5 pt-2">
        <div className="row">
          <div className="col-12 mx-auto text-center w-75 border shadow-lg rounded-3 p-2">
            {/* Display loader */}
            <div className="mx-auto text-center loader" id="loaderContainer">
              {isLoading && (
                <div
                  className="loadCon p-5 rounded-5 bg-light shadow-lg"
                  style={{ backgroundColor: "brow" }}
                >
                  {/* Your loader content */}
                  <div className="loadText text-center d-flex">
                    <img src={logo} className="img-fluid" alt="" />
                  </div>
                </div>
              )}
            </div>

            <h4 className=" fs-3 rounded-3 text-muted pt-2"><i>REGISTER ACCOUNT</i></h4>
            <p id="displayError" className=""></p>
            <hr />
            <form>
              <input
                type="text"
                className="form-group form-control mt-3"
                name="userFullName"
                placeholder="Full-name"
                id="userFullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />

              <input
                type="text"
                className="form-group form-control mt-3"
                name="email"
                placeholder="E-mail"
                id="userEmail"
                value={email}
                onChange={(e) => setUserMail(e.target.value)}
              />
              <input
                type="text"
                className="form-group form-control mt-3"
                name="phoneNumber"
                placeholder="Phone Number"
                id="userPhoneNumber"
                value={phoneNumber}
                onChange={(e) => setUserPhoneNumber(e.target.value)}
              />
              <input
                type="password"
                className="form-group form-control mt-3"
                name="userPassword"
                placeholder="Password"
                id="userPassword"
                value={password}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </form>
            <button
              onClick={submitDetails}
              className="btn createBtn text-light w-100 mt-4"
              type="submit"
            >
              <span className="">REGISTER</span>
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
