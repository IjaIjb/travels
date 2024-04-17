import logo from "./logo.svg";
import "./App.css";
import teamsbg from "./assets/IATA-2.jpg";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Form from "./Form";

function App() {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waitlist" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
