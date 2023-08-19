import React, { useState } from "react";
import { eventData } from "../component/card";
import "../styles/card.css";
import "../styles/eventDetail.css";
import ButtonDetail from "../asset/Button-Detail.png";
import IconBiayaMasuk from "../asset/icon-biaya-masuk.png";
import ButtonBuyNow from "../asset/button-buy-ticket.png";
import IconDescription from "../asset/icon-deskripsi.png";

export const Detail = ({ selectedTitle }) => {
  const detailData = eventData.filter((event) => {
    return selectedTitle === "Something" || event.title === selectedTitle;
  });

  return (
    <div className="detail">
      {detailData.map((event, index) => (
        <div className="item-detail" key={index}>
          <img className="frame-detail" src={event.frame} alt="frame-lomba" />
          <div className="side-detail">
            <h2>{event.title}</h2>
            <img className="icon-lomba" src={event.icon} alt="kategori-lomba" />

            <img className="icon-detail" src={IconBiayaMasuk} alt="" />
            <p>{event.priceForMahasiswa} Untuk Mahasiswa</p>
            <p>{event.priceForUmum} Untuk Umum</p>

            <img className="icon" src={ButtonBuyNow} alt="" />

            <img className="icon-detail" src={IconDescription} alt="" />
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const EventDetail = () => {
  const [selectedTitle, setSelectedTitle] = useState("Photo Figure");

  const handleButtonDetailClick = (title) => {
    console.log("Button Detail Clicked:", title);
    setSelectedTitle(title);
  };

  return (
    <div className="event-detail">
      <Detail selectedTitle={selectedTitle} />
      <h1>Kegiatan Lainnya</h1>
      <div className="card-list">
        {eventData.map((event, index) => (
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
              onClick={() => handleButtonDetailClick(event.title)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default EventDetail;
