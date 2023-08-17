import "./App.css";
import NavBar from "./component/navbar";
import Header from "./component/header";
import About from "./component/about";
import Footer from "./component/footer";
import MainEvent from "./component/mainEvent";
import SideEvent from "./component/sideEvent";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <MainEvent />
      <SideEvent />
      <Footer />
    </div>
  );
}

export default App;
