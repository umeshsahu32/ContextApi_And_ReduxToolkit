import { Fragment } from "react";
import ShopCart from "./components/ShopCart.jsx";
import ShopHome from "./components/ShopHome.jsx";
import ShopHeader from "./components/ShopHeader.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <ShopHeader />
        <Routes>
          <Route path="/" element={<ShopHome />} />
          <Route path="/cart" element={<ShopCart />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
