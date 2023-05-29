import './shop.css'
import { BiChevronLeft } from 'react-icons/bi'
import 'bootstrap/dist/js/bootstrap.bundle'
import ShopProducts from '../components/ShopProducts'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Shop(){

    let prodCat;
    // Collect data from URL
    if(window.location.search){
        const paramValues = window.location.search;
        const urlParams = new URLSearchParams(paramValues);
        // console.log(paramValues);
        const category = urlParams.get('productCategory');
        prodCat = `productCategory=${category}`
    }

    // Products display 
    const [product , setProduct] = useState([])

    
    const url = `${process.env.REACT_APP_TEST_LINK}/getproduct/?${prodCat}`
    
    
    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            setProduct(res.data.data)
            // console.log(res.data.data);
        }).catch((err)=>{
            // alert(err)
            console.log(err);
        });
    },[])

    
    
    
    
    // useEffect(()=>{
    //     if(sortBy !== product){
    //         setProduct(sortBy)
    //         setSortBy(sortBy)

    //     }
    // },[sortBy])
    
    

    // Fro price range 
    function getRangeData(){
        var get = document.getElementById('get-range').value;
        document.getElementById("put-range-data").innerHTML = `₹${get}`;

    }


    // showing products 
    // const [visibleProduct, setVisibleProduct] = useState(1)


    return(
        <>
            {
                product.length != 0  ?
                <section className='shop mt-3'>
                    {/* Back and Heading  */}
                    <div className='container'>
                        <a href='/'><BiChevronLeft />Back</a>
                        <div className='page-heading mb-3 pb-3'>
                            <h2>Shop</h2>
                        </div>
                    </div>

                    {/* Content page */}
                    <div className="container d-md-flex">
                        {/* Filter section */}
                        <div className="col-md-2 pe-2">
                            <div className="filters">
                                <div className="filter-heading fw-bold mb-md-3 fs-4">Filters</div>
                                <div className="price-range">
                                    <form>
                                        <label htmlFor="Price range" className='text-decoration-underline fs-5 ps-2 mb-2'>Price Range</label><br />
                                        <input type="range" min={0} max={3500} step={100} id='get-range' onChange={getRangeData} className='w-100' />
                                        <div className="d-flex justify-content-between">
                                            <p className="low">0</p>
                                            <p id='put-range-data'>Select</p>
                                        </div>
                                        {/*  */}
                                    </form>
                                </div>
                                {/* Filter by category  */}
                                <div className="category mt-md-2">
                                    <div className="category-heading fs-5 ps-2 mb-3">By Category</div>
                                    <ul>
                                        <li className='mb-2'><a href={`/shop?productCategory=Traditional Sarees`}>Traditional Wear</a></li>
                                        <li className='mb-2'><a href={`/shop?productCategory=Daily%20Sarees`}>Daily Wear</a></li>
                                        <li className='mb-2'><a href={`/shop?productCategory=Wedding%20Sarees`}>Wedding Wear</a></li>
                                        <li className='mb-2'><a href={`/shop?productCategory=Festival%20Wear`}>Festival Wear</a></li>
                                        <li className='mb-2'><a href={`/shop?productCategory=Party%20Wear`}>Party Wear</a></li>
                                        <li className='mb-2'><a href={`/shop?productCategory=Girlish%20Sarees`}>Girlish Wear</a></li>
                                    </ul>
                                </div>
                                <br />
                                <a href="/shop" className="clear-filter btn btn-secondary">Clear Filters</a>
                            </div>
                        </div>

                        {/* Sort and Products Section */}
                        <div className="col-md-10 p-2">
                            {/* <div className="row"> */}
                                <div className="container">
                                    {/* Sorting top  */}
                                    

                                    {/* Products */}
                                    <div className="shop-products my-2">
                                        <div className="row">
                                            <div className="container">
                                                <ShopProducts product={product}/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            {/* </div> */}
                        </div>

                    </div>

                    
                </section>
                :
                <></>
            }
        </>
    )
}

