import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import ProductView from "./components/productView/ProductView";
import ItemSlider from "./components/productView/SwiperItem/ItemSlider";

function App() {
  return (
    <>
      <Header />
      <ProductView />
      {/* <ItemSlider /> */}
    </>
  );
}

export default App;
