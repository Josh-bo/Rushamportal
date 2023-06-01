import React from 'react';
import rush from "../assets/rushlogo.png";

const SideScroll = () => {
    return (
        <>
            <div>
                <div class="btn border-0 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">

                    <button className='btn'>
                        <div className='p1 rounded-5 mt-1'></div>
                        <div className='p1 rounded-5 mt-1'></div>
                        <div className='p1 rounded-5 mt-1'></div>
                    </button>

                </div>

                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div class="offcanvas-header text-center nav-bg">
                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                            <img src={rush} alt=""  width={"140%"}  height={"37px"}/>
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <p>Try scrolling the rest of the page to see this option in action.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideScroll;
