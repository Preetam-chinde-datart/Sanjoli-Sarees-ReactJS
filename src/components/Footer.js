import { RiFacebookFill } from 'react-icons/ri'
import { SiInstagram } from 'react-icons/si'


export default function Footer(){
    return(
        <>
        <section id="footer">
            <div className="container d-md-flex mt-4 mb-3">
                {/* Copyright  */}
                <div className="col-md-3 mb-4">
                    <img src={require("../images/Logo-Footer.png")} width="60%" alt="Company Logo" />
                    <p className="text-dark-gray pt-3">
                    Copyright © 2021 Sanjoli Sarees <br /> All rights reserved
                    </p>
                </div>
                {/* Quick Links */}
                <div className=" col-md-3 col-sm-6">
                    <h5>Quick Links</h5>
                    <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about.html">About</a>
                    </li>
                    <li>
                        <a href="/shop.html">Shop</a>
                    </li>
                    <li>
                        <a href="/contact.html">Contact</a>
                    </li>
                    </ul>
                </div>
                {/* Policies  */}
                <div className=" col-md-3 col-sm-6" style={{ paddingTop: "2rem !important" }}>
                    <h5>Policies</h5>
                    <ul>
                        <li>
                            <a href="#">Privacy policy</a>
                        </li>
                        <li>
                            <a href="#">Refund and Return Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms and Conditions</a>
                        </li>
                    </ul>
                </div>
                {/* Get Updated */}
                {/* <div className="col-md-3 pt-md-5 pt-3 mb-4">
                    <h5>Get Updates</h5>
                    <input
                    type="text"
                    name="update"
                    placeholder="Enter your email"
                    className="icon-rtl"
                    id="update"
                    />
                </div> */}

                {/* Social Links */}
                <div className="col-md-3">
                    <h5 className='pb-3'>Social Links</h5>
                    <div className="social-media">
                        <a className='facebok' href="https://www.facebook.com/sanjolisarees/"  target='_blank' rel='noreferrer'>
                            <RiFacebookFill />
                        </a>
                        <a className='insta' href="https://www.instagram.com/sanjolisarees/" target='_blank' rel='noreferrer'>
                            <SiInstagram />
                        </a>
                        {/* <a className='twiter' href="#">
                            <FaTwitter></FaTwitter>
                        </a>
                        <a className='linkedIn' href="#">
                            <FaLinkedinIn></FaLinkedinIn>
                        </a> */}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}