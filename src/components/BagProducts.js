import SelectQuantity from "./SelectQuantity"




const BagProducts = ({cartProducts, addToFavourites, removeFromCart, getSubTotal})=>{


    return(
        <>
            {
                cartProducts.items.map((a, i)=>{
                    // console.log(a.productId.productImage[0]);
                    let currentPrice;
                    if(a.productId.discountedPrice){
                        currentPrice = a.productId.discountedPrice
                    }else{
                        currentPrice = a.productId.price
                    }


                    return(
                        <>
                            <div className="container my-2 px-2 d-flex wrap-flex">
                                {/* Product Image  */}
                                <div className="col-md-3 px-3 bag-product-image">
                                    <img src={a.productId.productImage[0]} alt="" width='100%'/>
                                </div>
                                {/* Product Details  */}
                                <div className="col-md-9 bag-product-details">
                                    <div className="row">
                                        <div className="container d-flex wrap-flex">
                                            {/* Product Info  */}
                                            <div className="col-md-6 ps-2 bag-product-info">
                                                <h4 className="prod-name fw-bold">{a.productId.productName}</h4>
                                                <p className="prod-category">Category - {a.productId.productCategory}</p>
                                                {
                                                    a.productId.discountedPrice 
                                                    ? 
                                                    <div id='discounted-price'>
                                                        <span className="price">Rs.{a.productId.price}</span>
                                                        <span className="discountedPrice text-green"> Rs.{a.productId.discountedPrice}</span>
                                                    </div>
                                                    :
                                                    <div id='actual-price'>
                                                        <span className="actual-price">Rs.{a.productId.price}</span>
                                                    </div>
                                                }
                                                
                                                <button className='add-to-fav text-decoration-underline ps-0' onClick={()=>{addToFavourites(a.productId._id);}} >Add to favourites</button>
                                                <button className='remove-from-cart text-danger' onClick={()=>removeFromCart(a.productId._id)}>Remove</button>
                                            </div>
                                            {/* Quantity and Price  */}
                                            <div className="col-md-6 quantity-price">
                                                <SelectQuantity currentPrice={currentPrice} id={a.productId._id} getSubTotal={getSubTotal} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </>
                    )
                })
            }        
        </>
    )
}


export default BagProducts