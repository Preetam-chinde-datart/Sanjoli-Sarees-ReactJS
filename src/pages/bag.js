import axios from 'axios';
import './bag.css'
import { useEffect, useReducer, useState } from 'react';
import BagProducts from '../components/BagProducts';



export default function Bag({setGetFinalPrice}){

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
    // To Check Out 
    const [totalProducts, setTotalProducts] = useState({})

    

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
        authAxios.get(`/getCart/${userId}`)
            .then(res => {
                dispatch({type : 'LOAD', payload : res.data.data})
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    useEffect(()=>{
        let array = []
        let obj = {}
        if(cartProducts){
            cartProducts.items.map((data, i)=>{
                return(
                    array.push(data.productId._id),
                    obj[array[i]] = '1'
                )
            })
        }
        setTotalProducts({...obj})
    },[cartProducts])


    // add to favoutites
    const addToFavourites = async (data)=>{
        // console.log(data);
        try {
            await authAxios.post(`/addFavorite/${userId}`, `productId=${data}`)
            alert('Product moved to Favourites')
            try {
                await authAxios.put(`/updateCart/${userId}`, `productId=${data}`)
                // alert('Product moved to Favourites successfully')
                window.location.reload() 
            } catch (error) {
                alert(error.response.data.message)
                console.log(error.response.data.message);
            }
        } catch (error) {
            alert(error.response.data.message)
            console.log(error.response);
        }
        
        
    }

    // add to favoutites
    const removeFromCart = async (data)=>{
        // console.log(data);
        try {

            const response = await authAxios.put(`/updateCart/${userId}`, `productId=${data}`)
            alert('Product removed from bag')
            console.log(response);
            window.location.reload()
            
            
        } catch (error) {
            alert(error.response.data.message)
            console.log(error.response);
        }
    }

    // summary 
    const [subTotal, setSubTotal] = useState(0)
    let finalTotal = 0;
    const getSubTotal = (data)=>{
        finalTotal += data
        setSubTotal(finalTotal/2)
    }

    

    // Send data to checkout 
    let checkOutTotal;
    // let valueRef;
    const checkOut = (number, id) =>{
        setTotalProducts({...totalProducts, [id] : `${number}`})
    }
    
    // const login = () => {
    //     console.log(totalProducts);
    // }
    



    return(
        <>
            <section className='bags'>
            {
                    cartProducts
                    ?
                    <>
                {/* Page Heading  */}
                <div className='container mt-3'>
                    <a href='/' className='backlink'>&lt; Back</a>
                    <div className='page-heading mb-3 pb-3'>
                        <h2>Bag</h2>
                    </div>
                </div>

                
                    <div className="container d-flex wrap-flex in-bag">
                        <div className="col-md-9 product py-2">
                            <div className="row">
                                {/* Repeat  */}
                                <BagProducts cartProducts={cartProducts} addToFavourites={addToFavourites} removeFromCart={removeFromCart} getSubTotal={getSubTotal} checkOut={checkOut} />
                            </div>
                        </div>
                        <div className="col-md-3 px-1 total-price">
                            <div className="summary p-3">
                                <h3 className='mb-5'>Summary</h3>
                                <div className="sub-total d-flex justify-content-between">
                                    <p>Subtotal</p>
                                    <p className='sub-total'>₹{subTotal}</p>
                                </div>
                                <div className="shipping d-flex justify-content-between">
                                    <p>Shipping</p>
                                    <p className='shipping'>₹120</p>
                                </div>
                                <div className="tax d-flex justify-content-between">
                                    <p>Tax</p>
                                    <p className='tax'>₹150</p>
                                </div>
                                {/* <button onClick={login}  className='btn btn-primary'>Click me</button> */}
                                <div className="final-bill">
                                    <div className="final-total d-flex justify-content-between">
                                        <h5 className='fw-bold'>Total</h5>
                                        <h5 className='fw-bold final-total'>₹{checkOutTotal = subTotal + 270}</h5>
                                    </div>
                                    
                                    <a href={`/checkout?valueRef=${checkOutTotal}`}><button className="btn btn-primary">Checkout</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                    :
                    <></>
                }
                
                
               
            </section>
        </>
    )
}