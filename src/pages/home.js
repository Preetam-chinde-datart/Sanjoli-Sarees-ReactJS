import Products from '../components/Products'
import  './home.css'
import CarouselFadeExample from '../components/Slideshow'
import { FaQuoteRight } from 'react-icons/fa'
import { FiArrowUp } from 'react-icons/fi'
// import { useState } from 'react'
// import QuickView from '../components/QuickView'
// import Header from '../components/Header'
// import Footer from '../components/Footer'


export default function HomePage(){
    // console.log('whole product', wholeProduct)


    // document.addEventListener()
    // ('.carousel .carousel-item').each(function () {
    //   var minPerSlide = 3;
    //   var next = this.next();
    //   if (!next.length) {
    //     next = this.siblings(':first');
    //   }
    //   next.children(':first-child').clone().appendTo(this);
    //   for (var i = 0; i < minPerSlide; i++) { 
    //     next=next.next();
    //     if (!next.length) {
    //       next=this.siblings(':first');
    //     } 
    //     next.children(':first-child').clone().appendTo(this); 
    //   } 
    // });
   
  
    
  return(
    <>

      {/* Slideshow */}
      <CarouselFadeExample></CarouselFadeExample>
      {/* End of slideshow */}

      {/* Latest products */}
      <section className="mt-4 latest-product">
        <div className="container">
          <h2>Latest Products</h2>
        </div>
        <section className="product">
          <button className="pre-btn">
            <img src={require("../images/arrow.png")} alt="Prev" width="50%" />
          </button>
          <button className="nxt-btn">
            <img src={require("../images/arrow.png")} alt="Next" width="34%" />
          </button>
            <Products />
        </section>
      </section>
      {/* End of Latest products  */}
      {/* Shop by category */}
      <section className="pt-4 mt-4 home-cat">
        <div className="home-category">
          <div className="container">
            <h2>Shop by Category</h2>
          </div>
          <div className="container d-md-flex">
            <div className="col-md-4 cat-card">
              <a href="/shop?productCategory=Traditional%20Sarees">
                <img src={require("../images/cat-1.png")} alt="Category" width="100%" />
              </a>
              <h4 className='pt-2'>Traditional Wear</h4>
              <p>Elegant and classic sarees that showcase the beauty of Indian tradition.</p>
            </div>
            <div className="col-md-4 cat-card">
              <a href="/shop?productCategory=Daily%20Sarees">
                <img src={require("../images/cat-2.png")} alt="Category" width="100%" />
              </a>
              <h4 className='pt-2'>Daily Wear</h4>
              <p>Simple and comfortable sarees perfect for everyday wear.</p>
            </div>
            <div className="col-md-4 cat-card">
              <a href="/shop?productCategory=Wedding%20Sarees">
                <img src={require("../images/cat-3.png")} alt="Category" width="100%" />
              </a>
              <h4 className='pt-2'>Wedding Saree</h4>
              <p>Luxurious and ornate sarees that are perfect for a bride on her special day.</p>
            </div>
          </div>
          <div className="container d-md-flex">
            <div className="col-md-4 cat-card">
              <a href="/shop?productCategory=Festival%20Wear">
                <img src={require("../images/cat-4.png")} alt="Category" width="100%" />
              </a>
              <h4 className='pt-2'>Festive Wear</h4>
              <p>Vibrant and colorful sarees that are perfect for celebrating Indian festivals.</p>
            </div>
            <div className="col-md-4 cat-card">
              <a href="/shop?productCategory=Party%20Wear">
                <img src={require("../images/cat-5.png")} alt="Category" width="100%" />
              </a>
              <h4 className='pt-2'>Party wear</h4>
              <p>Glamorous and stylish sarees that are perfect for parties and special occasions.</p>
            </div>
            <div className="col-md-4 cat-card">
              <a href="/shop?productCategory=Girlish%20Sarees">
                <img src={require("../images/cat-6.png")} alt="Category" width="100%" />
              </a>
              <h4 className='pt-2'>Girlish Saree</h4>
              <p>Fun and playful sarees with youthful designs and patterns.</p>
            </div>
          </div>
        </div>
      </section>
      {/* End of shop by category */}
      {/* USP */}
      <section className="pt-4 mt-4">
        <div className="container">
          <h2>What We Offer</h2>
        </div>
        <div className="container d-md-flex">
          <div className="col-md-4 p-md-2">
            <div className="usp usp1-bg">
              <p className="text-center">Affordable Quality</p>
            </div>
            <p className="pt-2">
              Offering high-quality sarees at affordable prices, so everyone can
              enjoy the elegance of a saree.
            </p>
          </div>
          <div className="col-md-4 p-md-2">
            <div className="usp usp2-bg">
              <p className="text-center">Exclusive Designs</p>
            </div>
            <p className="pt-2">
              Providing unique and exclusive saree designs that are not available
              elsewhere.
            </p>
          </div>
          <div className="col-md-4 p-md-2">
            <div className="usp usp3-bg">
              <p className="text-center">Hassle free Return</p>
            </div>
            <p className="pt-2">
              Providing a straightforward and easy returns process, ensuring that
              customers can shop with confidence and peace of mind.
            </p>
          </div>
        </div>
      </section>
      {/* End of USP */}
      {/* Testimonials */}
      {/* <section className="pt-4 mt-4 testimonials">
        <div className="container">
          <h2>What our customers says</h2>
        </div>
        <div className="container">
          <div
            id="myCarousel"
            className="carousel slide container"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner w-100">
              <div className="carousel-item active">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body text-center">
                        <FaQuoteRight></FaQuoteRight>
                      <p className="card-text px-4 pb-4 text-center">
                        Some example text some example text. Jane Doe is an
                        architect and engineer. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                  <div className="text-center mt-4 image-text">
                    <img
                      className="card-img-bottom"
                      src={require("../images/customer1.png")}
                      alt="Card card-img"
                      style={{ width: "10%" }}
                    />
                    <p style={{ fontWeight: 600 }}>Priya K</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body text-center">
                        <FaQuoteRight></FaQuoteRight>
                      <p className="card-text px-4 pb-4 text-center">
                        Some example text some example text. Jane Doe is an
                        architect and engineer. Repellendus minima ab excepturi! Qui
                        corrupti nobis itaque nesciunt commodi consequatur cumque
                        quia earum.
                      </p>
                    </div>
                  </div>
                  <div className="text-center mt-4 image-text">
                    <img
                      className="card-img-bottom"
                      src={require("../images/customer1.png")}
                      alt="Card card-img"
                      style={{ width: "10%" }}
                    />
                    <p style={{ fontWeight: 600 }}>Priya K</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body text-center">
                        <FaQuoteRight></FaQuoteRight>
                      <p className="card-text px-4 pb-4 text-center">
                        Some example text some example text. Jane Doe is an
                        architect and engineer. Nihil quam repellat aliquam, numquam
                        deleniti vero corrupti.
                      </p>
                    </div>
                  </div>
                  <div className="text-center mt-4 image-text">
                    <img
                      className="card-img-bottom"
                      src={require("../images/customer1.png")}
                      alt="Card card-img"
                      style={{ width: "10%" }}
                    />
                    <p style={{ fontWeight: 600 }}>Priya K</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body text-center">
                        <FaQuoteRight></FaQuoteRight>
                      <p className="card-text px-4 pb-4 text-center">
                        Some example text some example text. Jane Doe is an
                        architect and engineer. Adipisci numquam quasi quod fugiat
                        ea culpa, labore cumque voluptas.
                      </p>
                    </div>
                  </div>
                  <div className="text-center mt-4 image-text">
                    <img
                      className="card-img-bottom"
                      src={require("../images/customer1.png")}
                      alt="Card card-img"
                      style={{ width: "10%" }}
                    />
                    <p style={{ fontWeight: 600 }}>Priya K</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body text-center">
                        <FaQuoteRight></FaQuoteRight>
                      <p className="card-text px-4 pb-4 text-center">
                        Some example text some example text. Jane Doe is an
                        architect and engineer. Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Hic omnis, laborum sed
                        assumenda commodi reiciendis rem voluptate nulla nam alias
                      </p>
                    </div>
                  </div>
                  <div className="text-center mt-4 image-text">
                    <img
                      className="card-img-bottom"
                      src={require("../images/customer1.png")}
                      alt="Card card-img"
                      style={{ width: "10%" }}
                    />
                    <p style={{ fontWeight: 600 }}>Priya K</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body text-center">
                        <FaQuoteRight></FaQuoteRight>
                      <p className="card-text px-4 pb-4 text-center">
                        Some example text some example text. Jane Doe is an
                        architect and engineer
                      </p>
                    </div>
                  </div>
                  <div className="text-center mt-4 image-text">
                    <img
                      className="card-img-bottom"
                      src={require("../images/customer1.png")}
                      alt="Card card-img"
                      style={{ width: "10%" }}
                    />
                    <p style={{ fontWeight: 600 }}>Priya K</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body text-center">
                        <FaQuoteRight></FaQuoteRight>
                      <p className="card-text px-4 pb-4 text-center">
                        Some example text some example text. Jane Doe is an
                        architect and engineer
                      </p>
                    </div>
                  </div>
                  <div className="text-center mt-4 image-text">
                    <img
                      className="card-img-bottom"
                      src={require("../images/customer1.png")}
                      alt="Card card-img"
                      style={{ width: "10%" }}
                    />
                    <p style={{ fontWeight: 600 }}>Priya K</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body text-center">
                        <FaQuoteRight></FaQuoteRight>
                      <p className="card-text px-4 pb-4 text-center">
                        Some example text some example text. Jane Doe is an
                        architect and engineer
                      </p>
                    </div>
                  </div>
                  <div className="text-center mt-4 image-text">
                    <img
                      className="card-img-bottom"
                      src={require("../images/customer1.png")}
                      alt="Card card-img"
                      style={{ width: "10%" }}
                    />
                    <p style={{ fontWeight: 600 }}>Priya K</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <div className="cntrl-1">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </div>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <div className="cntrl-2">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </div>
            </button>
          </div>
        </div>
      </section> */}
      {/* End of Testimonials */}

      {/* Go to top button  */}
      {/* <a href="#" className="go-to-top">
        <FiArrowUp></FiArrowUp>
      </a> */}
      {/* Go to top button  */}
    </>

  )
}