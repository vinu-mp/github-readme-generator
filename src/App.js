import "./styles/app.scss";
import React from "react";
import Header from "./Components/Header/Header";
import EditorHome from "./Pages/EditorHome/EditorHome";
import About from "./Pages/About/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<EditorHome />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};
export default App;
