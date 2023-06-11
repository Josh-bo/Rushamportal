import React from 'react';
import rush from "../assets/rushlogo.png";
import { Link } from "react-router-dom";

const SideBar = () => {
  // JavaScript to handle the dropdown menu toggle
  const dropdowns = document.getElementsByClassName('dropdown');

  for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('click', function () {
      this.classList.toggle('active');
      const dropdownContent = this.querySelector('.dropdown-content');
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
      } else {
        dropdownContent.style.display = 'block';
      }
    });
  }

  return (
    <>
        <div
          class="btn border-0 "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <button className="btn">
            <div className="p1 rounded-5 mt-1"></div>
            <div className="p1 rounded-5 mt-1"></div>
            <div className="p1 rounded-5 mt-1"></div>
          </button>
        </div>


        <div
          class="offcanvas offcanvas-start side"
          data-bs-scroll="true"
          tabindex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div class="offcanvas-header text-center scroll-bg">
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
              <img src={rush} alt="" width={"140%"} height={"37px"} />
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body p-0 text-light">
            <div className="mt-1">
              <div className="balD p-2">
                <div className="mx-auto text-center pt-1 pb-1">
                  <span className="balance">BALANCE</span> <br />
                  <span>₦ 3,000</span>
                </div>
              </div>
            </div>

            {/* Remaining Actions */}
            <div class="sidenav text-dark">
            <Link to="/home" className="nav-link text-dark">
                  <div className="mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-house"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                    </svg>
                    <span className="mx-2 list">Home</span>
                  </div>
                </Link>

                <div className="mt-3 ms-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-bar-chart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
                  </svg>
                  <span className="mx-2 list">Services</span>

                  <span class="dropdown">
                      {/* <a href="#">s</a> */}
                    <div class="dropdown-content">
                      <a href="#">Service 1</a>
                      <a href="#">Service 2</a>
                      <a href="#">Service 3</a>
                    </div>
                  </span>
                </div>
            </div>
        </div>
          </div>
    </>
        );
}

        export default SideBar;
