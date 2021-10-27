import React from "react";
import { Link } from "react-router-dom";
// import Login from './Login'
import MobileMenu from "./MobileMenu";

function Nav({ gallery, testimonial, benefits, contact, about}) {
  // const [is_modal, setModal] = useState(false)
  return (
    <>
      <div className="nav">
        <div className="nav_inner">
          <div className="logo">
            <h2>
              <Link to="/">CIS</Link>
            </h2>
          </div>
          <ul className="nav_host">
            <li onClick={() => gallery()}>Gallery</li>
            {/* <li onClick={() => about()}>About us</li> */}
            <li>About us</li>
            <li onClick={() => benefits()}>Benefits of SupperLife</li>
            <li onClick={() => testimonial()}>Testimonial</li>
            <li onClick={() => contact()}>Contact us</li>
          </ul>
        </div>
      </div>
      <div className="nav_mobile">
        <MobileMenu gallery={gallery} testimonial={testimonial} benefits={benefits} contact={contact} about={about} />
      </div>
    </>
  );
}

export default Nav;
