import "./login.css";
import "bootstrap";
import React, { useState } from "react";
import axios from "axios";
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import{BsFacebook} from  'react-icons/bs';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [setuser] = useState("")
  




  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://server-dot-sanjoli-sarees-testenvironment.el.r.appspot.com/login", {
        email: email,
        password: password,
        
        
      })
      .then((response) => {
        // Handle success response
        console.log(response.data);
       
      
      })
      .catch((error) => {
        // Handle error response
        console.log(error.response.data.message);
        setErrorMessage(error.response.data.message);
      });
      
     
  };
  
  const handleGoogleLoginSuccess = (response) => {
    console.log(response);
    // Use the response to authenticate the user in your backend
  }
  
  const handleGoogleLoginFailure = (response) => {
    console.log(response);
    // Handle the failure response
  }
  
  const handleFacebookLoginSuccess = (response) => {
    console.log(response);
    // Use the response to authenticate the user in your backend
  }
  const handleFacebookLoginFailure = (response) => {
    console.log(response);
    // Handle the failure response
  }
  if (setuser===true){
      
  }

// function Login() {
  return (
    <>
      
        <button
          type="button"
          className="btn btn-primary "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          Login
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h3>Let's create your account.</h3> */}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form
                  className="log-in-frm "
                  id="loginform"
                  action=""
                  method="post"
                  onSubmit={handleSubmit}
                >
                  <div className="container frm-con">
                    <h3 className="text-center">Welcome Back! </h3>
                    <h6 className="text-center">
                      Please log in back into your account
                    </h6>
                    <label
                      htmlFor="email"
                      className="email-lbl"
                      style={{ margin: "0rem 1.9rem" }}
                    >
                      <b>
                        Email Address<span style={{ color: "red" }}> *</span>
                      </b>
                    </label>
                    <br />
                    <div className="forgot-email text-center">
                      <input
                        type="email"
                        placeholder="abc@gmail.com"
                        name="email"
                        className="email"
                        id="email"
                        required
                        value={email} onChange={handleEmailChange}
                      />
                      <br />
                      <br />
                    </div>
                    <label
                      htmlFor="pass"
                      className="pass-lbl"
                      style={{ margin: "0rem 1.9rem" }}
                    >
                      <b>
                        Password<span style={{ color: "red" }}> *</span>
                      </b>
                    </label>
                    <br />
                    <div className="password text-center">
                      <input
                        type="password"
                        placeholder="Enter Password Here"
                        name="password"
                        className="pass-sign "
                        id="pass"
                        required
                        value={password} onChange={handlePasswordChange}
                      />
                      <div className="forgot-pass-link">
                        <a href="forgot-pass.html">
                          {" "}
                          Forgot Password?
                        </a>
                      </div>

                      {/* <br /> */}
                   
                      <i className="fa-regular fa-eye" id="eye" />
                    </div>
                    <div className="b text-center">
                      <button type="submit" className="submit-btn ">
                        Log In
                      </button>
                    </div>

                    <div className="container ">
                      <div className=" log-link">
                        <p className="text-center login-link ">
                          Don't have an account?{" "}
                          <a href="#" className="login">
                            SIGN UP
                          </a>
                        </p>
                      </div>
                      <p />
                      <div>
                        <p className="text-center">
                          ------------- OR ------------{" "}
                        </p>
                      </div>
                    </div>

                    <div className='container d-flex'>
                  {/* < div className='col-md-3'></div> */}
                    < div className='col-md-6'>
                    <GoogleOAuthProvider clientId="apps.googleusercontent.com">
                    <GoogleLogin 
                    clientId="apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={handleGoogleLoginSuccess}
                    onFailure={handleGoogleLoginFailure}
                    cookiePolicy={'single_host_origin'}
                  />
                    </GoogleOAuthProvider>
                      </div>
                    
                    
                  < div className='col-md-6'>
                    &nbsp;

                  <FacebookLogin
                    appId="234399599286316"
                    fields="name,email,picture"
                    callback={handleFacebookLoginSuccess}
                    onFailure={handleFacebookLoginFailure}
                    render={(renderProps) => (
                      <button className="facebook-login-button fb-btn" onClick={renderProps.onClick}>
                        {/* <i className="fab fa-facebook-f"></i> */}
                        <BsFacebook></BsFacebook>
                        &nbsp;Login with Facebook
                      </button>
                    )}
                  />
                  </div>
                  {/* < div className='col-md-3'></div> */}

                    </div>


                  </div>
                </form>
                {/* <div class="modal-footer"> */}
              
              </div>
            </div>
          </div>
        </div>



              
      </>
    
  );
}

export default Login;
