import "./Addadress.css";
import "bootstrap";
import React, { useState } from 'react';



 const AddAdress = ()  => { 
   const [selectedState, setSelectedState] = useState('');

   
  

  const states = [
    'Andhra Pradesh','Arunachal Pradesh', 'Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka',
    'Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan',
    'Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal'];

    
    const handleChange = (e) => {
      setSelectedState(e.target.value);
    }
  
  
  
  return (
    <>
     <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Sign Up
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
                className="signup-frm "
                id="signup-frm "
                action="https://server-dot-sanjoli-sarees-testenvironment.el.r.appspot.com/register"
                method="post"
              >
                <div className="container frm-con">
                  <div className="header m-5">
                  <h4>Add new address</h4>
                  <p className="header2">
                    Please fill in your billing details where you want the order
                    to be delivered.
                  </p>
                  </div>
                 
                  

                  <div className="text-center my-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      className="f-name"
                      id="f-name"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value=""
                      name="lastName"
                      className="l-name"
                      id="l-name"
                      required
                    />
                  </div>

                  <div className="text-center my-4">
                    <input
                      type="number"
                      placeholder="Contact Number"
                      name="contactNumber"
                      className="contactNumber"
                      id="contactNumber"
                      required
                    />
                 
                  </div>

                  <div className="text-center my-4">
                    <input
                      type="text"
                      placeholder=" Country/Region"
                      name="country"
                      className="country"
                      id="country"
                      required
                    />
                   
                  </div>

                  <div className="text-center my-4">
                   

                   
                  
                    <select id="state-select" className="state" value={selectedState} onChange={handleChange} placeholder="State">
                      <option value="">State</option>
                      {states.map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>

                    <input
                      type=""
                      placeholder="Town/City"
                      name="town"
                      className="town"
                      id="town"
                      required
                    />
                  </div>

                  <div className="text-center my-4">
                    <input
                      type="text"
                      placeholder="Street Address"
                      name="streetAdress"
                      className="streetAdress"
                      id=""
                    />
                    
                  </div>

                  <div className="text-center my-4">
                    <input
                      type="text"
                      placeholder="Landmark"
                      name="landMark"
                      className="landMark"
                      id="landMark"
                    />

                    <input
                      type="number"
                      placeholder="Pincode"
                      name="pinCode"
                      className="pinCode"
                      id="pinCode"
                    />
                  </div>
                  <div className="text-center my-4">
                    <input
                      type="text"
                      placeholder="Additional comment"
                      name="additionalCommit"
                      className="additionalCommit"
                      id="additionalCommit"
                    />
                   
                  </div>

                  <div className="text-center">
                    <button type="submit" className="submit-btn text-center">
                      Save
                    </button>
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

export default AddAdress;
