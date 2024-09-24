import "./styles/styles.css";
import "./styles/icons.css";
import "./styles/navigation.css";
import "./styles/home.css";
import "./styles/footer.css";
import "./styles/shop.css";
import "./styles/breadcrumb.css";
import "./styles/product.css";

import React from "react";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop.jsx";
import Home from "./pages/Home.jsx";
import Account from "./pages/Account.jsx";
import Login from "./pages/Login.jsx";
import Product from "./pages/Product.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Footer from "./components/footer.jsx";
import Breadcrumb from "./components/breadcrumb.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Component nav.jsx*/}
        <Breadcrumb />
        <Routes>
          {/* Routing to different pages*/}

          <Route path="/" element={<Home />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/product/:imageId" element={<Product />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
