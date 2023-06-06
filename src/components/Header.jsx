import React from "react";
import logo from "../Group.png";
import cssHeder from '../style.css/Header.module.css'
function Header() {
  return (
    <div className={cssHeder.header}>
      <img src={logo} alt="" className="logo" />
      <ul className={cssHeder.list}>
        <li> <a href="#">Главная</a></li>
        <li> <a href="#">О нас</a></li>
        <li> <a href="#">О нас</a></li>
      
      </ul>
    </div>
  );
}
export default Header;
