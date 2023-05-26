import { useState } from 'react'
import { SuitHeart } from 'react-bootstrap-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import QuickViewProduct from './QuickviewProduct'
import axios from 'axios';


export default function ShopProducts({product, fav}){
    

    // Sort by 
    const [sortBy, setSortBy] = useState([]);

    // Quickview 
    const [fullProduct, setFullProduct] = useState([])


    // For add to bag 
    const url = process.env.REACT_APP_TEST_LINK
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDZiNTJhNzViYmE4M2QyOTM4M2EyNWEiLCJpYXQiOjE2ODQ5ODU5NTQsImV4cCI6MTY4NTAyOTE1NH0.JEGM7VN0iFdegC9pv5-Q2WNSVeUx8gahNbNfHHxssfk';
    const userId = '646b52a75bba83d29383a25a'
  
    const authAxios = axios.create({
        baseURL : url,
        headers : {
        'auth-jwt' : token,
        },
    })


    // Pagination 
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 16;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = product.slice(firstIndex, lastIndex);
    const npage = Math.ceil(product.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

   

    
    function viewQuick(prod){
        setFullProduct(prod)
    }

    // Sorting
    function SortItNow(e){
        const sarees = document.getElementById("sarees").value;
        if(sarees === 'price-low-high'){
            setSortBy(sortBy.sort((a,b)=> a.price - b.price))
            console.log('sort changing');
        }
        if(sarees === 'price-high-low'){
            setSortBy(sortBy.sort((a,b)=> b.price - a.price))
            console.log('sort changing');
        }
        if(sarees === 'name-a-z'){
            setSortBy(sortBy.sort((a, b) => (a.productName > b.productName) ? 1: -1))
            console.log('sort changing');
        }
        if(sarees === 'name-z-a'){
            setSortBy(sortBy.sort((a, b) => (a.productName < b.productName) ? 1: -1))
            console.log('sort changing');
        }
    }

    // Add to bag
    const addToBag = async (data) => {
        console.log(data._id);
        try {
            const response = await authAxios.post(`/addCart/${userId}`, `productId=${data._id}`)
            // console.log(response);
            alert('Product added to Bag successfully')
            
        } catch (error) {
            alert('Product already in Bag')
            console.log(error.response.data.message);
        }
    }
    
    
    
    return(
        <>
            {
                fav === 0 ?
                <></>
                :
                <div className="sorting d-flex justify-content-between">
                    <div className="showing-result">
                        Showing {records.length} product(s) out of {product.length} products
                    </div>
                    <div className="sort">
                        <form>
                        <label htmlFor='sortby'>Sort by&nbsp;</label>
                        <select name="sarees" id="sarees" onClick={SortItNow}>
                            {/* <option value="selected" selected>Select Sort</option> */}
                            <option value="price-low-high">Price (Low to High)</option>
                            <option value="price-high-low">Price (High to Low)</option>
                            <option value="name-a-z">Name (A to Z)</option>
                            <option value="name-z-a">Name (Z to A)</option>
                        </select>
                        <br />
                        {/* <input type="submit" value="Submit" /> */}
                        </form>
                    </div>
                </div>
            }

            <div className='all-products border rounded'>
                
                {
                    records.map((a , i)=>{
                        console.log(a);
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
                        <a href="" className='page-link' onClick={prePage}>
                            <span>&lt; Prev</span>
                        </a>
                    </li>
                    {
                        numbers.map((n,i) => (
                            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                <a href="" className='page-link' onClick={(e)=>{changeCPage(n); e.preventDefault()}}>
                                    <span>{n}</span>
                                </a>
                            </li>
                        ))
                    }
                    <li className="page-item">
                        <a href="" className='page-link' onClick={nextPage}>
                            <span>Next &gt;</span>
                        </a>
                    </li>
                </ul>
            </nav>


            {/* Model Quickview */}
            <div className="modal fade" id="exampleModal" tabIndex={-1}  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className='fs-2 fw-bold'>{fullProduct.productName}</div>
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