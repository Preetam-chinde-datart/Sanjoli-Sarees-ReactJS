import axios from 'axios';
import './bag.css'
import { useEffect, useReducer, useState } from 'react';



export default function Bag(){

    function cartReducer(state, action){
        switch(action.type){
            case 'LOAD' :
                return action.payload
            default :
                return state
        }
    }

    //Cart Reducer 
    const [cartProducts, dispatch] = useReducer(cartReducer, null)

    const url = process.env.REACT_APP_TEST_LINK;  
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDZiNTJhNzViYmE4M2QyOTM4M2EyNWEiLCJpYXQiOjE2ODUwNzI1NzEsImV4cCI6MTY4NTExNTc3MX0.0-zEBj59oz5qyKIJBpiAIKCPV4z-USNQAtyRermoFFc';
    const userId = '646b52a75bba83d29383a25a'

    const authAxios = axios.create({
        baseURL : url,
        headers : {
            'auth-jwt' : token,
        },
    })

    useEffect(() => {
        authAxios.get(`/getCart/${userId}`)
            .then(res => {
                dispatch({type : 'LOAD', payload : res.data.data})
                console.log(res.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);



    // Use state 
    const [prodTotalPrice, setProdTotalPrice] = useState(1)
    

    function selectTotalProducts(){
        let selectedAmount = document.getElementById(`${cartProducts.items[0].productId._id}`).value
        console.log(selectedAmount)
        switch(selectedAmount) {
            case 1:
                setProdTotalPrice(selectedAmount)
                console.log('under case',prodTotalPrice);
                break;
            case 2:
                setProdTotalPrice(selectedAmount)
                console.log('under case',prodTotalPrice);
                break;
            case 3:
                setProdTotalPrice(selectedAmount)
                console.log('under case',prodTotalPrice);
                break;
            case 4:
                setProdTotalPrice(selectedAmount)
                console.log('under case',prodTotalPrice);
                break;
            case 5:
                setProdTotalPrice(selectedAmount)
                console.log('under case',prodTotalPrice);
                break;
            case 6:
                setProdTotalPrice(selectedAmount)
                console.log('under case',prodTotalPrice);
                break;
            case 7:
                setProdTotalPrice(selectedAmount)
                console.log('under case',prodTotalPrice);
                break;
            case 8:
                setProdTotalPrice(selectedAmount)
                console.log('under case',prodTotalPrice);
                break;
            case 9:
                setProdTotalPrice(selectedAmount)
                console.log('under case',prodTotalPrice);
                break;
            case 10:
                setProdTotalPrice(selectedAmount)
                console.log('under case',prodTotalPrice);
                break;
            default:
                break;
        }
        
    }
    



    return(
        <>
            <section className='bags'>
                {/* Page Heading  */}
                <div className='container mt-3'>
                    <a href='/' className='backlink'>&lt; Back</a>
                    <div className='page-heading mb-3 pb-3'>
                        <h2>Bag</h2>
                    </div>
                </div>

                {
                    cartProducts
                    ?
                    <div className="container d-flex wrap-flex in-bag">
                        <div className="col-md-9 product py-2">
                            <div className="row">
                                {/* Repeat  */}
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
                                                                    
                                                                    <button className='add-to-fav text-decoration-underline ps-0'>Add to favourites</button>
                                                                    <button className='remove-from-cart text-danger'>Remove</button>
                                                                </div>
                                                                {/* Quantity and Price  */}
                                                                <div className="col-md-6 quantity-price">
                                                                    <div className="quantity">
                                                                    <select name="quantity" id={a.productId._id} onChange={()=>selectTotalProducts(a.productId._id)}>
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
                                                                    </div>
                                                                    <div className="prod-total-price fw-bold">
                                                                        ₹ {prodTotalPrice*currentPrice}
                                                                    </div>
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
                                

                                
                            </div>
                        </div>
                        <div className="col-md-3 px-1 total-price">
                            <div className="summary p-3">
                                <h3 className='mb-5'>Summary</h3>
                                <div className="sub-total d-flex justify-content-between">
                                    <p>Subtotal</p>
                                    <p className='sub-total'>₹20000</p>
                                </div>
                                <div className="shipping d-flex justify-content-between">
                                    <p>Shipping</p>
                                    <p className='shipping'>₹120</p>
                                </div>
                                <div className="tax d-flex justify-content-between">
                                    <p>Tax</p>
                                    <p className='tax'>₹150</p>
                                </div>
                                <div className="final-bill">
                                    <div className="final-total d-flex justify-content-between">
                                        <h5 className='fw-bold'>Total</h5>
                                        <h5 className='fw-bold final-total'>₹20270</h5>
                                    </div>
                                    <a href="/"><button className="btn btn-primary">Checkout</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <></>
                }
                
                

            </section>
        </>
    )
}