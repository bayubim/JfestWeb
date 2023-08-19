import ButtonDetail from "../asset/Button-Detail.png";
import FrameLomba from "../asset/frame-lomba.png";
import FrameKegiatan from "../asset/frame-kegiatan.png";
import KategoriLomba from "../asset/kategori-lomba.png";
import KategoriKegiatan from "../asset/kategori-kegiatan.png";

import "../styles/card.css";

export const eventData = [
  {
    title: "Signing Competition",
    frame: FrameLomba,
    category: "lomba",
    icon: KategoriLomba,
    price: "Rp 45.000",
    priceForMahasiswa: "Rp 50.000",
    priceForUmum: "Rp 60.000",
    description:
      "Festival yang diadakan dan didukung oleh Institut Teknologi dan Bisnis STIKOM Bali dan merupakan satu-satunya Festival yang mengangkat budaya Jepang di lingkungan Kampus serta rutin dihadiri oleh Konsulat Jenderal Jepang di Denpasar Faktor tersebut menjadikan JFEST sebagai salah satu sarana kami mengenalkan budaya Jepang dengan cara yang menyenangkan dan dinikmati oleh berbagai kalangan baik di dalam maupun di luar lingkungan kampus",
  },
  {
    title: "Cosplay Competition",
    frame: FrameLomba,
    category: "lomba",
    icon: KategoriLomba,
    price: "Rp 45.000",
    priceForMahasiswa: "Rp 50.000",
    priceForUmum: "Rp 60.000",
    description:
      "Festival yang diadakan dan didukung oleh Institut Teknologi dan Bisnis STIKOM Bali dan merupakan satu-satunya Festival yang mengangkat budaya Jepang di lingkungan Kampus serta rutin dihadiri oleh Konsulat Jenderal Jepang di Denpasar Faktor tersebut menjadikan JFEST sebagai salah satu sarana kami mengenalkan budaya Jepang dengan cara yang menyenangkan dan dinikmati oleh berbagai kalangan baik di dalam maupun di luar lingkungan kampus",
  },
  {
    title: "Music Performance",
    frame: FrameKegiatan,
    category: "kegiatan",
    icon: KategoriKegiatan,
    price: "Rp 45.000",
    priceForMahasiswa: "Rp 50.000",
    priceForUmum: "Rp 60.000",
    description:
      "Festival yang diadakan dan didukung oleh Institut Teknologi dan Bisnis STIKOM Bali dan merupakan satu-satunya Festival yang mengangkat budaya Jepang di lingkungan Kampus serta rutin dihadiri oleh Konsulat Jenderal Jepang di Denpasar Faktor tersebut menjadikan JFEST sebagai salah satu sarana kami mengenalkan budaya Jepang dengan cara yang menyenangkan dan dinikmati oleh berbagai kalangan baik di dalam maupun di luar lingkungan kampus",
  },
  {
    title: "Okabeyashi",
    frame: FrameKegiatan,
    category: "kegiatan",
    icon: KategoriKegiatan,
    price: "Rp 45.000",
    priceForMahasiswa: "Rp 50.000",
    priceForUmum: "Rp 60.000",
    description:
      "Festival yang diadakan dan didukung oleh Institut Teknologi dan Bisnis STIKOM Bali dan merupakan satu-satunya Festival yang mengangkat budaya Jepang di lingkungan Kampus serta rutin dihadiri oleh Konsulat Jenderal Jepang di Denpasar Faktor tersebut menjadikan JFEST sebagai salah satu sarana kami mengenalkan budaya Jepang dengan cara yang menyenangkan dan dinikmati oleh berbagai kalangan baik di dalam maupun di luar lingkungan kampus",
  },
  {
    title: "Photo Figure",
    frame: FrameLomba,
    category: "lomba",
    icon: KategoriLomba,
    price: "Rp 45.000",
    priceForMahasiswa: "Rp 50.000",
    priceForUmum: "Rp 60.000",
    description:
      "Festival yang diadakan dan didukung oleh Institut Teknologi dan Bisnis STIKOM Bali dan merupakan satu-satunya Festival yang mengangkat budaya Jepang di lingkungan Kampus serta rutin dihadiri oleh Konsulat Jenderal Jepang di Denpasar Faktor tersebut menjadikan JFEST sebagai salah satu sarana kami mengenalkan budaya Jepang dengan cara yang menyenangkan dan dinikmati oleh berbagai kalangan baik di dalam maupun di luar lingkungan kampus",
  },
  {
    title: "Something",
    frame: FrameLomba,
    category: "lomba",
    icon: KategoriLomba,
    price: "Rp 45.000",
    priceForMahasiswa: "Rp 50.000",
    priceForUmum: "Rp 60.000",
    description:
      "Festival yang diadakan dan didukung oleh Institut Teknologi dan Bisnis STIKOM Bali dan merupakan satu-satunya Festival yang mengangkat budaya Jepang di lingkungan Kampus serta rutin dihadiri oleh Konsulat Jenderal Jepang di Denpasar Faktor tersebut menjadikan JFEST sebagai salah satu sarana kami mengenalkan budaya Jepang dengan cara yang menyenangkan dan dinikmati oleh berbagai kalangan baik di dalam maupun di luar lingkungan kampus",
  },
];

const Card = ({ selectedCategory }) => {

  const filteredData = eventData.filter((event) => {
    return selectedCategory === "all" || event.category === selectedCategory;
  });

  return (
    <div className="card-list">
      {filteredData.map((event, index) => (
        <div className="card-item" key={index}>
          <img className="frame" src={event.frame} alt="frame-lomba" />
          <div>
            <h2>{event.title}</h2>
            <img src={event.icon} alt="kategori-lomba" />
          </div>
          <p>{event.price}</p>
          <img
            className="detail-button"
            src={ButtonDetail}
            alt="button-detail"
          />
        </div>
      ))}
    </div>
  );
};

export default Card;
