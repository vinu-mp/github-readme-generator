import "./styles/app.scss";
import React from "react";
import Layout from "./Pages/Layout/Layout";
import NotFound from "./Pages/NotFound/NotFound";

import { EditorContextProvider } from "./store/editor-context";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <EditorContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </EditorContextProvider>
  );
};
export default App;
