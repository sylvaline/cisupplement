import React, { useRef } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Contact from "./Contact";
import Benefits from "./Benefits";
import Gallery from "./Gallery";
import Product from "./Product";
import Testimonial from "./Testimonial";
import Nav from "./Nav";

function Home() {

  const gallery = useRef(null)

  const testimonial = useRef(null)

  const contact = useRef(null)

  const benefits = useRef(null)

 

  const scroll_to_gallery = ()=>{
    window.scrollTo({behavior:"smooth", top:gallery.current.offsetTop-30})
  }

  const scroll_to_contact = ()=>{
    window.scrollTo({behavior:"smooth", top:contact.current.offsetTop-30})
  }

  const scroll_to_benefits = ()=>{
    window.scrollTo({behavior:"smooth", top:benefits.current.offsetTop-30})
  }

  const scroll_to_testimonial = ()=>{
    window.scrollTo({behavior:"smooth", top:testimonial.current.offsetTop-30})
  }


  

  return (
    <>
    <Nav gallery={scroll_to_gallery} testimonial={scroll_to_testimonial} contact={scroll_to_contact} benefits={scroll_to_benefits}/>

    <div className="home">
      <div className="home_landing">
      <Slide bottom>
        <div className="home_landing_inner">
          
          <h1>Welcome to CI Supplements</h1>
        
         <p>
            This is the home for everything health, Healthy life begins with
            your habits and suppliments
          </p>
         
          <div className="cta_btn">
            <button>
              <a
                href="https://wa.me/2347053187744"
                class="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy now
              </a>
            </button>
          </div>
          
        </div>
        </Slide>
      </div>
      <div className="home_product">

        
        <Product />
        
        <div ref={testimonial} className="d">
        <Fade bottom>
          <Testimonial />
        </Fade>
        </div>
     

        <div ref={benefits} className="d">
        <Fade bottom>
          <Benefits />
        </Fade>
        </div>
        

        <div ref={gallery} className="d">
        <Fade bottom>
          <Gallery />
        </Fade>
        </div>
        
        <div ref={contact} className="">
        <Fade bottom>
        <div className="home_items">
          <div className="title">
            <h2>CONTACTS</h2>
          </div>
          <div className="home_items_inner">
            <Contact />
          </div>
        </div>
        </Fade>
        </div>
        
       
      </div>
    </div>
    </>
  );
}

export default Home;
