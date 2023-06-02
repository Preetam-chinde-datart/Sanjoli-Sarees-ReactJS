import { useEffect, useState } from 'react'
import { SuitHeart } from 'react-bootstrap-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import QuickViewProduct from './QuickviewProduct'
import axios from 'axios';
// import Sort from './Sort';


export default function ShopProducts({product, fullProduct, viewQuick}){
    

    // Sort by 
    const [sortBy, setSortBy] = useState(product);


    // Pagination 
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 16;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = sortBy.slice(firstIndex, lastIndex);
    const npage = Math.ceil(sortBy.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);
    

    // Sorting
    // let finalSort;
    // function SortItNow(){
    //     const sarees = document.getElementById("sarees").value;
    //     if(sarees === 'price-low-high'){
    //         finalSort = sortBy.sort((a,b)=> a.price - b.price)
    //         setSortBy(finalSort)
    //         console.log('sort changing low to high');
    //     }else if(sarees === 'price-high-low'){
    //         finalSort = sortBy.sort((a,b)=> b.price - a.price)
    //         setSortBy(finalSort)
    //         console.log('sort changing high to low');
    //     }else if(sarees === 'name-a-z'){
    //         finalSort = sortBy.sort((a, b) => (a.productName > b.productName) ? 1: -1)
    //         setSortBy(finalSort)
    //         console.log('sort changing name a to z');
    //     }else if(sarees === 'name-z-a'){
    //         finalSort = sortBy.sort((a, b) => (a.productName < b.productName) ? 1: -1)
    //         setSortBy(finalSort)
    //         console.log('sort changing name z to a');
    //     }
    // }

    // For add to bag 
    const url = process.env.REACT_APP_TEST_LINK
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
  
    const authAxios = axios.create({
        baseURL : url,
        headers : {
        'auth-jwt' : token,
        },
    })

    // Add to bag
    const addToBag = async (data) => {
        console.log(data._id);
        try {
            const response = await authAxios.post(`/addCart/${userId}`, `productId=${data._id}`)
            // console.log(response);
            alert('Product added to bag')
            
        } catch (error) {
            alert(error.response.data.message)
            console.log(error.response.data.message);
        }
    }

    // Add to favourites 
    const addToFavourite = async (data) => {
        // console.log(data._id);
        try {
            const response = await authAxios.post(`/addFavorite/${userId}`, `productId=${data._id}`)
            alert('Product added to Favourites')
            
        } catch (error) {
            alert(error.response.data.message)
            console.log(error.response.data.message);
        }
    }
    
    
    
    return(
        <>
            
            <div className="sorting d-md-flex justify-content-between">
                <div className="showing-result pb-2">
                    Showing {firstIndex+1} to {lastIndex<sortBy.length ? lastIndex : sortBy.length} products out of {sortBy.length} products
                </div>
                {/* <div className="sort">
                    <form>
                    <label htmlFor='sortby'>Sort by&nbsp;</label>
                        <select name="sarees" id="sarees" onChange={SortItNow}>
                            <option value="selected" selected disabled>Select Sort</option>
                            <option value="price-low-high">Price (Low to High)</option>
                            <option value="price-high-low">Price (High to Low)</option>
                            <option value="name-a-z">Name (A to Z)</option>
                            <option value="name-z-a">Name (Z to A)</option>
                        </select>
                    </form>
                </div> */}
            </div>
            

            <div className='all-products border rounded'>
                
                {
                    records.map((a , i)=>{
                        // console.log(a);
                        let prodRef = `/product-details?productCode=${a.productCode}&productCategory=${a.productCategory}`
                        return(
                            <>
                            <div className="product-card">
                                <div className="product-image">
                                    <a href={prodRef}>
                                        <img src={a.productImage[0]} alt="Latest Product" />
                                    </a>
                                    <button className="card-btn" onClick={()=>addToFavourite(a)}>
                                        <SuitHeart />
                                    </button>
                                    <button type="button" className=" quick-view" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" onClick={()=>viewQuick(a)} >Quick view</button>
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
                                    <button id='add-to-bag' onClick={(e)=>{addToBag(a);e.preventDefault();}}>Add to Bag</button>
                                </div>
                            </div>
                            
                            </>
                        )
                    })
                }
            </div>

            {/* Pagination */}
            <nav className='mt-3'>
                <ul className="pagination justify-content-center mb-2">
                    <li className="page-item">
                        <a href="#" className='page-link' onClick={prePage}>
                            <span>&lt; Prev</span>
                        </a>
                    </li>
                    {
                        numbers.map((n,i) => (
                            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                <a href="#" className='page-link' onClick={(e)=>{changeCPage(n); e.preventDefault()}}>
                                    <span>{n}</span>
                                </a>
                            </li>
                        ))
                    }
                    <li className="page-item">
                        <a href="#" className='page-link' onClick={nextPage}>
                            <span>Next &gt;</span>
                        </a>
                    </li>
                </ul>
            </nav>


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

    function prePage(e){
        if(currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
        e.preventDefault();
    }

    function changeCPage (id){
        setCurrentPage(id)
    }

    function nextPage(e){
        if(currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
        e.preventDefault();
    }


}