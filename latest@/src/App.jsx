import React from "react";
import Header_timer from "./Components/Header_timer";
import Panel from "./Components/panel";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import Login from "./Components/Login";
import Signin from "./Components/signin";
import Slider from "./Components/Slider";
import MiniCard from "./Components/MiniCard";
import ProductCard from "./Components/ProductCard";
import InDevelopment from "./Components/InDevelopment";
import { Router } from "react-router";

const App = () => {
  return (
    <>
    <InDevelopment/>
      <Header_timer />
      <Router>
      </Router>
      <Navbar />
      <div className="font-[Inter] px-10">
        <Panel />
        <Slider />
        <MiniCard />
        <div className="product-card flex justify-between flex-wrap gap-15 py-10">
          <ProductCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
