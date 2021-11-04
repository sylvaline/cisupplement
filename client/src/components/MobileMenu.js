import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Slide from "react-reveal/Slide";

function MobileMenu({ gallery, testimonial, benefits, contact, about }) {
  const [isMenu, setMenu] = useState(false);

  const closeMenu = () => setMenu(false);
  // const [navScroll, setNavScroll] = useState(false);

  // const nav_on_scroll = () => {
  //   if (window.scrollY >= 50) {
  //     setNavScroll(true);
  //   } else {
  //     setNavScroll(false);
  //   }
  // };

  // window.addEventListener("scroll", nav_on_scroll);

  return (
    <div className="mobile_nav_menu">
      <div className="nav_header">
        <div className="logo">
          <Link to="/">
            
            <img src="\images\logo.jpg" alt="" />
          </Link>
        </div>
        <div
          onClick={() => setMenu(!isMenu)}
          className={isMenu ? "menu-toggle open" : "menu-toggle"}
        >
          <div className="hamburger">
            <span></span>
            <span></span>
          </div>
          <div className="cross">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div>
        <Slide left>
          <ul className={isMenu ? "ul open" : "ul"}>
            <li
              onClick={() => {
                gallery();
                setMenu(false);
              }}
            >
              Gallery
            </li>
            {/* <li
              onClick={() => {
                about();
                setMenu(false);
              }}
            >
              About us
            </li> */}
            <li>About us</li>
            <li
              onClick={() => {
                benefits();
                setMenu(false);
              }}
            >
              Benefits of SupperLife
            </li>
            <li
              onClick={() => {
                testimonial();
                setMenu(false);
              }}
            >
              Testimonial
            </li>
            <li
              onClick={() => {
                contact();
                setMenu(false);
              }}
            >
              Contact us
            </li>
            <li className="menu_social_icons">
              <p>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-instagram"></i>
              </p>
            </li>
            <li onClick={closeMenu} className="contact">
              <NavLink to="/contact"></NavLink>
            </li>
          </ul>
        </Slide>
      </div>
    </div>
  );
}

export default MobileMenu;
