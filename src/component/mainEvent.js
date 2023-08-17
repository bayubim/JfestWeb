import MainBg from "../asset/main event bg.png";
import TicketEvent from "../asset/Ticket Event.png";
import TicketDate from "../asset/Ticket Date.png";
import Spider from "../asset/Spider-Md.png";
import "../styles/mainEvent.css";

const MainEvent = () => {
  return (
    <div className="main-event">
      <img className="background-main" src={MainBg} alt="background-main" />

      <div className="ticket">
        <div>
          <img className="ticket-event" src={TicketEvent} alt="ticket-event" />
          <img className="spider" src={Spider} alt="" />
        </div>

        <img className="ticket-date" src={TicketDate} alt="ticket-date" />
      </div>
    </div>
  );
};
export default MainEvent;
