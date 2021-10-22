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
                        <i className="fas fa-shopping-cart"></i>
                        </Link>
                        <div className="cart_count">
                            <p>0</p>
                        </div>
                        <p>Cart</p>
                    </li>
                    <li onClick={()=>setModal(!is_modal)}>
                      <span className="nav_items" >
                      <i className="far fa-user-circle"></i>
                      </span>
                        
                     
                        <p>Login</p>
                    </li>
                </ul>
            </div>
            <div className="nav_mobile">
          <MobileMenu />
        </div>
        </div>
        {
            is_modal && <Login setModal={setModal} />
        }
        </>
    )
}

export default Nav
