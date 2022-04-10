import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Top from "./components/Top";
import Home from "./components/Home";
import Story from "./components/Story";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/home" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/nav" element={<Navbar />} />
        {/* 
        <Route path="/character" element={<Character />} />
        <Route path="/cgs" element={<CG/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/special" element={<Special/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
