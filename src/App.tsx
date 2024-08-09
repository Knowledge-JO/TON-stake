import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Pair from "./pages/Pair";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pool/:pair" element={<Pair />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
