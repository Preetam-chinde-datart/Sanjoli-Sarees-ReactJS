import './product-details.css'
import './home.css'
import Products from '../components/Products'
import ProductDetail from '../components/ProductDetail'
import { GiRoundStar } from 'react-icons/gi'
import { useState, useEffect } from 'react'
import axios from 'axios'



export default function ProductDetails(){
    const [currentProd, setCurrentProd] = useState([]);

    // Collect data from URL 
    const paramValues = window.location.search;
    const urlParams = new URLSearchParams(paramValues);

    const category = urlParams.get('productCategory')
    const id = urlParams.get('productCode')
    // console.log(category, ' ', id)


    let url = `https://server-dot-sanjoli-sarees-testenvironment.el.r.appspot.com/getproduct/?productCode=${id}`
    
    useEffect( ()=>{
        axios.get(url)
        .then((res)=>{
            setCurrentProd(res.data.data[0])
            // console.log(currentProd);
        }).catch((err)=>{
            console.log("Server not started");
        });
    },[])

    // Review and Retun policy
    let review = document.getElementById("review-btn");
    let delivery = document.getElementById("delivery-btn");
    let deliverySection = document.getElementById("delivery-section");
    let reviewSection = document.getElementById("review-section");

    if (review){
        review.addEventListener("click", function() {
            review.classList.add("active");
            delivery.classList.remove("active");
            reviewSection.classList.add("d-block");
            reviewSection.classList.remove("d-none")
            deliverySection.classList.remove("d-block");
            deliverySection.classList.add("d-none");
        });
    }

    if (delivery){
        delivery.addEventListener("click", function() {
            review.classList.remove("active");
            delivery.classList.add("active");
            deliverySection.classList.add("d-block");
            deliverySection.classList.remove("d-none")
            reviewSection.classList.remove("d-block");
            reviewSection.classList.add("d-none");
        });
    }

    
    return(
        <>

            {/* Product details  */}
            <ProductDetail wholeProd={currentProd} />
            {/* End of product details */}

            {/* Review and Return Policy */}
            <section className="return-policy mb-4">
                <div className="container text-center mb-3 mb-md-4 mt-1 mt-md-2">
                <hr />
                <button className="mx-2 pt-2 px-2 active" id="review-btn">
                    Reviews (4.4)
                </button>
                <button className="mx-2 pt-2 px-2" id="delivery-btn">
                    Delivery and Returns Information
                </button>
                </div>
                <div className="container ">
                <div className="col-md-8 mx-auto">
                    <div id="review-section" className="review-section d-block">
                    <div className="row">
                        <div className="container">
                        <div className="col-md-6">
                            <div className="review">
                                <div className="row">
                                    <div className="container d-flex">
                                    <div className="col-2">
                                        <div className="profile-img">
                                        <img
                                            id="profile-img"
                                            src={require("../images/product-details/user.png")}
                                            alt="User Profile "
                                            width="100%"
                                        />
                                        </div>
                                    </div>
                                    <div className="col-10 ps-4 pt-2">
                                        <h5 id="profile-name" className="profile-name">
                                        Customer Name
                                        </h5>
                                        <p className="stars">
                                        <GiRoundStar className='filled'></GiRoundStar>
                                        <GiRoundStar className='filled'></GiRoundStar>
                                        <GiRoundStar className='filled'></GiRoundStar>
                                        <GiRoundStar></GiRoundStar>
                                        <GiRoundStar></GiRoundStar>
                                        </p>
                                        <p className="posted-date small-text">dd/mm/yyyy</p>
                                        <p className="small-text">
                                        Feedback provided by <span id="customer-1" />
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="container d-flex">
                                    <div className="col-2">
                                        <div className="profile-img">
                                        <img
                                            id="profile-img"
                                            src={require("../images/product-details/user.png")}
                                            alt="User Profile "
                                            width="100%"
                                        />
                                        </div>
                                    </div>
                                    <div className="col-10 ps-4 pt-2">
                                        <h5 id="profile-name" className="profile-name">
                                        Customer Name
                                        </h5>
                                        <p className="stars">
                                        <GiRoundStar className='filled'></GiRoundStar>
                                        <GiRoundStar className='filled'></GiRoundStar>
                                        <GiRoundStar className='filled'></GiRoundStar>
                                        <GiRoundStar className='filled'></GiRoundStar>
                                        <GiRoundStar></GiRoundStar>
                                        </p>
                                        <p className="posted-date small-text">dd/mm/yyyy</p>
                                        <p className="small-text">
                                        Feedback provided by <span id="customer-2" />
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-8 mx-auto">
                    <div id="delivery-section" className="delivery-section d-none">
                    <h5 className="fw-bold">Delivery and return information</h5>
                    <ul>
                        <li>Brand – LAXMIHARI</li>
                        <li>
                        Fancy Saree With Unstitched Blouse Having Length 5.80 M And 0.80 M
                        respectively.
                        </li>
                        <li>Care Instruction – Hand Wash Only</li>
                        <li>Saree Fabric – Fancy Material</li>
                        <li>
                        Soft Finished Comfortable To Wear And Easy To Take Fleets {"{"}
                        Size-Free Size{"}"} {"{"}Saree Is Not Transparent{"}"}
                        </li>
                        <li>
                        Occasions: Party, Festive, Wedding Wear, Traditional Wear. Best
                        Gift For Your Loved Ones.
                        </li>
                        <li>Package Included: 1 Saree With 1 Blouse Piece</li>
                        <li>Return If Damage Within 7days From The Date Of Delivery</li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>
            {/* End of Review and Return Policy */}

            {/* Related products section */}
            <section className="pt-3 pb-4 related-product">
                <div className="container">
                <h2>Related Products</h2>
                </div>
                <section className="product">
                <button className="pre-btn">
                    <img src={require("../images/arrow.png")} alt="Prev" width="50%" />
                </button>
                <button className="nxt-btn">
                    <img src={require("../images/arrow.png")} alt="Next" width="34%" />
                </button>
                    <Products prodCat={`productCategory=${category}`}/>
                </section>
            </section>
            {/* End of Related products section */}
        </>
    )
}