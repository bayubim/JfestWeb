import React from "react";
import { Link } from "react-router-dom";
import Logo from "../asset/Logo JFest Large.svg";
import BtnDarkLogin from "../asset/BtnDarkLogin.png";
import Spiders from "../asset/Spiders.png";
import "../styles/navbar.css";

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (  
    <nav>
      <div className="container">
        <div className="nav-items">
          <img className="logo" src={Logo} alt="Backdrop" />
          <ul>
            <li>
              <Link to="/" onClick={() => scrollToSection("beranda")}>
                BERANDA
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection("tentang")}>
                TENTANG
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection("kegiatan")}>
                KEGIATAN
              </Link>
            </li>
          </ul>
        </div>

        <div className="button-login">
          <a href="/">
            <img className="btn-login" src={BtnDarkLogin} alt="BtnLogin" />
          </a>
          <img className="spiders" src={Spiders} alt="Spiders" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
