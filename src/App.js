import "./App.css";
import NavBar from "./component/navbar";
import Home from "./component/home";
import EventDetail from "./component/eventDetail";
import History from "./component/history";
import Footer from "./component/footer";

function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <EventDetail/>
      <History/>
      <Footer />
    </div>
  );
}

export default App;
