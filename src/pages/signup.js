import './signup.css';
import 'bootstrap'
import { useState } from 'react'
import axios from 'axios'

// import { useNavigate } from "react-router-dom"




function SignupForm() {
  const[previousModal ,setPreviousModal]=useState(true)
  const [showModal, setShowModal] = useState(false);
  // const [ setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNo:'',
    email: '',
    password: '',
  });

  // const navigate = useNavigate();
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://server-dot-sanjoli-sarees-testenvironment.el.r.appspot.com/register", formData);
      console.log(response.data);
      setShowModal(true);
      console.log("madal1");
      setPreviousModal(false);
      console.log("m2");

      

      
    } catch (error) {
     
      console.log(error.response.data.msg);
        // setErrorMessage(error.response.data.message);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
   
    <>
  {/* <button type="button" className="btn btn-primary"data-bs-toggle="modal"data-bs-target="#exampleModal"data-bs-whatever="@mdo">
    Sign Up
  </button> */}

<br>
</br>
<br></br>


  <a data-bs-toggle="modal"data-bs-target="#exampleModal"data-bs-whatever="@mdo" herf="../pages/login.js">
    Sign Up</a>

    
    {previousModal && (
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          {/* <h3>Let's create your account.</h3> */}
          <button type="button" className="btn-close"data-bs-dismiss="modal"aria-label="Close" />
        </div>
        <div className="modal-body">
          <form
            className="signup-frm "
            id="signup-frm "
            onSubmit={handleSubmit}
           
            method="post"
          >
            <div className="container frm-con">
              <h3>Let's create your account.</h3>
              <h6>Please fill in the details below to sign up</h6>
              <br />
            


              <div className="text-center">
                <input type="text" placeholder="First Name" 
                name="firstName" className="f-name"i d="f-name" required 
                 value={formData.firstName}
                onChange={handleChange}

                 />


                <input type="text"placeholder="Last Name" name="lastName" className="l-name"id="l-name"required
                value={formData.lastName}
                onChange={handleChange}/>
              </div>
             
              <div className="text-center">
                <input type="email" placeholder="abc@gmail.com"name="email" className="email"id="email"required 
                 value={formData.email}
                 onChange={handleChange}
                 />
                <br />
                <br />
              </div>
             
              <div className="text-center">
                <input type="number" placeholder="+91 1234567890"name="mobileNo"className="mob-no" id="mob-no"required
                 value={formData.mobileNo}
                 onChange={handleChange}/>
                <br />
                <br />
              </div>
              {/* <label for="pass"class="pass-lbl"><b>Password<span  style="color:red"> *</span></b></label><br> */}
              <div className="text-center">
                <input type="password"placeholder="Enter Password Here"name="password"className="pass-sign"id="pass" required  
                value={formData.password}
                onChange={handleChange}/>
                <br />
                <br />
              </div>
              {/* <label for="pass" class="pass-comf-lbl"><b>Confirm Password <span  style="color:red"> *</span></b></label><br> */}
              <div className="text-center">
                <input type="password"placeholder="Confirm Password"name="pass"className="pass-sign-confirm"id="pass-sign-confirm"
               />
                <br />
              </div>
              <div className="text-center">
                <button type="submit" className="submit-btn text-center">
                  Sign Up
                </button>
              </div>
              <div className="container ">
                <div className="">
                  <p className="text-center login-link ">
                    Already have an account?{" "}
                    <a href="log_in.html" className="login">
                      LOGIN
                    </a>
                  </p>
                </div>
                <p />
                <div>
                  <p className="text-center">------------- OR ------------ </p>
                </div>
              </div>
              <div className="container">
                <div className="col-md-4" />
                <div className="col-md-4">
                  {/* Google Sign in */}
                  <div className="g-signin2 g-btn" data-onsuccess="onSignIn" />
                </div>
                <div className="col-md-4">
                  <div id="fb-root " />
                  <div
                    className="fb-login-button "
                    data-show-faces="false"
                    data-width={150}
                    data-max-rows={1}
                  />
                </div>
                <div className="col-md-4" />
              </div>
            </div>
          </form>
          {/* <div class="modal-footer"> */}
        </div>                
      </div>
    </div>
  </div>
    )}



    {/* Modal */}
    {showModal && !previousModal && (
      <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
            {/* header */}
              
            </div>
            <div className="modal-body text-center md-body">
            <img src={require("../images/TIick.png")} alt="" />
            <h5 className="modal-title">Account created successfully</h5>
            {/* <FcOk></FcOk> */}
              <p>Please Log In to your account and place an order.</p>
              <button type="button" className=" modal-submit-btn" onClick={() => setShowModal(false)}>Log In </button>
            </div>
            {/* <div className="modal-footer text-center">
             
            </div> */}
          </div>
        </div>
      </div>
               )}
</>

  )
}

export default SignupForm;
