import React from "react";
import './navbar.css';

const Header = ()=> {

    return (

        <>
  
        <nav className="navbar" bg="light">
            <div className="nav-top">
            <h1 href="#home">SwipTory</h1>
              <span className="register" href="#signup">Register</span>
              <span className="signin" href="#signin">Signin</span>
            </div>
        </nav>
      </>
    )

}

export default Header