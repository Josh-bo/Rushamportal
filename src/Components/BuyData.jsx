import React from "react";
import SideScroll from "./SideScroll";

const BuyData = () => {     
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


                <div className="container">
        <div className="row">
            <div className="mx-auto text-center mt-5 pt-3">
                <div className="mb-4" style={{color:"#ab2923", fontFamily:"monospace"}}>Verify a Phone Number here</div>
             <div className="shift">
                <div className="d-flex">
                    <div className="p-2 dColor text-light codee">+234</div>
                    <input type="text" name="" id="getNumber" className="form-control text-center"/>
                </div>

                <div className="mx-auto text-center">
                    <i className="text-danger text-center mx-auto mt-3" style={{fontSize:"13px"}} id="display"></i><br/>
                    <button className="btn dColor mt-2 w-50 ms-5 text-light" onClick={verify}>Verify</button>
                </div>
             </div>

                <div className="mt-3" id="nameContainer">
                    {/* <div className="confirmNet bg-light shadow-lg rounded-4 p-3">
                        <div className="mb-3;" style={{fontFamily:"monospace"}}>This Phone Number is from <span className="fw-bolder" id="NetId">MTN</span></div>

                        <div className="mt-3">
                            <button className="btn btn-danger mx-1">Cancel</button>
                            <button className="btn text-light mx-1" style={{backgroundColor:"#ab2923"}}>OK</button>
                        </div>
                    </div> */}
                </div>

                
                <div id="sipnnerContainer"></div>
            </div>
        </div>
    </div>

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

const verify = () => {
    if(getNumber.value == ""){
        display.innerHTML = "Please enter a Phone number"
        nameContainer.innerHTML = ``
        
        TimeOut()
    }
    else if(isNaN(Number(getNumber.value))){
        display.innerHTML = "Only Number is allowed!, Texts are prohibited"

        TimeOut()
    }
    else if(getNumber.value.length != 11){
        display.innerHTML = "Phone number must be 11 digits"
        TimeOut()
        nameContainer.innerHTML = ``
    }
    // MTN
    else if(getNumber.value.length == 11){
        let NumberSliced = getNumber.value.slice(0,4)
        console.log(NumberSliced)

        if(NumberSliced == "0803" || NumberSliced == "0806" || NumberSliced == "0703" || NumberSliced == "0706" || NumberSliced == "0810" || NumberSliced == "0813" || NumberSliced == "0814" || NumberSliced == "0816" || NumberSliced == "0903" || NumberSliced == "0906" || NumberSliced == "0904" || NumberSliced == "0704"){
           
            console.log("MTN");

            spinnerFunction()
            setTimeout(() => {
                nameContainer.innerHTML = `
                    <div class="bg-warning rounded-2 w-75 mx-auto text-center p-3">
                        MTN : ${getNumber.value}
                    </div>
                    
                `              
            }, 3000);


            setTimeout(() => {
                window.location = "/MTN"
                // window.location.link
            }, 5000);
        }

        // GLO
        else if(NumberSliced == "0805" || NumberSliced == "0807" || NumberSliced == "0811" || NumberSliced == "0705" || NumberSliced == "0815" || NumberSliced == "0905"){
           
            console.log("GLO");

            spinnerFunction()

            setTimeout(() => {
                nameContainer.innerHTML = `
                    <div class="bg-success rounded-2 w-75 mx-auto text-center text-light p-3">
                        GLO : ${getNumber.value}
                    </div>   
                `
            }, 3000);
        }
          // AIRTEL
    else if(NumberSliced == "0802" || NumberSliced == "0808" || NumberSliced == "0812" || NumberSliced == "0701" || NumberSliced == "0708" || NumberSliced == "0902" || NumberSliced == "0907" || NumberSliced == "0901" || NumberSliced == "0912"){

        console.log("AIRTEL");

        spinnerFunction()
        setTimeout(() => {
                   
            nameContainer.innerHTML = `
            <div class="bg-danger rounded-2 w-75 mx-auto text-center text-light p-3">
            AIRTEL : ${getNumber.value}
            </div> 
            `

        }, 3000);

        setTimeout(() => {
            window.location = "/AIRTEL"
        }, 5000);
    }

    // 9mobile
    else if(NumberSliced == "0809" || NumberSliced == "0817" || NumberSliced == "0818" || NumberSliced == "0908" || NumberSliced == "0909"){

        console.log("9mobile");
           
        spinnerFunction()
        setTimeout(() => {
                   
            nameContainer.innerHTML = `
            <div class="bg-success rounded-2 w-75 mx-auto text-center text-light p-3">
            9mobile : ${getNumber.value}
            </div>
            
            `               
        }, 3000);
     }

    // NTEL
        else if(NumberSliced == "0804"){

            console.log("NTEL");

            spinnerFunction()
            setTimeout(() => {
                   
                nameContainer.innerHTML = `
                <div class="bg-info rounded-2 w-75 mx-auto text-center p-3">
                NTEL : ${getNumber.value}
                </div>
                `       
            }, 3000);
        }

    // SMILE
        else if(NumberSliced == "0702"){

            console.log("SMILE");

            spinnerFunction()
            setTimeout(() => {
                   
                nameContainer.innerHTML = `
                <div class="bg-info rounded-2 w-75 mx-auto text-center p-3">
                SMILE : ${getNumber.value}
                </div>
                `       
            }, 3000);
        }
    
        else{
        display.innerHTML = "Not Found"

        TimeOut()
        }
    }
}


const TimeOut = () => {
    setTimeout(() => {
        display.innerHTML = ""
    }, 3000);
}

const spinnerFunction = () => {
    display.innerHTML = ""
    nameContainer.innerHTML = ``      


    sipnnerContainer.innerHTML = `<div class="spinner-grow text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>`

    setTimeout(() => {
        sipnnerContainer.innerHTML = ""
    }, 3000);
    
}

export default BuyData;
