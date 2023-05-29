import './signup.css';
import 'bootstrap'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"




function Signup() {
  const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [mobileNo, setMobileNo] = useState(0)
    const [password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    
    const navigate = useNavigate();

    const register = async function (event) {
        event.preventDefault();
        await axios.post("https://server-dot-sanjoli-sarees-testenvironment.el.r.appspot.com/register", {
          firstName, lastName, mobileNo, email, password, confirmPassword,
        }).then((res) => {
            alert(`${firstName} Your Acount Created Succesfully
            Your One Time User Id is ${res.data.data._id} 
        `)
            navigate('/')
        })
        .catch((err) => { 
          // alert(err.response.data.message + err.response.status + " Error")
        })
    }

 
 
 
  return (
   
    <>
  <button type="button" className="btn btn-primary"data-bs-toggle="modal"data-bs-target="#exampleModal"data-bs-whatever="@mdo">
    Sign Up
  </button>

  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            onSubmit={register}
            // action="https://server-dot-sanjoli-sarees-testenvironment.el.r.appspot.com/register"
            method="post"
          >
            <div className="container frm-con">
              <h3>Let's create your account.</h3>
              <h6>Please fill in the details below to sign up</h6>
              <br />
              {/* <label for="first_name" class="name1-lbl"><b>First Name<span  style="color:red"> *</span></b></label>
          <label for="last_name" class="name2-lbl"><b>Last Name<span  style="color:red"> *</span></b></label><br> */}
              <div className="text-center">
                <input type="text" placeholder="First Name" name="firstName"className="f-name"id="f-name"required onChange={(e) => setFirstName(e.target.value)} />
                <input type="text"placeholder="Last Name" name="lastName" className="l-name"id="l-name"required
                onChange={(e)=>setLastName(e.target.value)}/>
              </div>
             
              <div className="text-center">
                <input type="email" placeholder="abc@gmail.com"name="email" className="email"id="email"required 
                onChange={(e)=>setEmail(e.target.value)}
                 />
                <br />
                <br />
              </div>
             
              <div className="text-center">
                <input type="number"placeholder="+91 1234567890"name="mobileNo"className="mob-no" id="mob-no"required
                 onChange={(e)=>setMobileNo(e.target.value)}/>
                <br />
                <br />
              </div>
              {/* <label for="pass"class="pass-lbl"><b>Password<span  style="color:red"> *</span></b></label><br> */}
              <div className="text-center">
                <input type="password"placeholder="Enter Password Here"name="password"className="pass-sign"id="pass" required  
                onChange={(e)=>setPassword(e.target.value)}/>
                <br />
                <br />
              </div>
              {/* <label for="pass" class="pass-comf-lbl"><b>Confirm Password <span  style="color:red"> *</span></b></label><br> */}
              <div className="text-center">
                <input type="password"placeholder="Confirm Password"name="pass"className="pass-sign-confirm"id="pass-sign-confirm"
                 onChange={(e)=>setconfirmPassword(e.target.value)}/>
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
</>

  )
}

export default Signup;
