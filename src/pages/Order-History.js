import './OrderHistory.css'
import 'bootstrap'

function OrderHistory() {
  return (
    <>

<>
  {/* Header  */}
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
          <img src="/images/logo.png" alt="Company Logo" />
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
  <div className="container ">
    <div className="left-div">
      {/* vertical navigation */}
      <div className="vertical-navigation">
        <ul>
          <li>
            <img className="nav-img" src="/images/profile.png" alt="" />
            <a className="ver-nav" href="#profile">
              My Profile
            </a>
          </li>
          <li>
            <img className="nav-img" src="/images/orders.png" alt="" />
            <a className="ver-nav" href="#myorders">
              My Orders
            </a>
          </li>
          <li>
            <img className="nav-img" src="/images/logout.png" alt="" />
            <a className="ver-nav" href="#logout">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="right-div">
      <div className="pesonal-info">
        <div className="container">
          <div className="h4">
            <h4>
              {" "}
              <b>My orders history</b>
            </h4>
          </div>
          <hr />
        </div>
      </div>
      <div className="container d-flex">
        <div className="col-md-3">
          <div className="product-img">
            <img src={require("../images/product.png")} alt="" />
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
            {/* <button type="submit" class="review-btn">Write Review</button> */}
          </div>
        </div>
      </div>{" "}
      <br />
      <br />
      {/* 2 */}
      <div className="container d-flex">
        <div className="col-md-3">
          <div className="product-img">
          <img src={require("../images/product.png")} alt="" />
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
            {/* <button type="submit" class="review-btn1">Write Review</button> */}
          </div>
        </div>
      </div>{" "}
      <br />
      <br />
      {/* 3 */}
      <div className="container d-flex">
        <div className="col-md-3">
          <div className="product-img">
          <img src={require("../images/product.png")} alt="" />
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