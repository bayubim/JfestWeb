import Logo from "../asset/Logo JFest Large.svg";
import BtnDarkLogin from "../asset/BtnDarkLogin.png";
import Spiders from "../asset/Spiders.png";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-items">
          <img className="logo" src={Logo} alt="Backdrop" />
          <ul>
            <li>
              <a href="#beranda">BERANDA</a>
            </li>
            <li>
              <a href="#tentang">TENTANG</a>
            </li>
            <li>
              <a href="#kegiatan">KEGIATAN</a>
            </li>
          </ul>
        </div>

        <div className="button-login">
          <a href="">
            <img className="btn-login" src={BtnDarkLogin} alt="BtnLogin" />
          </a>
          <img className="spiders" src={Spiders} alt="Spiders" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
