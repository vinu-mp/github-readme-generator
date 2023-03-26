import React from "react";
import Header from "../../Components/Header/Header";
import EditorHome from "../../Pages/EditorHome/EditorHome";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<EditorHome />} />
      </Routes>
    </>
  );
};
export default App;
