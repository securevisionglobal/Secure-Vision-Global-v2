import React from 'react'
import styled from './Footer.module.css'
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaMapPin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";



function Footer() {
  return (
    // <footer>
    //     <div classNameName={styled.upperfooter}>
    //         <div classNameName={styled.leftupper}>
    //             <img src="./logo1.jpg" alt="" />
    //         </div>
    //         <div classNameName={styled.rightupper}>
    //             <div classNameName={styled.about}>
    //                 <h6>About Us</h6>
    //                 <p>We're a premier recruiting consultancy dedicated to sourcing top talent, fostering organizational growth, and delivering exceptional results with personalized service.</p>
    //                 <a href="tel:+919876543210">+91987654321</a>
    //                 <a href="mailto:demo@mail.com">demo@mail.com</a>
    //             </div>
    //             <div classNameName={styled.connect}>
    //                 <h6> Connect</h6>
    //                 <a href="#"><FaLinkedin /> LinkedIn</a>
    //                 <a href="#"><FaInstagram /> Instagram</a>
    //                 <a href="#"><FaFacebook /> Facebook</a>
    //             </div>
    //         </div>
    //     </div>
    //     <div classNameName={styled.lowerfooter}>
    //         <p classNameName={styled.copyright}>© 2024 Secure Vision Global || All Right Reserved</p>
    //     </div>
    // </footer>
    <footer className={styled.footerdistributed}>
    <div className={styled.footerleft}>
        <img src="./logo1.png" alt="" />
        {/* <p className={styled.footercompanyname}>SecureVisionGlobal © 2023</p> */}
    </div>

    <div className={styled.footercenter}>
        <div>
            
            <p>
            <FaMapPin />
                <span>
                    <a href="https://maps.app.goo.gl/vaATfX38ibPX6ha19" target="_blank">
                        Plot no 22A, Pailipada sahakar Baugh <br/>Trombay, Mumbai - 400088
                </a>
                </span>
            </p>
        </div>
        <div>
            
            <p>
                <IoCall /><a href="tel:+919930033406">+91 99300 33406</a></p>
        </div>
        <div>
            
            <p>
                <IoIosMail/><a href="mailto:securevisionglobal@gmail.com">securevisionglobal@gmail.com</a></p>
        </div>
    </div>

    <div className={styled.footerright}>
        <p className={styled.footercompanyabout}>
            <span>About the company</span>
            We're a premier recruiting consultancy dedicated to sourcing top talent, fostering organizational growth, and delivering exceptional results with personalized service.
        </p>
        <div className={styled.footericons}>
            <a href="https://www.facebook.com/people/Secure-Vision-Global/61552253770120/?sfnsn=wiwspwa&mibextid=RUbZ1f">
            <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/securevisionglobal2023/">
            <AiFillInstagram />
            </a>
            <a href="https://www.linkedin.com/company/secure-vision-global/">
                <FaLinkedin />
            </a>
            <a href="https://wa.link/duoi9w">
            <IoLogoWhatsapp />
            </a>
        </div>
    </div>
</footer>


  )
}

export default Footer