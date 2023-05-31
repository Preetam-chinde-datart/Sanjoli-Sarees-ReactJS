import { SuitHeart, Person, Bag } from 'react-bootstrap-icons'
import '../pages/login.css';
import "bootstrap";
import React, { useState } from "react";
import axios from "axios";
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import{BsFacebook} from  'react-icons/bs';
import Eye from "../images/Eye.png"
import EyeOff from "../images/EyeOff.png"


export default function Header(){

  const paramValue = window.location.pathname

    const url = process.env.REACT_APP_TEST_LINK
    // LogIn
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [setuser] = useState("")
    // const navigate = useNavigate();
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const handleLogin = (event) => {
      event.preventDefault();
      axios.post(`${url}/login`, {
          email: email,
          password: password,    
        })
        .then((response) => {
          // Handle success response
          console.log( 'test data',response.data);
          let token = response.data.tokenData.token
          let userId = response.data.tokenData.userId
          localStorage.setItem('userId', userId)
          localStorage.setItem('token', token)
          // go to home page
          // navigate("/Homepage");
          // <Redirect to="/home"/>;
          window.location.href = '/';

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

    const [icon, setIcon] = useState(Eye);
    const [inputType, setInputType] = useState('password');
    const togglePassword = () => {
      if(inputType === 'password') {
        setInputType('text')
        setIcon(EyeOff)
      } else {
        setInputType('password')
        setIcon(Eye)
      }
    } 

     // *******Sign up
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
         const response = await axios.post(`${url}/register`, formData);
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
 
    return(
        <>
            <section id="header" className="pb-3">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    {/* Togeller */}
                    <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                    >
                    <span className="navbar-toggler-icon" />
                    </button>
                    {/* Brand  */}
                    <a href="/" className="navbar-brand">
                    <img src={require("../images/Logo-Header.png")} width="100%" alt="Company Logo" />
                    </a>
                    {/* Profile  */}
                    <div className="profile">
                    <a data-bs-toggle="modal" data-bs-target="#loginModal" data-bs-whatever="@mdo" className={paramValue === '/account' || paramValue === '/order-history' ? 'btn position-relative active' : 'btn position-relative'} herf="../pages/login.js">
                        <Person/>
                        <span className="account"> My account</span>
                    </a>
                    <a href='/favourites' className={paramValue === '/favourites' ? 'btn position-relative active' : 'btn position-relative'} id='favourites'>
                        <SuitHeart />
                        {/* <span className="position-absolute start-60 translate-items badge bg-color bag-user">2</span> */}
                        <span className="favourites"> Favourites</span>
                    </a>
                    <a href='/bag' className={paramValue === '/bag' ? 'btn position-relative active' : 'btn position-relative'} id='bag'>
                        <Bag />
                        <span className="position-absolute start-60 translate-items badge bg-color bag-user">2</span>
                        <span className="bag ps-md-2"> Bag</span>
                    </a>
                    </div>
                </div>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    {/* Menu  */}
                    <div className="collapse navbar-collapse" id="navMenu">
                    <ul className="navbar-nav">
                        {/* mx-auto text-center */}
                        <li className="nav-item">
                        <a href="/" className={paramValue === '/' ? 'nav-link active' : 'nav-link'}>Home</a>
                        </li>
                        <li className="nav-item">
                        <a href="/about" className={paramValue === '/about' ? 'nav-link active' : 'nav-link'}>About</a>
                        </li>
                        <li className="nav-item">
                        <a href="/shop" className={paramValue === '/shop' ? 'nav-link active' : 'nav-link'}>Shop</a>
                        </li>
                        <li className="nav-item">
                        <a href="/contact" className={paramValue === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
                        </li>
                    </ul>
                    </div>
                    {/* Search Bar */}
                    <div className="serch-bar ">
                    <input
                        className="search icon"
                        type="text"
                        placeholder="Search for products"
                    />
                    {/* <img id="mglass" src={require("../images/search.png")} alt='Search'/> */}
                    </div>
                </div>
                </nav>
            </section>

    <section id='LogIn' className=''>
        <div
          className="modal "
          id="loginModal"
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
                  onSubmit={handleLogin}
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
                        type={inputType}
                        placeholder="Enter Password Here"
                        name="password"
                        className="pass-sign "
                        id="pass"
                        required
                        value={password} onChange={handlePasswordChange}
                      />
                       <span className='password-icon' onClick={togglePassword}><img src={icon} alt="" /></span>

                      <div className="forgot-pass-link">
                        <a href="forgot-pass.html">
                          {" "}
                          Forgot Password?
                        </a>
                      </div>

                      {/* <br /> */}
                   
                    
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

                          {/* <a data-bs-toggle="modal"data-bs-target="#exampleModal"data-bs-whatever="@mdo" herf="../pages/login.js">Sign Up</a> */}
                           <a data-bs-toggle="modal" data-bs-target="#SignupModal" data-bs-whatever="@mdo" herf="../pages/signup.js">Sign Up</a>
                       
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
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
     </section>

        <section id='Signup'className=''>

            {previousModal && (
            <div className="modal " id="SignupModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
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
                       Create Account
                        </button>
                    </div>
                    <div>
                        <p className="text-center">------------- OR ------------ </p>
                        </div>

                    <div className="container ">
                        <div className="">
                        <p className="text-center login-link ">
                            Already have an account?{" "}
                            <a data-bs-toggle="modal" data-bs-target="#loginModal" data-bs-whatever="@mdo" herf="../pages/login.js">Log in</a>
                        </p>
                        </div>
                        <p />
                       
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
    </section>
        </>
    )
}









// import * as React from "react";
  
// // importing material UI components
// import AppBar from "@mui/material/AppBar";
// // import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// // import MenuIcon from "@mui/icons-material/Menu";
// import { GiHamburgerMenu } from 'react-icons/gi'
  
// export default function Header() {
//   return (
//       <AppBar position="static">
//         <Toolbar>
//           {/*Inside the IconButton, we 
//            can render various icons*/}
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             {/*This is a simple Menu 
//              Icon wrapped in Icon */}
//             {/* <MenuIcon /> */}
//             <GiHamburgerMenu />
//           </IconButton>
//           {/* The Typography component applies 
//            default font weights and sizes */}
  
//           <Typography variant="h6" 
//             component="div" sx={{ flexGrow: 1 }}>
//             GeeksforGeeks Header
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//   );
// }






