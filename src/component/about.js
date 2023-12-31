import AboutCard from "../asset/About Card.png";
import Separator from "../asset/Separator.png";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about" id="tentang">
      <img className="about-card" src={AboutCard} alt="AboutCard" />

      <div>
        <h1>
          <span className="jfest">JFEST</span> <br />
          <span className="jcos">
            <sup>BY</sup> JCOS
          </span>
        </h1>

        <img className="separator" src={Separator} alt="Separator" />

        <p>
          Festival yang diadakan dan didukung oleh Institut Teknologi dan Bisnis
          STIKOM Bali dan merupakan satu-satunya Festival yang mengangkat budaya
          Jepang di lingkungan Kampus serta rutin dihadiri oleh Konsulat
          Jenderal Jepang di Denpasar.
        </p>
        <p>
          Faktor tersebut menjadikan JFEST sebagai salah satu sarana kami
          mengenalkan budaya Jepang dengan cara yang menyenangkan dan dinikmati
          oleh berbagai kalangan baik di dalam maupun di luar lingkungan kampus.
        </p>
      </div>
    </div>
  );
};

export default About;
