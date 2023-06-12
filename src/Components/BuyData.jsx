import React from "react";
import SideScroll from "./SideScroll";

const BuyData = () => {
    
    
    
    
    const submitNumber = () => {
        // console.log(phoneNumber.value);
        
        fetch('http://localhost:2000/api/data')
          .then(response => response.json())
          .then(getData => {
            // console.log(getData.MTN);// Verify the actual value of data
      
            if(getData == ""){
                alert('Invalid')
            }else{
                // alert('Success')

                fetch('http://localhost:2000/api/data')
          .then(response => response.json())
          .then(data => {
                // console.log(data.MTN);
                let MTN = data.MTN
                console.log(MTN);

                MTN.find((item, i) => {
                    // console.log(item.Number);


                    if(phoneNumber.value === item.Number){
                        alert("phoneNumber is correct")
                        Swal.fire({
                            title: 'The network is MTN',
                            showClass: {
                              popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                              popup: 'animate__animated animate__fadeOutUp'
                            }
                          })
                    }else{
                        // alert("phoneNumber is Incorrect")
                    }
                })
          })
            }

            
        //       data.map((item, i) => {
        //         // dis.innerHTML = `${item}`;
        //     dis.innerHTML += `${item}<br>`;
        //   })


            // <------- MTN SETUP ------>

            // MTN.find((item, i) => {
            // console.log(item);
            // // ...

            //     if(String(phoneNumber.value) === item.Number){
            //         console.log("yes");
            //     }else{
            //         console.log("No");
            //     }

        
            //   });
          })
          .catch(error => {
            console.log('Error:', error);
          });
    }
    return (
        <>
            <div>
                <nav className="dataBar p-2 d-flex">
                    <div>
                        <SideScroll />
                    </div>

                    <div className="mt-3 text-light text-center mx-auto">
                        <b className="me-5 pe-5">Welcome</b>
                    </div>
                </nav>

                <section>
                    <div className="container mx-auto text-center mt-5 pt-5 w-75">
                        <input
                            type="tel"
                            name="phoneNumber"
                            id="phoneNumber"
                            className='form-control text-center'
                            inputMode="tel"
                            pattern="tel:*"
                            placeholder="Enter number"
                        />
                        <button onClick={submitNumber} className="btn mt-4 w-100 card-color text-light">
                            SUBMIT
                        </button>
                    </div>
                </section>

                <section className="mt-5">
                    <div className="">
                        <div className="row">
                            <div
                                className="col-sm-4 col-md-6 col-lg-3 mx-auto text-center shadow-lg bg-danger text-light pt-4 rounded-3"
                                style={{ width: "80px" }}
                            >
                                <div>AIRTEL</div>
                            </div>

                            <div
                                className="col-sm-4 col-md-6 col-lg-3 mx-auto text-center shadow-lg bg-warning rounded-3 p-4 text-light"
                                style={{ width: "80px" }}
                            >
                                <div>MTN</div>
                            </div>

                            <div
                                className="col-sm-4 col-md-6 col-lg-3 mx-auto text-center shadow-lg bg-success rounded-3 p-4 text-light"
                                style={{ width: "80px" }}
                            >
                                <div>GLO</div>
                            </div>
                        </div>
                    </div>
                </section>


                <div id="dis"></div>
            </div>
        </>
    );
};

export default BuyData;
