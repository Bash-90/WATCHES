import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Store from "./pages/Store";
import Cart from "./components/Cart";
import About from "./pages/About";
import Favourites from "./pages/Favourites";
import ProductDetails from "./components/ProductDetails";
import { useState } from "react";
import { AppProvider } from "./context";

function App() {
  const [cart, setCart] = useState([]);
  const addProduct = (newProduct) => {
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );
    if (existingProduct) {
      const updatedCart = cart.map((product) => {
        if (newProduct.id === product.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...newProduct, quantity: 1 }]);
    }
  };

  const removeProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const cartTotal = cart
    .reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0)
    .toFixed(2);

  const productQuntity = (id, value) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity:
              value === "inc" ? product.quantity + 1 : product.quantity - 1,
          };
        }
        return product;
      });
      return updatedCart.filter((product) => product.quantity > 0);
    });
  };

  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <Cart
          addProduct={addProduct}
          removeProduct={removeProduct}
          cartTotal={cartTotal}
          productQuntity={productQuntity}
          cart={cart}
          setCart={setCart}
        />
        <Routes>
          <Route path="/" element={<Home addProduct={addProduct} />} />
          <Route path="/store" element={<Store addProduct={addProduct} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/favourites"
            element={<Favourites addProduct={addProduct} />}
          />
          <Route
            path="/productdetails/:productId"
            element={<ProductDetails />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
