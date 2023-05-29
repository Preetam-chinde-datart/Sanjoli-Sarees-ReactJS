import logo from "../images/logo.png";
import './profile-page.css'
import { RiShoppingBag3Line } from "react-icons/ri";
import { MdOutlineLogout, MdEdit } from "react-icons/md";
import { RxPerson } from 'react-icons/rx'
import {FiPlus} from "react-icons/fi";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  //Set user 
  const [user, setUser] = useState(null);


  const url = process.env.REACT_APP_PRODUCTION_LINK;
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDU5ZjZhMzYzM2MwODA5MzAxNDljODciLCJpYXQiOjE2ODQ3NDY2NTUsImV4cCI6MTY4NDc4OTg1NX0.bgyoqFytRFgfJDw1W5EKzZR7sOcQm5bi1OM7NxuxwNE';
  const userId = '6459f6a3633c080930149c87'
  


  const authAxios = axios.create({
    baseURL : url,
    headers : {
      'auth-jwt' : token,
    },
  })

  useEffect(() => {
    authAxios.get(`/getUser/${userId}`)

      .then(res => {
        setUser(res.data.data);
        // console.log(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);





  return (
    <>
      <section id="header">
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
            <a href="index.html" className="navbar-brand">
              {/* <img src="/images/logo.png" alt="Company Logo" /> */}
              <img src={logo} alt="Company Logo" />
            </a>
            {/* Profile  */}
            <div className="profile">
              <button className="btn position-relative">
                <i className="bi bi-person" />
                <span className="account"> Account</span>
              </button>
              <button className="btn position-relative">
                <i className="bi bi-heart" />
                <span className="favourites"> Favourites</span>
              </button>
              <button className="btn position-relative">
                <i className="bi bi-bag" />
                <span className="position-absolute start-60 translate-middle badge bg-primary bag-user">
                  2
                </span>
                <span className="bag ps-md-2"> Bag</span>
              </button>
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
                  <a href="/" className="nav-link active">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/about.html" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/shop.html" className="nav-link">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/contact.html" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Search Bar */}
            <div className="serch-bar d-none d-md-block">
              <input
                className="search"
                type="text"
                defaultValue="Search for products"
              />
              {/* <img id="mglass" src="search.png"> */}
            </div>
          </div>
        </nav>
      </section>
      <div className="row">
        <div className="container">
          <div className="col-md-12">
            <div className="contact-header">
              <p className="text-grey">
                {" "}
                <a href="#homepage" className="text-grey">
                  {" "}
                  &lt;{" "}
                </a>
                Back
              </p>
              <h3 className="contact-txt">My Account</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex ">
        <div className="left-div">
          {/* vertical navigation */}
          <div className="vertical-navigation">
            <ul>
              <li className="profile">
                <RxPerson />
                <a className="ver-nav" href="#profile">
                  My Profile
                </a>
              </li>
              <li className="order">
                <RiShoppingBag3Line className="pro"></RiShoppingBag3Line>
                <a className="ver-nav" href="#myorders">
                  My Orders
                </a>
              </li>
              <li className="logout">
                <MdOutlineLogout className="pro"></MdOutlineLogout>
                <a className="ver-nav" href="#logout">
                  Logout
                </a>
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
              <div className="edit-img">
                <button>
                  <MdEdit />
                </button>
              </div>
            </div>
          </div>
          <div className="pesonal-info">
            <div className="container">
              <div className="h4">Personal Information</div>
              <hr />
              <div className="container d-flex">
                <div className="col-md-6">
                  <div className="profile-img">
                    <img src={user} alt="" />
                    <div className="edit-img1">
                      <img
                        src="https://img.icons8.com/sf-regular-filled/48/null/edit.png"
                        width="20px"
                        height="20px"
                        alt=""
                      />
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
                      // value={user.firstName}
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="l_name"
                      className="l-name"
                      id="l-name"
                      required
                      // value={user.lastName}
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
                      // value={user.email}
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
                      // value={user.mobileNo}
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
              <div className="col-md-4 px-2">
                <div className="address-container">
                  <h5>David Martin</h5>
                  <p>
                    203, Building name,Street address, Area,City/Town, State -
                    Pincode
                  </p>
                  <p>No: 98xxxxx430</p>
                  <a href="#edit">Edit |</a>
                  <a href="#remove">Remove |</a>
                  <a href="#set-default">Set As Default</a>
                  {/* <p> {user.addresses}</p> */}
                </div>
              </div>
              <div className="col-md-4 px-2">
                <div className="address-container">
                  <h5>David Martin</h5>
                  <p>
                    203, Building name,Street address, Area,City/Town, State -
                    Pincode
                  </p>
                  <p>No: 98xxxxx430</p>
                  <a href="#edit">Edit |</a>
                  <a href="#remove">Remove |</a>
                  <a href="#set-default">Set As Default</a>
                </div>
              </div>
              <div className="col-md-4 px-2">
                <div className="address-container">
                  <h5>David Martin</h5>
                  <p>
                    203, Building name,Street address, Area,City/Town, State -
                    Pincode
                  </p>
                  <p>No: 98xxxxx430</p>
                  <a href="#edit">Edit |</a>
                  <a href="#remove"> Remove |</a>
                  <a href="#set-default"> Set As Default</a>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="container d-flex">
              <div className="col-md-4 px-2 py-3">
                <div className="address-container text-center">
                  <a href="#hreh">
                    {" "}
                    <FiPlus></FiPlus>
                  </a>
                  <h4 className="text-grey">Add New Address</h4>
                </div>
              </div>
              <div className="col-md-4 px-2" />
              <div className="col-md-4 px-2" />
            </div>
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
                  id="password"
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
                  id="password"
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
                  id="password"
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
      </div>
    </>
  );
}

export default Profile;
