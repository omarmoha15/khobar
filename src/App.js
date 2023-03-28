import { Route, Routes } from "react-router-dom";
import "./App.css"

import Home from "./pages/Home";
import About from "./pages/About";

import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
       
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    
   
    
    </div>
  );
}

export default App;
