import React, { useState } from "react";
import "../styles/checkout.css";
import Number1 from "../asset/Number1.svg";
import Number2 from "../asset/Number2.svg";
import Number3 from "../asset/Number3.svg";
import ButtonBayar from "../asset/ButtonBayar.svg";

const Checkout = () => {
  const events = [
    { name: "Cosplay Competition", category: "Lomba", price: 40000 },
    { name: "Original Character", category: "Lomba", price: 40000 },
    { name: "Music Performance", category: "Ticket-Kegiatan", price: 30000 },
  ];

  return (
    <div className="checkout">
      <div className="event-checkout">
        <div className="step">
          <ul className="tabs">
            <li className="tab active">
              <img src={Number1} />
              Checkout
            </li>
            <li className="tab">
              <img src={Number2} />
              Payment
            </li>
            <li className="tab">
              <img src={Number3} />
              Review
            </li>
          </ul>
        </div>
        <div className="content-checkout">
          <ul className="events-ul">
            {events.map((event, index) => (
              <li key={index} className="event-list">
                <div>
                  <span className="name">{event.name}</span>
                  <span className="category">{event.category}</span>
                </div>
                <span className="price">Rp {event.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="detail-checkout">
        <h1>Detail</h1>
        <div>
          <p className="detail-price">Subtotal</p>
          <p>Rp 115.000</p>
        </div>

        <div>
          <p className="detail-price">Biaya Admin</p>
          <p>Rp 5.000</p>
        </div>

        <div className="total-checkout">
          <p className="detail-price">Total</p>
          <p>Rp 120.000</p>
        </div>

        <img src={ButtonBayar} />
      </div>
    </div>
  );
};

export default Checkout;
