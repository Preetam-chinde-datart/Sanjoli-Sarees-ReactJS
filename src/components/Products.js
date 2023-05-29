import axios from 'axios'
import { useEffect, useState } from 'react'
import { SuitHeart } from 'react-bootstrap-icons'
import QuickViewProduct from './QuickviewProduct'



export default function Products({prodCat}){
    

    // Products 
    const [products , setProducts] = useState([])
    const url = process.env.REACT_APP_TEST_LINK

    // For add to bag 
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDZiNTJhNzViYmE4M2QyOTM4M2EyNWEiLCJpYXQiOjE2ODUzMzMwNDgsImV4cCI6MTY4NTM3NjI0OH0.6cHoebb_2iJWC_BSDkIxYgwEeACZnmrGZ6AaYg6qj9U';
    const userId = '646b52a75bba83d29383a25a'
  
    const authAxios = axios.create({
        baseURL : url,
        headers : {
        'auth-jwt' : token,
        },
    })
    
    useEffect(()=>{
        axios.get(`${url}/getproduct/?${prodCat}`)
        .then((res)=>{
            setProducts(res.data.data)
            // console.log(res.data.data);
        }).catch((err)=>{
            // alert(err)
            console.log("Server not started");
        });

        // authAxios.get(`/getCart/${userId}`)
        // .then(res => {
        //     console.log(res.data.data);
        // })
        // .catch(error => {
        //     console.log(error);
        // });

    },[])
    // console.log(products);

    // Product slider
    const productContainers = [...document.querySelectorAll('.product-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

    productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width - 1100;
        // console.log('container width ' ,containerWidth)

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    });

    // Quickview 
    const [fullProduct, setFullProduct] = useState([])

    function viewQuick(prod){
        setFullProduct(prod)
    }
    
    
    // Add to bag
    const addToBag = async (data) => {
        console.log(data._id);
        try {
            const response = await authAxios.post(`/addCart/${userId}`, `productId=${data._id}`)
            console.log(response);
            
        } catch (error) {
            alert('Product already in Bag')
            console.log(error.response.data.message);
        }
    }
    
    
    
    return(
        <>

            <div className="product-container">
                {
                    products.map((a , i)=>{
                        let prodRef = `/product-details?productCode=${a.productCode}&productCategory=${a.productCategory}`
                        return(
                            <>
                            <div className="product-card">
                                <div className="product-image">
                                    
                                    <a href={prodRef}>
                                        <img src={a.productImage[0]} alt="Latest Product" />
                                    </a>
                                    <button className="card-btn">
                                        <SuitHeart />
                                    </button>
                                    <button type="button" className=" quick-view" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" onClick={(e)=>viewQuick(a)} >Quick view</button>
                                </div>
                                <div className="product-info">
                                    <h4 className="product-brand">{a.productName}</h4>
                                    {
                                        a.discountedPrice 
                                        ? 
                                        <div id='discounted-price'>
                                            <span className="price">Rs. {a.price}</span>
                                            <span className="discountedPrice text-green">Rs. {a.discountedPrice}</span>
                                        </div>
                                        :
                                        <div id='actual-price'>
                                            <span className="actual-price">Rs. {a.price}</span>
                                        </div>
                                    }

                                    {/* <br /> */}
                                    <button id="add-to-bag" className='' onClick={(e)=>{addToBag(a);e.preventDefault()}}>Add to Bag</button>
                                </div>
                            </div>
                            
                            </>
                        )
                    })
                }
            </div>



            {/* Model Quickview */}
            <div className="modal fade quick-view" id="exampleModal" tabIndex={-1}  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <div className='fs-2 fw-bold'>{fullProduct.productName}</div> */}
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <QuickViewProduct wholeProd={fullProduct} />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}