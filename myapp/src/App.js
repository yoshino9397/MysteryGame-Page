import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Top from "./components/Top";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/character" element={<Character />} />
        <Route path="/cgs" element={<CG/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/special" element={<Special/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
