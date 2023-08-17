import React from 'react';
import ButtonDetail from '../asset/Button-Detail.png';
import eventData from '../component/eventData';
import '../styles/card.css';

const Card = ({ selectedCategory }) => {
  const filteredData = eventData.filter((event) => {
    return selectedCategory === 'all' || event.category === selectedCategory;
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
          <img className="detail-button" src={ButtonDetail} alt="button-detail" />
        </div>
      ))}
    </div>
  );
};

export default Card;
