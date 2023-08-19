import "./App.css";
import NavBar from "./component/navbar";
import Home from "./component/home";
import EventDetail from "./component/eventDetail";
import Footer from "./component/footer";

function App() {
  return (
    <div>
      <NavBar />
      {/* <Home/> */}
      <EventDetail/>
      <Footer />
    </div>
  );
}

export default App;
