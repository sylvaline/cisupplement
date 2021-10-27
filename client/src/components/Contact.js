import React, {useEffect} from 'react'
import ContactForm from "./ContactForm";

import { Link } from "react-router-dom";

function Contact() {

  useEffect(()=>{
    window.scrollTo({top:0, behavior:'smooth'})
  },[])

    
    return (
      <div className="contact_us">
      <div className="contact_us_inner">
        <div className="address">
        <div className="logo">
            <Link to="/"><img src="\image\spacelogo.png" alt="" /></Link>
            </div>
            <p>
            <a
                  href="mailto:okekesylvaline.com?subject=From CI Supplements"
                  alt="EmailCI Supplements"
                >
                  cisupplements@gmail.com
                </a>
            </p>
            <p>
            <a
                  href="tel:08167424880"
                  alt="CI supplements"
                >
                  08025363537
                </a>
            </p>
            <p>
            <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
            </p>
        </div>
        <div className="contact_form">
          <h2>Business Hours</h2>
          <div className="">
          <span>Sunday - Friday </span>
          <span>0:8am - 0:6pm</span>
          </div>
          <div className="form_div">
            <ContactForm />
          </div>
        </div>
        
      </div>
    </div>
    )
}

export default Contact
