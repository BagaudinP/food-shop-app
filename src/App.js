import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="clear">
      <div className="container clear">
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/notfound" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
