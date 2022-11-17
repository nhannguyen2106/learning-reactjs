import logo from "./logo.svg";
import "./App.css";
import FormCreate from "./components/FormCreate";
import ProductsList from "./components/ProductsList";
import { Route, Routes } from "react-router-dom";
import MainContent from "./layouts/MainContent";

function App() {
  return (
    <div className="container">
      <div className="main">
        <Routes>
          <Route path="/products/add" element={<FormCreate />} />
          <Route path="/products" element={<MainContent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
