// import "./shopping-cart.css";
import "bootstrap";

function shoppingcart() {
  return (
    <>
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
                <h3 className="contact-txt">Bag</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex">
          <div className="left">
            <div className="container d-flex md-flex">
              <div className="col-md-3">
                <div className="product-img">
                  <img src="/images/product.png" alt="Product Image" />
                </div>
              </div>
              {/* 1 */}
              <div className="col-md-3">
                <div className="product-discr">
                  <p className="product-discription">Product Code</p>
                  <h5>
                    <b>Green Border Saree</b>
                  </h5>
                  <p className="product-discription">Color: Green</p>
                  <p className="product-discription">Fabric: Silk</p>
                  <div className="container d-flex product-discr">
                    <div className="add-favourite">
                      <a href="#add-to-favourits">Add to favourites </a>
                    </div>
                    <div className="product-discr">
                      <a className="product-discription" href="#cancel-order">
                        {" "}
                        &nbsp; &nbsp;Remove
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3" />
              <div className="col-md-3">
                <br />
                <p />
                <select name="quantity" id="quantity">
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select>
                <br />
                <br />
                <br />
                <p />
                <p>₹9,000</p>
              </div>
            </div>{" "}
            <br />
            <br />
            {/* 2 */}
            <div className="container d-flex">
              <div className="col-md-3">
                <div className="product-img">
                  <img src="/images/product.png" alt="Product Image" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="product-discr">
                  <p className="product-discription">Product Code</p>
                  <h5>
                    <b>Green Border Saree</b>
                  </h5>
                  <p className="product-discription">Color: Green</p>
                  <p className="product-discription">Fabric: Silk</p>
                  <div className="container d-flex product-discr">
                    <div className="add-favourite">
                      <a href="#add-to-favourits">Add to favourites </a>
                    </div>
                    <div className="product-discr">
                      <a className="product-discription" href="#cancel-order">
                        {" "}
                        &nbsp; &nbsp;Remove
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3" />
              <div className="col-md-3">
                <br />
                <p />
                <select name="quantity" id="quantity">
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select>
                <br />
                <br />
                <br />
                <p />
                <p>₹9,000</p>
              </div>
            </div>{" "}
            <br />
            <br />
            {/* 2*/}
            <div className="container d-flex">
              <div className="col-md-3">
                <div className="product-img">
                  {/* <img src="/images/product.png" alt="Product Image" /> */}
                  <img src={require("../images/product.png")} alt="" />
                </div>
              </div>
              {/* 3 */}
              <div className="col-md-3">
                <div className="product-discr">
                  <p className="product-discription">Product Code</p>
                  <h5>
                    <b>Green Border Saree</b>
                  </h5>
                  <p className="product-discription">Color: Green</p>
                  <p className="product-discription">Fabric: Silk</p>
                  <div className="container d-flex product-discr">
                    <div className="add-favourite">
                      <a href="#add-to-favourits">Add to favourites </a>
                    </div>
                    <div className="product-discr">
                      <a className="product-discription" href="#cancel-order">
                        {" "}
                        &nbsp; &nbsp;Remove
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3" />
              <div className="col-md-3">
                <br />
                <p />
                <select name="quantity" id="quantity">
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select>
                <br />
                <br />
                <br />
                <p />
                <p>₹9,000</p>
              </div>
            </div>{" "}
            <br />
            <br />
          </div>
          <div className="right">
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
                <hr />
                <br />
                <br />
                <br />
                <br />
                <h5>Total</h5>
              </div>
              <div className="col-md-4" />
              <div className="col-md-4">
                <p>₹9,000</p>
                <p>₹120</p>
                <p>₹0</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <label htmlFor="Total-price">
                  <h5>
                    <b>₹9,120</b>
                  </h5>
                </label>
              </div>
              <b></b>
            </div>
            <b>
              <br />
              <br />
              <div className="col-md-12 text-center">
                <button
                  type="submit"
                  className="submit-btn"
                  style={{ width: 320 }}
                >
                  Checkout
                </button>
              </div>
            </b>
          </div>
          <b></b>
        </div>
        <b></b>
      </>
    </>
  );
}

export default shoppingcart;
