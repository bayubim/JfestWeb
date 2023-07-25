import Logo from "../asset/Logo JFest Large.png";
import BtnDarkLogin from "../asset/BtnDarkLogin.png";
import Spiders from "../asset/Spiders.png";

const NavBar = () => {
  return (
    <nav>
      <img className="logo" src={Logo} alt="Backdrop" />
      <ul>
        <li>
          <a href="#">BERANDA</a>
        </li>
        <li>
          <a href="#">TENTANG</a>
        </li>
        <li>
          <a href="#">KEGIATAN</a>
        </li>
      </ul>
      <div>
        <a>
          <img className="btn-login" src={BtnDarkLogin} alt="BtnLogin" />
        </a>
        <img className="spiders" src={Spiders} alt="Spiders" />
      </div>
    </nav>
  );
};

export default NavBar;
