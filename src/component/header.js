import React, { useState, useEffect } from "react";
import Backdrop from "../asset/Backdrop.png";
import BackdropMobile from "../asset/BackdropMobile.png";
import Separator from "../asset/Separator.png";
import BtnKegiatan from "../asset/BtnDarkKegiatan.png";
import ScrollDown from "../asset/ScrollDown.png";
import "../styles/header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 769);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 769);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header" id="beranda">
      <img
        className="backdrop"
        src={isMobile ? BackdropMobile : Backdrop}
        alt="Backdrop"
      />
      <div>
        <h1>
          HYAKKI <br />
          YAGYO
        </h1>
        <img className="separator" src={Separator} alt="Separator" />
        <img className="button-kegiatan" src={BtnKegiatan} alt="BtnKegiatan" />
      </div>
      <img className="scroll-down" src={ScrollDown} alt="ScrollDown" />
    </div>
  );
};

export default Header;
