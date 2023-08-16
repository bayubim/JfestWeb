import MainBg from "../asset/main event bg.png";
import TicketEvent from "../asset/Ticket Event.png";
import TicketDate from "../asset/Ticket Date.png";
import Spider from "../asset/Spider-Md.png";
import "../styles/mainEvent.css";

const MainEvent = () => {
  return (
    <div className="main-event">
      <img className="background-main" src={MainBg} />
      <div className="ticket">
        <div>
          <img className="ticket-event" src={TicketEvent} />
          <img className="spider" src={Spider} />
        </div>
        <img className="ticket-date" src={TicketDate} />
      </div>
    </div>
  );
};
export default MainEvent;
