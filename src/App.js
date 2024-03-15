import "./App.css";
import Home from "./pages/Home";
import Topbar from "./components/topbar";
import ProductSearchListing from "./pages/ProductSearchListing";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div className="top-0 sticky">
        <Topbar />
      </div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/search" element={<ProductSearchListing />} />
      </Routes>
    </div>
  );
};

export default App;
