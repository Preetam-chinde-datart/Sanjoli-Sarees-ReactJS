import { BiChevronLeft } from 'react-icons/bi'
import './favourites.css'
import { useState, useEffect} from 'react'
import axios from 'axios'
import FavouriteProducts from '../components/FavouritesProducts'

export default function Favourites(){

    // Products display 
    const [product , setProduct] = useState([])
    const url = process.env.REACT_APP_TEST_LINK
    

    
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDZiNTJhNzViYmE4M2QyOTM4M2EyNWEiLCJpYXQiOjE2ODUzMzMwNDgsImV4cCI6MTY4NTM3NjI0OH0.6cHoebb_2iJWC_BSDkIxYgwEeACZnmrGZ6AaYg6qj9U';
    const userId = '646b52a75bba83d29383a25a'
  
    const authAxios = axios.create({
        baseURL : url,
        headers : {
        'auth-jwt' : token,
        },
    })
    
    useEffect(()=>{
        authAxios.get(`${url}/getFavorite/${userId}`)
        .then((res)=>{
            setProduct(res.data.data[0].items)
            // console.log(res.data.data[0].items);
        }).catch((err)=>{
            // alert(err)
            console.log("Not getting favourites, check token");
        });
        
    },[])


    return(
        <>
        <section className="favourite">
            {/* Heading and Back  */}
            <div className='container mt-3'>
                <a href='/' className='backlink'><BiChevronLeft />Back</a>
                <div className='page-heading mb-3 pb-3'>
                    <h2>Favourites</h2>
                </div>
            </div>

            <div className="container shop-products fav-products">
                <div className="col-md-10 mx-auto">
                    <FavouriteProducts product={product}/>
                </div>
            </div>
        </section>
        </>
    )
}