import Home from "./pages/home/Home";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

import "./app.scss";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<List />} />
      <Route path="/hotels/:id" element={<Hotel />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
