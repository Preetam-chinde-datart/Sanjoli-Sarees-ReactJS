import axios from 'axios';
import './ProductDetail.css'
import { SuitHeart } from 'react-bootstrap-icons'
import { GoStar } from 'react-icons/go'
// import { useState, useEffect } from 'react';

export default function ProductDetail({wholeProd}){
    var discountePercent;

    if(wholeProd.discountedPrice){
        discountePercent = 100 - (Math.round(((wholeProd.discountedPrice / wholeProd.price) * 100)));
    }
    // console.log('wholeproduct ', wholeProd);

    

    // For add to bag and favourites
    const url = process.env.REACT_APP_TEST_LINK
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
  
    const authAxios = axios.create({
        baseURL : url,
        headers : {
        'auth-jwt' : token,
        },
    })

    const addToBag = async (data) => {
        // console.log(data._id);
        try {
            await authAxios.post(`/addCart/${userId}`, `productId=${data._id}`)
            // console.log(response);
            alert('Product added to Bag')
            
        } catch (error) {
            alert('Product already in Bag')
            console.log(error.response.data.message);
        }
    }

    // Add to favourites 
    const addToFavourite = async (data) => {
        // console.log(data._id);
        try {
            await authAxios.post(`/addFavorite/${userId}`, `productId=${data._id}`)
            alert('Product added to Favourites')
            
        } catch (error) {
            alert('Product already in Favourites')
            console.log(error.response.data.message);
        }
    }
    
    return (
        <>
        {
            wholeProd.length !== 0 
            ?
            <section className="product-details mb-4">
                <div className="container d-md-flex mt-4">
                <div id='small-images' className="col-md-2 sub-products px-5">
                        {
                            wholeProd.productImage.map((data,i)=>{
                                // console.log(i);
                                return(
                                    <>
                                        <img id={`image-option-${i+1}`} src={data} alt="Product" className={`image-option image-option-${i+1}`} width="100%" onClick={(e)=>{document.getElementById('main-img').src = data; e.preventDefault()}} />
                                        <br />
                                    </>
                                )
                            })
                            
                        }
                </div>
                <div className="col-md-4 main-product">
                    <div className="main-img-container">
                        <img
                            id="main-img"
                            src={wholeProd.productImage[0]}
                            alt="Main"
                            className="main-img"
                            width="100%"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <h3 id="product-name" className="product-name text-capitalize" >{wholeProd.productName}</h3>
                    <p>
                        <span id="product-review" className="product-review">4.4 <GoStar></GoStar> </span>
                        <span id="product-rating" className="color-light product-rating"> | 2.3k Ratings</span>
                    </p>

                    {
                        wholeProd.discountedPrice ? 
                        <div>
                            <span id="price" className="price" >Rs. {wholeProd.price} </span>
                            <span id="discountedPrice" className="discountedPrice text-green" > Rs. {wholeProd.discountedPrice} </span>
                            <span id="discount" className="text-green discount">[ {discountePercent}% off ]</span>
                        </div>
                        :
                        <div><span id="actual-price" className="actual-price" >Rs. {wholeProd.price} </span></div>
                        
                    }

                    <p className="text-tax small-text">Tax included</p>
                    <button href="#" className="btn btn-primary" onClick={()=>addToBag(wholeProd)}>Add to Bag</button>
                    &nbsp;&nbsp;
                    <button href="#" className="btn btn-secondary" onClick={()=>addToFavourite(wholeProd)}><SuitHeart /> Favourites</button>
                    <div className="product-description pt-4">
                    <h4>Product details</h4>
                    <hr />
                    <p>Product code: <span id="product-code" className="product-code">{wholeProd.productCode}</span>
                    </p>
                    <hr />
                    <p>Category: <span id="product-cat" className="product-cat">{wholeProd.productCategory}</span>
                    </p>
                    <hr />
                    <ul className="description">
                        <li>Brand – LAXMIHARI</li>
                        <li>Fancy Saree With Unstitched Blouse Having Length 5.80 M And 0.80 Mrespectively.</li>
                        <li>Care Instruction – Hand Wash Only</li>
                        <li>Saree Fabric – Fancy Material</li>
                        <li>Soft Finished Comfortable To Wear And Easy To Take Fleets {"{"}Size-Free Size{"}"} {"{"}Saree Is Not Transparent{"}"}</li>
                        <li>Occasions: Party, Festive, Wedding Wear, Traditional Wear. BestGift For Your Loved Ones.</li>
                        <li>Package Included: 1 Saree With 1 Blouse Piece</li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>
            :
            <p></p>
            
        }
            
        </>
    )
}