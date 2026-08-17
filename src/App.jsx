import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import LoginPage from "./components/LoginPage";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";

import Cart from "./pages/Cart";
 export default function App() {
  return (
    <CartProvider>
      <Navbar />

      <Routes>
        {/* Normal Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        
          <Route path="/products" element={<Products />} />
        <Route
          path="/products/:productId"
          element={<ProductDetails />}
        />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
        

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartProvider>
  );
}

