import './OrderHistory.css'
// import 'bootstrap'
import './account.css'
import { MdOutlineLogout } from "react-icons/md";
import { RxPerson } from 'react-icons/rx'
import {Bag} from 'react-bootstrap-icons'
import axios from 'axios';
import { useEffect, useState } from 'react';

function OrderHistory() {

  // history 
  const [recordHistory, setRecordHistory] = useState({})

  const url = process.env.REACT_APP_TEST_LINK;  
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  
  const authAxios = axios.create({
    baseURL : url,
    headers : {
      'auth-jwt' : token,
    },
  })

  useEffect(() => {
    authAxios.get(`/getOrders/${userId}`)
      .then(res => {
        // setRecordHistory(res.data.data)
        console.log(res.data.data[0].items);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);




  return (

    <>
      
      <div className='container mt-3'>
        <a href='/' className='backlink'>&lt; Back</a>
        <div className='page-heading mb-3 pb-3'>
          <h2>My Account</h2>
        </div>
      </div>




      <section className="order-history">
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
            
            {/* History  */}
            <div className="history">
              {/* 1 */}
              <div className="container d-flex">
                <div className="col-md-3">
                  <div className="product-img">
                    <img src={require('../images/product1.png')} alt="" width='100%' />
                  </div>
                </div>
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
                <div className="col-md-6 status">
                  <div className="product-btn">
                    <button type="submit" className="btn btn-primary">Track Order</button><br /><br />
                    <button type="submit" class="btn btn-secondary">Write Review</button>
                  </div>
                </div>
              </div>
              <hr />
              {/* 2 */}
              {/* <div className="container d-flex">
                <div className="col-md-3">
                  <div className="product-img">
                  <img src={require('../images/product1.png')} alt="" width='100%' />
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
                        
                        &nbsp;&nbsp;&nbsp; Arriving Today
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 status">
                  <div className="product-btn">
                    <button type="submit" className="btn btn-primary">Track Order</button><br /><br />
                    <button type="submit" class="btn btn-secondary">Write Review</button>
                  </div>
                </div>
              </div>
              <hr /> */}
              {/* 3 */}
              {/* <div className="container d-flex">
                <div className="col-md-3">
                  <div className="product-img">
                  <img src={require('../images/product1.png')} alt="" width='100%' />
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
                <div className="col-md-6 status">
                  <div className="product-btn">
                    <button type="submit" className="btn btn-danger invoice">Download Invoice</button><br /><br />
                    <button type="submit" className="btn btn-secondary">Write Review</button>
                  </div>
                </div>
              </div>
              <hr /> */}
              {/* 4 */}
              {/* <div className="container d-flex">
                <div className="col-md-3">
                  <div className="product-img">
                  <img src={require('../images/product1.png')} alt="" width='100%' />
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
                        
                        &nbsp;&nbsp;&nbsp; Arriving Today
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 status">
                  <div className="product-btn">
                    <button type="submit" className="btn btn-primary">Track Order</button><br /><br />
                    <button type="submit" class="btn btn-secondary">Write Review</button>
                  </div>
                </div>
              </div>
              <hr /> */}
              {/* 5 */}
              {/* <div className="container d-flex">
                <div className="col-md-3">
                  <div className="product-img">
                  <img src={require('../images/product1.png')} alt="" width='100%' />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="product-discr">
                    <h5><b>Dispatched</b></h5>
                    <p className="product-discription">Full Name Of Product</p>
                    <p className="product-discription">Product Code</p>
                    <p className="product-discription">Return window open till Thursday, 27 Apr</p>
                    <div className="container d-flex product-discr">
                      <a className="product-discription" href="#cancel-order">Cancel Order</a>
                      <p className="product-discription" style={{ color: "#519D42" }}>
                        &nbsp;&nbsp;&nbsp; Arriving Today
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 status">
                  <div className="product-btn">
                    <button type="submit" className="btn btn-primary">Track Order</button><br /><br />
                    <button type="submit" class="btn btn-secondary">Write Review</button>
                  </div>
                </div>
              </div>
              <hr /> */}
              {/* 6 */}
              {/* <div className="container d-flex">
                <div className="col-md-3">
                  <div className="product-img">
                  <img src={require('../images/product1.png')} alt="" width='100%' />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="product-discr">
                    <h5><b>Dispatched</b></h5>
                    <p className="product-discription">Full Name Of Product</p>
                    <p className="product-discription">Product Code</p>
                    <p className="product-discription">Return window open till Thursday, 27 Apr</p>
                    <div className="container d-flex product-discr">
                      <a className="product-discription" href="#cancel-order">Cancel Order</a>
                      <p className="product-discription" style={{ color: "#519D42" }}>
                        &nbsp;&nbsp;&nbsp; Arriving Today
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 status">
                  <div className="product-btn">
                    <button type="submit" className="btn btn-primary">Track Order</button><br /><br />
                    <button type="submit" class="btn btn-secondary">Write Review</button>
                  </div>
                </div>
              </div>
              <hr /> */}
            </div>
          </div>
        </div>
      </section>
    </>
     

  );
}
export  default OrderHistory;