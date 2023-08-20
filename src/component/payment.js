import React from "react";
import "../styles/payment.css";
import Number1 from "../asset/Number1.svg";
import Number2 from "../asset/Number2-light.svg";
import Number3 from "../asset/Number3.svg";
import ButtonBayar from "../asset/ButtonBayar.svg";
import LogoMbanking from "../asset/logo-mbanking.svg";
import LogoGopay from "../asset/logo-gopay.svg";
import LogoApplePay from "../asset/logo-applePay.svg";

const Payment = () => {
  return (
    <div className="payment">
      <div className="payment-box">
        <div className="detail-payment">
          <ul className="tab">
            <li className="tab-payment">
              <img src={Number1} alt="number" />
              Checkout
            </li>
            <li className="tab-payment">
              <img src={Number2} alt="number" />
              Payment
            </li>
            <li className="tab-payment">
              <img src={Number3} alt="number" />
              Review
            </li>
          </ul>
          <div className="detail-container">
            <h1>Detail</h1>
            <div>
              <p className="price-payment">Subtotal</p>
              <p>Rp 115.000</p>
            </div>
            <div>
              <p className="price-payment">Biaya Admin</p>
              <p>Rp 5.000</p>
            </div>
            <div className="price-total-payment">
              <p className="detail-price-payment">Total</p>
              <p>Rp 120.000</p>
            </div>
          </div>
        </div>

        <div className="metode-pembayaran">
          <h1>Metode Pembayaran</h1>
          <ul>
            <li>
              <input id="radio-1" name="radio" type="radio" defaultChecked />
              <label htmlFor="radio-1" className="radio-label">
                M-Banking
              </label>
              <img src={LogoMbanking} alt="M-Banking" />
            </li>
            <li>
              <input id="radio-2" name="radio" type="radio" />
              <label htmlFor="radio-2" className="radio-label">
                Gopay
              </label>
              <img src={LogoGopay} alt="Gopay" />
            </li>
            <li>
              <input id="radio-3" name="radio" type="radio" />
              <label htmlFor="radio-3" className="radio-label">
                Apple Pay
              </label>
              <img src={LogoApplePay} alt="Apple Pay" />
            </li>
          </ul>
          <img className="button-bayar" src={ButtonBayar} alt="button-bayar" />
        </div>
      </div>
    </div>
  );
};

export default Payment;
