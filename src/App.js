import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Story from "./components/Story";
import Support from "./components/Support";
import CG from "./components/CG";
import Special from "./components/Special";
import Character from "./components/Character";
import Person from "./components/Person";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/support" element={<Support />} />
        <Route path="/cgs" element={<CG />} />
        <Route path="/special" element={<Special />} />
        <Route path="/character" element={<Character />} />
        <Route path="/person/:id" element={<Person />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
