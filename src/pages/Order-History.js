// import './OrderHistory.css'
// import 'bootstrap'
import './account.css'
import { MdOutlineLogout } from "react-icons/md";
import { RxPerson } from 'react-icons/rx'
import {Bag} from 'react-bootstrap-icons'

function OrderHistory() {
  return (
    <>

<>
  
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
  <div className="container d-md-flex">
    <div className="left-div">
      {/* vertical navigation */}
      <div className="vertical-navigation">
        <ul>
          <li className="profile">
            <RxPerson />
            <a href="/account">
              <button className="ver-nav" >
                My Profile
              </button>
            </a>
          </li>
          <li className="order">
            <Bag />
            <a href="/order-history">
              <button className="ver-nav active">
                My Orders
              </button>
            </a>
          </li>
          <li className="logout">
            <MdOutlineLogout />
            <button className="ver-nav">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div className="right-div">
      <div className="pesonal-info">
        <div className="container">
          <div className="h4">
            <h4>
              <b>My orders history</b>
            </h4>
          </div>
          <hr />
        </div>
      </div>
      <div className="container d-flex">
        <div className="col-md-3">
          <div className="product-img">
            <img src={require('../images/product1.png')} alt="" />
          </div>
        </div>
        {/* 1 */}
        <div className="col-md-3">
          <div className="product-discr">
            <h5>
              <b>Shipped</b>
            </h5>
            <p className="product-discription">Full Name Of Product</p>
            <p className="product-discription">Product Code</p>
            <p className="product-discription">
              Return window open till Thursday, 27 Apr
            </p>
            <div className="container d-flex product-discr">
              <a className="product-discription" href="#cancel-order">
                Cancel Order
              </a>
              <p className="product-discription" style={{ color: "#519D42" }}>
                {" "}
                &nbsp;&nbsp;&nbsp; Arriving Today
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3" />
        <div className="col-md-3">
          <div className="product-btn">
            <button type="submit" className="track-btn">
              Track Order
            </button>
            <button type="submit" class="review-btn">Write Review</button>
          </div>
        </div>
      </div>{" "}
      <br />
      <br />
      {/* 2 */}
      <div className="container d-flex">
        <div className="col-md-3">
          <div className="product-img">
          <img src={require('../images/product1.png')} alt="" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="product-discr">
            <h5>
              <b>Dispatched</b>
            </h5>
            <p className="product-discription">Full Name Of Product</p>
            <p className="product-discription">Product Code</p>
            <p className="product-discription">
              Return window open till Thursday, 27 Apr
            </p>
            <div className="container d-flex product-discr">
              <a className="product-discription" href="#cancel-order">
                Cancel Order
              </a>
              <p className="product-discription" style={{ color: "#519D42" }}>
                {" "}
                &nbsp;&nbsp;&nbsp; Arriving Today
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3" />
        <div className="col-md-3">
          <div className="product-btn">
            <button type="submit" className="track-btn1">Track Order</button>
            <button type="submit" class="review-btn1">Write Review</button>
          </div>
        </div>
      </div>{" "}
      <br />
      <br />
      {/* 3 */}
      <div className="container d-flex">
        <div className="col-md-3">
          <div className="product-img">
          <img src={require('../images/product1.png')} alt="" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="product-discr">
            <h5>
              <b>Delivered</b>
            </h5>
            <p className="product-discription">Full Name Of Product</p>
            <p className="product-discription">Product Code</p>
            <p className="product-discription">
              Return window open till Thursday, 27 Apr
            </p>
            <div className="container d-flex product-discr">
              <a
                className="product-discription"
                href="#cancel-order"
                style={{ color: "#4B5563", fontSize: 14 }}
              >
                Retunrn / Exchange
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3" />
        <div className="col-md-3">
          <div className="product-btn">
            <button type="submit" className="track-btn2">
              Download Invoice
            </button>
            <button type="submit" className="review-btn2">
              Write Review
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
     
    </>
  );
}
export  default OrderHistory;