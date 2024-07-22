import './App.css';
import Navbar from './Components/Navbar';
import Panel from './Components/Panel';
import Slide from './Components/Slide';
import React from "react";
import Cart from "./Components/Cart.jsx";
import Account from "./Components/Account.jsx";
import Home from './Components/Home.jsx';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Panel />
      <Routes>
        <Route path="/Account" element={<Account />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

// Rendering the App component using createRoot
const root = createRoot(document.getElementById("root"));
root.render(<App />);

export default App;

