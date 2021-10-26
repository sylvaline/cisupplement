import React from 'react'
import Fade from "react-reveal/Fade";

function Gallery() {
    return (
        <div>
           
             <div className="home_items">
          <div className="title"><h2>GALLERY</h2></div>
         
          <div className="home_items_inner">
          <Fade bottom>
            <div className="home_items_image">
              <img src="\images\s.jpg" alt="sct30" />
            </div>
            </Fade>
            <Fade bottom>
            <div className="home_items_image">
              <img src="\images\b.jpg" alt="sct30" />
            </div>
            </Fade>
            <Fade bottom>
            <div className="home_items_image">
              <img src="\images\c.jpg" alt="sct30" />
            </div>
            </Fade>
            <Fade bottom>
            <div className="home_items_image">
              <img src="\images\e.jpg" alt="sct30" />
            </div>
            </Fade>
            <Fade bottom>
            <div className="home_items_image">
              <img src="\images\d.jpeg" alt="sct30" />
            </div>
            </Fade>
            <Fade bottom>
            <div className="home_items_image">
              <img src="\images\g.jpg" alt="sct30" />
            </div>
            </Fade>
          </div>
          
        </div>
      
        </div>
    )
}

export default Gallery
