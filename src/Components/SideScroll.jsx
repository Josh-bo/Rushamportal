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

                <div class="offcanvas offcanvas-start w-75" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div class="offcanvas-header text-center nav-bg">
                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                            <img src={rush} alt=""  width={"140%"}  height={"37px"}/>
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body p-0 text-light">
                        <div className='mt-3'>
                            <div className='balD p-2'>
                                <div className='mx-auto text-center pt-4 pb-3'>
                                    <span className='balance'>BALANCE</span> <br />
                                    <span>₦ 3,000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Remaining Actions */}
                <div>
                    <div className=''>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideScroll;
