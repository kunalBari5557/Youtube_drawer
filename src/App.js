import logo from "./logo.svg";
import "./App.css";
import Sidenav from "./Sidenav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Analytics from "./components/Analytics";
import Shorts from "./components/Shorts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidenav />
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Analytics" element={<Analytics />} />
            <Route path="/Shorts" element={<Shorts />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
