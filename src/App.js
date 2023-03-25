import "./styles/app.scss";
import React from "react";
import Header from "./Components/Header/Header";
import EditorHome from "./Pages/EditorHome/EditorHome";
import About from "./Pages/About/About";
import { EditorContextProvider } from "./store/editor-context";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <EditorContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<EditorHome />}>
            <Route index element={<EditorHome />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </EditorContextProvider>
  );
};
export default App;
