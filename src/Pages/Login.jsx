import React, { useState } from "react";
import TopNav from "../Components/TopNav";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/rushlogo.png";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  
  const loginFunction = () => {
    setIsLoading(true);
    setMessage("");
    let replaceUserMail = userMail.value;
    let replaceUserPassword = userPassword.value;

  // const findUser = "http://localhost:8000/user/getMembers";
  const findUser = "https://my-vtu-portal-backend.vercel.app/user/getMembers";

axios.get(findUser)
  .then((response) => {
    // Handle the successful response here
    let getUsers = response.data;

    const index = getUsers.findIndex((item) => item.email === replaceUserMail && item.password == replaceUserPassword);

    if (index !== -1) {
      let getIndex = Number(index);
      // console.log(getIndex);

      JSON.stringify(localStorage.setItem('usersIndex', getIndex));
      JSON.stringify(localStorage.setItem('userAuth', "Login"));

      // Assuming that getUserAuth is an array you want to access
      const getUserAuth = response.data; // You may need to fetch this data again if it's not available in the current response

      if (getUserAuth && getIndex < getUserAuth.length) {
        const userAtIndex = getUserAuth[getIndex];
        // console.log(userAtIndex);

        displayError.innerHTML = "Login successful."    
          document.getElementById("displayError").className = "alert alert-success";

          // setIsLoading(true);
              setTimeout(() => {
                displayError.innerHTML = ""
              document.getElementById("displayError").className = ""
              navigate('/dash')
              }, 1000);

      } else {
        displayError.innerHTML = "User not found"
        document.getElementById("displayError").className = "alert alert-danger"
        setTimeout(() => {
          displayError.innerHTML = ""
        document.getElementById("displayError").className = ""
        }, 3000);
        // alert("User not found");
      }
    } else {
      displayError.innerHTML = "User not found"
      document.getElementById("displayError").className = "alert alert-danger"
      setTimeout(() => {
        displayError.innerHTML = ""
      document.getElementById("displayError").className = ""
      }, 3000);
      // alert("User not found");
    }

    setIsLoading(false);
  })
  .catch((error) => {
    // Handle any errors that occurred during the request
    console.error("Error:", error);
  });
}
  return (
    <>
      <TopNav />
      <div className="container mt-5 pt-2">
        <div className="row">
          <div className="col-12 mx-auto text-center w-75 border rounded p-2">
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

            <h4 className=""><i className="text-secondary">LOGIN</i></h4>
            <p id="displayError" className=""></p>
            <hr />
            <form action="#" method="post">
              <input
                type="text"
                className="form-group form-control mt-3"
                name=""
                placeholder="E-mail"
                id="userMail"
              />
              <input
                type="password"
                className="form-group form-control mt-3"
                name=""
                placeholder="Password"
                id="userPassword"
              />
            </form>
            <button
              className="btn text-light w-100 createBtn mt-4"
              type="submit"
              onClick={loginFunction}
            >
              Log In
            </button>
            <Link to="/" className="text-dark">
              <input type="checkbox" className="mx-2 mt-4" name="" id="" />I
              don't have an account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
