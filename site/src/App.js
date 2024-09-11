import "./styles/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Shop from "./pages/Shop.jsx";
import Home from "./pages/Home.jsx";
import Account from "./pages/Account.jsx";
import Login from "./pages/Login.jsx";
import Product from "./pages/Product.jsx";
import NavBar from "./components/navigation.jsx";
import Footer from "./components/footer.jsx";
function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
