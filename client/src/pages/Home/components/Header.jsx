import React from "react";
import { Link } from "react-router-dom";
import styled from "./Header.module.css"
function Header() {
  return (
    <>
      <nav className={styled.nav}>
        <div className={styled.logo}>
          <img src="./SVG_logo.png" alt="" />
        </div>
        <div className={styled.pages}>
          <Link to="/">Home</Link>
          <Link to="/login" className={styled.loginbtn}>Login</Link>
        </div>
      </nav>
    </>
  );
}

export default Header;