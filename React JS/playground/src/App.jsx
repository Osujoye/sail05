import React from "react";
import Header from "./static/Header";
import Hero from "./components/block/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AxiosFetch from "./pages/AxiosFetch";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/axios" element={<AxiosFetch />} />
        </Routes>
      </BrowserRouter>

      {/* <Header />
      <Hero /> */}
    </div>
  );
};

export default App;
