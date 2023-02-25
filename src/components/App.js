import React from "react";
import Header from "./Header";
import PageControl from "./PageControl";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PageControl />} />
      </Routes>
    </Router>
  );
}

export default App;