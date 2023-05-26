import './account.css'
import { MdOutlineLogout, MdEdit } from "react-icons/md";
import { RxPerson } from 'react-icons/rx'
import {FiPlus} from "react-icons/fi";
import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import {Bag} from 'react-bootstrap-icons'
import { AddNewAddress } from '../components/AddNewAddress'

function Profile() {
  
  function userReducer(state, action){
    switch(action.type){
      case 'load':
        return action.payload
      case 'updateProfile' :
        return state
      case 'updatePassword' :
        return state
      case 'updateProfileImage':
        return state
      default:
        return state
    }
  }
  
  //Set user
  // const [user, setUser] = useState(null);
  const [user, dispatch] = useReducer(userReducer, null)

  const url = process.env.REACT_APP_TEST_LINK;  
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDZiNTJhNzViYmE4M2QyOTM4M2EyNWEiLCJpYXQiOjE2ODUwNzI1NzEsImV4cCI6MTY4NTExNTc3MX0.0-zEBj59oz5qyKIJBpiAIKCPV4z-USNQAtyRermoFFc';
  const userId = '646b52a75bba83d29383a25a'
  
  const authAxios = axios.create({
    baseURL : url,
    headers : {
      'auth-jwt' : token,
    },
  })

  useEffect(() => {
    authAxios.get(`/getUser/${userId}`)
      .then(res => {
        dispatch({type : 'load', payload : res.data.data})
        console.log(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // addAddress
  const [newAddress, setNewAddress] = useState(null)

  function addAddress(){

  }



  return (
    <>
      <section className="account-section">
        <div className='container mt-3'>
          <a href='/' className='backlink'>&lt; Back</a>
          <div className='page-heading mb-3 pb-3'>
            <h2>My profile</h2>
          </div>
        </div>
      {
        user
        ?
        <div className="container d-md-flex ">
          <div className="left-div">
            {/* vertical navigation */}
            <div className="vertical-navigation">
              <ul>
                <li className="profile">
                  <RxPerson />
                  <button className="ver-nav" href="#profile">
                    My Profile
                  </button>
                </li>
                <li className="order">
                  <Bag />
                  <button className="ver-nav" href="#myorders">
                    My Orders
                  </button>
                </li>
                <li className="logout">
                  <MdOutlineLogout />
                  <button className="ver-nav" href="#logout">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-div">
            <div className="container d-flex">
              <div className="col-md-4">
                <div className="my-details">
                  <h5>My Details</h5>
                </div>
              </div>
              <div className="col-md-4" />
              <div className="col-md-4">
                <div className="edit-img edit-info">
                  <button><MdEdit /></button>
                </div>
              </div>
            </div>
            <div className="pesonal-info">
              <div className="container">
                <div className="h4">Personal Information</div>
                <hr />
                <div className="container d-flex">
                  <div className="col-md-6">
                    <div className="container">
                      <div className="col-md-3">
                      <div className="profile-img">
                        <img src={user.imagesUrl} alt="" width='100%' height='150'/>
                        <div className="edit-img1 edit-profile">
                        <button><MdEdit /></button>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <form action="" className="profile-frm">
                      <label htmlFor="first_name" className="name1-lbl">
                        First Name
                      </label>
                      <label htmlFor="last_name" className="name2-lbl">
                        Last Name
                      </label>
                      <br />
                      <input
                        type="text"
                        placeholder="First Name"
                        name="f_name"
                        className="f-name"
                        id="f-name"
                        required
                        value={user.firstName}
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        name="l_name"
                        className="l-name"
                        id="l-name"
                        required
                        value={user.lastName}
                      />
                      <br />
                      <br />
                      <label htmlFor="email" className="email-lbl">
                        Email Address
                      </label>
                      <br />
                      <input
                        type="email"
                        placeholder="abc@gmail.com"
                        name="email"
                        className="email"
                        id="email"
                        required
                        value={user.email}
                      />
                      <br />
                      <br />
                      <label htmlFor="mob_no" className="mob-lbl">
                        Mobile Number
                      </label>
                      <br />
                      <input
                        type="number"
                        placeholder="+91 1234567890"
                        name="mob_no"
                        className="mob-no"
                        id="mob-no"
                        required
                        value={user.mobileNo}
                      />
                      <br />
                      <br />
                      <button type="submit" className="submit-btn">
                        Save
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="address-info">
              <div className="container">
                <br />
                <br /> <div className="h4"> Add Address</div>
              </div>
              <hr />
              <div className="container d-flex">
                {
                  user.addresses.map((data, i)=>{
                    return(
                      <>
                        <div className="col-md-4 px-2">
                          <div className="address-container">
                            <h5>{data.firstName} {data.lastName}</h5>
                            <p className='text-capitalize'>{data.street}, {data.city}, {data.pincode}.<br /> 
                            State: {data.state}, <br/> Country: {data.country} </p>
                            <p>Phone: {data.contactNumber}</p>
                            <a href="#edit">Edit |</a>
                            <a href="#remove"> Remove </a>
                            {/* <a href="#set-default"> Set As Default</a> */}
                          </div>
                        </div>
                      </>
                    )
                  })
                }
                
                <div className="col-md-4 px-2 py-3">
                  <div className="address-container text-center">
                  <button type="button" className=" quick-view" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" onClick={(e)=>addAddress()}>
                    <FiPlus /> <br /> Add New Address
                  </button>
                      
                  </div>
                </div>
              </div>
              {/* 2 */}
              {/* <div className="container d-flex">
                
                <div className="col-md-4 px-2" />
                <div className="col-md-4 px-2" />
              </div> */}
            </div>
            <div className="password-info">
              <div className="container">
                <br />
                <br />
                <div className="h4">Security and Password</div>
              </div>
              <hr />
              <div className="container d-flex">
                <div className="col-md-6">
                  <h5>Change Password</h5>
                </div>
                <div className="col-md-6">
                  <label htmlFor="old-pass">
                    <h6>Old Password</h6>
                  </label>
                  <br />
                  <input
                    type="password"
                    placeholder="xxxxxxxxxx"
                    name="password"
                    className="password1"
                    id="old-pass"
                  />
                  <br />
                  <br />
                  <label htmlFor="old-pass">
                    <h6>New Password</h6>
                  </label>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter New Password"
                    name="password"
                    className="password1"
                    id="new-pass"
                  />
                  <br />
                  <br />
                  <label htmlFor="old-pass">
                    <h6>Confirm Password</h6>
                  </label>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter Confirm Password"
                    name="password"
                    className="password1"
                    id="conf-pass"
                  />
                  <br />
                  <br />
                  <button type="submit" className="submit-btn">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>



          {/* Model newAddress */}
          <div className="modal fade" id="exampleModal" tabIndex={-1}  aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <div className='fs-2 fw-bold'></div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <AddNewAddress />
                </div>
              </div>
            </div>
          </div>



        </div>
      :
      <></>
      }
      </section>
    </>
  );

  
}

export default Profile;
