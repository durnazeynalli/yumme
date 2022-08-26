import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Categories from "./pages/Categories";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={ <Homepage/> } />
        <Route path="/drink" element={ <Categories title="Drinks" /> } />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
