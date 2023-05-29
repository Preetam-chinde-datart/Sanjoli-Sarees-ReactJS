import './checkout.css'
import 'bootstrap'

function checkout() {
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
              <img src={require("../images/logo.png")} alt="" />
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

      <section id="progress-bar">
        <br /> <br />
        <div className="container d-flex">
          <div className="col-md-4">
            <img src={require("../images/check.png")} alt="" />
            <img
              src={require("../images/blue-line.png")}
              alt=""
              className="blue-line"
            />
            <p className="step"> </p>
            <h6 className="header2">Billing Details</h6>
            <p className="progress2">In Progress</p>
          </div>
          <div className="col-md-4">
            <img src={require("../images/card1.png")} alt="" />
            <img
              src={require("../images/grey-line.png")}
              alt=""
              className="grey-line"
            />
            <p className="step">Step 3</p>
            <h6 className="header2">Select Payment method</h6>
            <p className="progress3">Pending</p>
          </div>
          <div className="col-md-4">
            <img src={require("../images/card1.png")} alt="" />
            <img
              src={require("../images/grey-line.png")}
              alt=""
              className="grey-line"
            />
            <p className="step">Step 3</p>
            <h6 className="header2">Payment Details</h6>
            <p className="progress3">Pending</p>
          </div>
        </div>
      </section>

      <section id="billing-section">
        <div className="container d-flex mt-5">
          <div className="col-md-6">
            <div className="billing-part">
              <form
                className="Add-address"
                id="Add-address "
                action="https://server-dot-sanjoli-sarees-testenvironment.el.r.appspot.com/"
                method="post"
              >
                <div className="container frm-con">
                  <h5 className='h5'>Billing Details</h5>
                  <p className='head'>Please fill in your billing details where you want the order
                    to be delivered.</p>
                  <br />

                  <div className="text-center">
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
                      name="lastName"
                      className="l-name"
                      id="l-name"
                    //   value={""}
                      required
                    />
                  </div>

                  <div className="text-center">
                    <input
                      type="number"
                      placeholder="Contact Number"
                      name="contactNumber"
                      className="contactNumber"
                      id="contactNumber"
                      required
                    />
                    <br />
                    <br />
                  </div>

                  <div className="text-center">
                    <input
                      type="text"
                      placeholder=" Country/Region"
                      name="country"
                      className="country"
                      id="country"
                      required
                    />
                    <br />
                    <br />
                  </div>

                  <div className="text-center">
                    <input
                      type=""
                      placeholder="Town/City"
                      name="town"
                      className="town"
                      id="town"
                      required
                    />

                    <input
                      type=""
                      placeholder="State"
                      name="state"
                      className="state"
                      id="state"
                      required
                    />
                    <br />
                    {/* <br /> */}
                  </div>

                  <div className="text-center">
                    <input
                      type="text"
                      placeholder="Street Address"
                      name="streetAdress"
                      className="streetAdress"
                      id=""
                    />
                    <br />
                    <br />
                  </div>

                  <div className="text-center">
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
                  <div className="text-center">
                    <input
                      type="text"
                      placeholder="Additional comment"
                      name="additionalCommit"
                      className="additionalCommit"
                      id="additionalCommit"
                    />
                    <br />
                  </div>

                  <div className="text-center">
                    <button type="submit" className="submit-btn text-center">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>


          <div className="col-md-6">
            <div className="order-part">
           
               <br></br>
                  {/* vertical navigation */}
                  <h4>Summary</h4>
                  <br />
                  <div className="container d-flex">
                    <div className="col-md-4">
                      <h6>Subtotal</h6>
                      <hr />
                      <h6>Shipping </h6>
                      <hr />
                      <h6>Taxes</h6>
                      <hr />
                      
                     
                      <h5>Total</h5>
                    </div>
                    <div className="col-md-4" />
                    <div className="col-md-4">
                      <p>₹9,000</p>
                      <p>₹120</p>
                      <p>₹0</p>
                     
                      <label htmlFor="Total-price">
                        <h5>
                          <b>₹9,120</b>
                        </h5>
                      </label>
                    </div>
                  
                  </div>
                 
                  
                    <br />
                    <div className="col-md-12 text-center">
                      <button type="submit" className="checkout-btn" style={{ width: 320 }}>Place Order</button>
                    </div>
               
                <b></b>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export  default checkout;