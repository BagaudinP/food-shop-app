import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

import { Routes, Route } from "react-router-dom";

export const AppContext = React.createContext()

function App() {
  const [searchValue, setSearchValue] = React.useState('')

  return (
    <>
      <div className="clear">
        <AppContext.Provider value={{ searchValue, setSearchValue }}>
          <div className="container clear">
            <Header />
            <div className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </AppContext.Provider>
      </div>
      <Footer />
    </>
  );
}

export default App;
