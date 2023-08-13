import Logo from "../asset/Logo JFest Large.png";
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
              <a href="/home">BERANDA</a>
            </li>
            <li>
              <a href="/home">TENTANG</a>
            </li>
            <li>
              <a href="/home">KEGIATAN</a>
            </li>
          </ul>
        </div>

        <div className="button-login">
          <a href="https://jfest7.myserverhost.my.id/api/auth/google">
            <img className="btn-login" src={BtnDarkLogin} alt="BtnLogin" />
          </a>
          <img className="spiders" src={Spiders} alt="Spiders" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
