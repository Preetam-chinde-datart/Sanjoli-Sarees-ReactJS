import './logout.css'
import { MdOutlineLogout } from "react-icons/md";
import { RxPerson } from 'react-icons/rx'
import { Bag } from 'react-bootstrap-icons'

export default function Logout(){

    const logOut = () => {
        localStorage.clear('userId')
        localStorage.clear('token')
        alert('Your account has been logged out successfully')
        window.location.href = '/'
    }

    const cancelLogOut = () => {
        window.location.href = '/account'
    }





    return(
        <>
            <section className='logout'>
                <div className='container mt-3'>
                    <a href='/' className='backlink'>&lt; Back</a>
                    <div className='page-heading mb-3 pb-3'>
                        <h2>My Account</h2>
                    </div>
                </div>

                <>
                    <div className="container d-md-flex">
                        {/* Navigation  */}
                        <div className="left-div">
                            {/* vertical navigation */}
                            <div className="vertical-navigation">
                            <ul>
                                <li className="profile">
                                <RxPerson />
                                <a href="/account">
                                    <button className="ver-nav" >
                                    My Profile
                                    </button>
                                </a>
                                </li>
                                <li className="order">
                                <Bag />
                                <a href="/order-history">
                                    <button className="ver-nav">
                                    My Orders
                                    </button>
                                </a>
                                </li>
                                <li className="logout">
                                <MdOutlineLogout />
                                <a href="/logout">
                                    <button className="ver-nav active">
                                    Logout
                                    </button>
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        {/* Logout  */}
                        <div className="right-div">
                            <div className="logout-section bg-white">
                                <div className="cancel fs-5" onClick={cancelLogOut}>X</div>
                                <div className="after-cancel">
                                    <div className="fs-3 mb-1">Logout</div>
                                    <p className='mb-1'>Are you sure you want to logout?</p>
                                    <div className="links d-flex justify-content-end">
                                        <button id='cancel' onClick={cancelLogOut} className='text-green '>No</button>
                                        <button id='logout' onClick={logOut} className='text-green ps-3'>Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>






            </section>
        </>
    )
}