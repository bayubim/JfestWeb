import React, { useState } from "react";
import "../styles/sideEvent.css";
import Separator from "../asset/Separator.png";
import Card from "../component/card";
import ButtonKegiatan from "../asset/Button-Kegiatan.png";
import ButtonSemua from "../asset/Button-Semua.png";
import ButtonLomba from "../asset/Button-Lomba.png";

const SideEvent = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  

  return (
    <div className="side-event">
      <h1>KEGIATAN</h1>
      <img src={Separator} alt="separator" />
      <div className="category">
        <img
          src={ButtonSemua}
          alt="button-semua"
          onClick={() => handleCategoryChange("all")}
        />
        <img
          src={ButtonLomba}
          alt="button-lomba"
          onClick={() => handleCategoryChange("lomba")}
        />
        <img
          src={ButtonKegiatan}
          alt="button-kegiatan"
          onClick={() => handleCategoryChange("kegiatan")}
        />
      </div>
      <Card selectedCategory={selectedCategory} />
    </div>
  );
};

export default SideEvent;
