import React from "react";
import Header from "./Header";
import PageControl from "./PageControl";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PageControl />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<ContactMe />} />

      </Routes>
    </Router>
  );
}

export default App;