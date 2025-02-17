import React from "react";
import {Link} from "react-router-dom";

const Header = ()=>{

  return(
    <>
      <header>
      <Link to={'/'}></Link>
        <h1 class="logo"><Link to={'/'}>Minimal Portfolio Theme</Link></h1>
        <nav>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/portfolio'}>Portfolio</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
        </nav>              
      </header>
    </>
  )
}
export default Header;