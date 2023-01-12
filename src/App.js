import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Vision from "./components/Vision";
import Work from "./components/Work";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Vision />
      <Work />
      <Contact />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
