import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./component/navbar";
import Home from "./component/home";
import EventDetail from "./component/eventDetail";
import Checkout from "./component/checkout";
import Payment from "./component/payment";
import History from "./component/history";
import Footer from "./component/footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventDetail" element={<EventDetail />} />
        <Route path="/history" element={<History />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
