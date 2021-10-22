import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'
import MobileMenu from './MobileMenu'

function Nav() {
    const [is_modal, setModal] = useState(false)
    return (
        <>
        <div className="nav">
            <div className="nav_inner">
                <div className="logo"><h2><Link to="/">CISupplements</Link></h2></div>
                <ul className="nav_host">
                <li>
                        <Link to="/cart" href="" className="nav_items">
                            Gallery
                        </Link>
                        
                    </li>
                    <li>
                        <Link to="/cart" href="" className="nav_items">
                            About us
                        </Link>
                        
                    </li>
                    <li>
                    <Link to="/cart" href="" className="nav_items">
                            Benefits of STC30
                        </Link>
                    </li>

                    <li>
                    <Link to="/cart" href="" className="nav_items">
                            Contact us
                        </Link>
                    </li>
                    
                </ul>
            </div>
            
        </div>
        <div className="nav_mobile">
          <MobileMenu />
        </div>
        </>
    )
}

export default Nav
