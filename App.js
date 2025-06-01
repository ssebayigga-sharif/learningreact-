import logo from "./logo.svg";
import "./App.css";
import Car from "./Car";
import Mine from "./me";
import Person from "./person";
import Planes from "./Plane";

import Together from "./Together";
import High from "./High";
import Breed from "./Breed";
import Family from "./Family";
import Food from "./Food";
import Buttoni from "./Buttoni";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navigates from "./Navigates";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigates />} />

          <Route path="/about" element={<Food />} />

          <Route path="/contact" element={<High />} />

          <Route path="/Namutebi" element={<Breed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
