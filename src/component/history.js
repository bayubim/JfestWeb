import "../styles/history.css";
import ButtonCetak from "../asset/ButtonCetak.svg";
import ButtonJoin from "../asset/ButtonJoin.svg";

const History = () => {
  const items = [
    {
      name: "Cosplay Competition",
      category: "Lomba",
      button: ButtonJoin,
      price: "Rp 50.000",
    },
    {
      name: "Original Character",
      category: "Lomba",
      button: ButtonJoin,
      price: "Rp 50.000",
    },
    {
      name: "Music Performance",
      category: "Kegiatan",
      button: ButtonCetak,
      price: "Rp 35.000",
    },
  ];

  return (
    <div className="history">
      <div>
        <h1>Riwayat Pembelian</h1>
        <ul className="list">
          {items.map((item, index) => (
            <li key={index} className="item">
              <div className="left-history">
                <span className="name">{item.name}</span>
                <span className="text">{item.category}</span>
              </div>

              <div className="right-history">
                <span>{item.price}</span>
                <img className="button-history" src={item.button} alt="button-history"/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default History;
