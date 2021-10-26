import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Contact from "./Contact";
import Benefits from "./Benefits";
import Gallery from "./Gallery";
import Product from "./Product";
import Testimonial from "./Testimonial";

function Home() {
  return (
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

        <Fade bottom>
          <Testimonial />
        </Fade>

        <Fade bottom>
          <Benefits />
        </Fade>

        <Fade bottom>
          <Gallery />
        </Fade>

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
  );
}

export default Home;
