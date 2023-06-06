import React from "react";
import cssFooter from "../style.css/Footer.module.css";
import logo from "../footer-img.png";
function Footer() {
  return (
    <footer className={cssFooter.footer}>
      <img src={logo} alt="фото" className={cssFooter.footerLogo} />
      <ul className={cssFooter.footer_link}>
        <li>
          <a href="#">Партнерам</a>
        </li>
        <li>
          <a href="#">Разработчикам</a>
        </li>
        <li>
          <a href="#">Вакансии</a>
        </li>
      </ul>
      <span className={cssFooter.footer_copyright}>ООО “интукод”, 2020г.</span>
    </footer>
  );
}
export default Footer;
