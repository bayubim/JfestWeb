import "./App.css";
import NavBar from "./component/navbar";
import Header from "./component/header";
import About from "./component/about";
import Footer from "./component/footer";
import MainEvent from "./component/mainEvent";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <MainEvent />
      <Footer />
    </div>
  );
}

export default App;
