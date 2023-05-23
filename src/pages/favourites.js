import { BiChevronLeft } from 'react-icons/bi'
import './favourites.css'
import ShopProducts from '../components/ShopProducts'
import { useState, useEffect} from 'react'
import axios from 'axios'

export default function Favourites(){

    // Products display 
    const [product , setProduct] = useState([])
    const url = `https://server-dot-sanjoli-sarees-testenvironment.el.r.appspot.com/getproduct/`
    
    
    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            setProduct(res.data.data)
            // console.log(res.data.data);
        }).catch((err)=>{
            // alert(err)
            console.log("Server not started");
        });
        
    },[])


    return(
        <>
        <section className="favourite">
            {/* Heading and Back  */}
            <div className='container mt-3'>
                <a href='/'><BiChevronLeft />Back</a>
                <div className='page-heading mb-3 pb-3'>
                    <h2>Favourites</h2>
                </div>
            </div>

            <div className="container shop-products fav-products">
                <div className="col-md-10 mx-auto">
                    <ShopProducts product={product} />
                </div>
            </div>
        </section>
        </>
    )
}