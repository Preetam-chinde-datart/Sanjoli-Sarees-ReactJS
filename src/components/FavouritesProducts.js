import { useState } from 'react'
import { BsSuitHeartFill } from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css'
import QuickViewProduct from './QuickviewProduct'
import axios from 'axios';


export default function FavouriteProducts({product}){

    // Quickview 
    const [fullProduct, setFullProduct] = useState([])


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


    // Pagination 
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 16;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = product.slice(firstIndex, lastIndex);
    const npage = Math.ceil(product.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

   

    // Quickview 
    function viewQuick(prod){
        setFullProduct(prod)
    }


    // Add to bag
    const addToBag = async (data) => {
        // console.log(data._id);
        try {
            const response = await authAxios.post(`/addCart/${userId}`, `productId=${data._id}`)
            // console.log(response);
            alert('Product moved to bag')
            try {
                // const json = JSON.parse({"productId" : data._id})
                await authAxios.delete(`/removeFavorite/${userId}`,{data:{productId : data._id}})
                window.location.reload()
                
            } catch (error) {
                // alert('Favourites removal error')
                console.log(error.response);
            }
            
        } catch (error) {
            alert(error.response.data.message)
            console.log(error.response.data.message);
        }
        
    }

    // Remove from favourites 
    const removeFromFavourite = async (data) => {
        try {
            // const json = JSON.parse({"productId" : data._id})
            const response =  await authAxios.delete(`/removeFavorite/${userId}`,{data:{productId : data._id}})
            alert('Product removed from favouirtes')
            console.log(response);
            window.location.reload()
            
        } catch (error) {
            alert(error.response.data.message)
            console.log(error.response);
        }
    }
    
    
    
    return(
        <>

            <div className='all-products border rounded'>
                
                {
                    records.map((a , i)=>{
                        // console.log(a);
                        let prodRef = `/product-details?productCode=${a.productId.productCode}&productCategory=${a.productId.productCategory}`
                        return(
                            <>
                            <div className="product-card">
                                <div className="product-image">
                                    <a href={prodRef}>
                                        <img src={a.productId.productImage[0]} alt="Latest Product" />
                                    </a>
                                    <button className="card-btn" onClick={()=>{removeFromFavourite(a.productId)}}>
                                        <BsSuitHeartFill />
                                    </button>
                                    <button type="button" className=" quick-view" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" onClick={()=>viewQuick(a.productId)} >Quick view</button>
                                </div>
                                <div className="product-info">
                                    <h4 className="product-brand">{a.productId.productName}</h4>
                                    {
                                        a.productId.discountedPrice 
                                        ? 
                                        <div id='discounted-price'>
                                            <span className="price">Rs. {a.productId.price}</span>
                                            <span className="discountedPrice text-green">Rs. {a.productId.discountedPrice}</span>
                                        </div>
                                        :
                                        <div id='actual-price'>
                                            <span className="actual-price">Rs. {a.productId.price}</span>
                                        </div>
                                    }

                                    {/* <br /> */}
                                    <button id='add-to-bag' onClick={(e)=>{addToBag(a.productId);e.preventDefault();}}>Move to Bag</button>
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
            <div className="modal fade quick-view" id="exampleModal" tabIndex={-1}  aria-labelledby="exampleModalLabel" aria-hidden="true">
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