import React, { useState } from "react";
import CartItem from "./cartItem";
import NavBar from "./navBar";

export const products = [
  {
    name: "plate 1",
    price: 1.99,
    image: "plate1.jpeg",
    description: "zxc123",
  },
  {
    name: "plate 2",
    price: 2.99,
    image: "plate2.jpeg",
    description: "acc1723",
  },
  {
    name: "plate 3",
    price: 3.99,
    image: "plate3.jpeg",
    description: "zbzc53",
  },
  {
    name: "plate 4",
    price: 4.99,
    image: "plate4.jpeg",
    description: "1zad53",
  },
  {
    name: "plate 5",
    price: 5.99,
    image: "plate5.jpeg",
    description: "5123",
  },
  {
    name: "plate 6",
    price: 6.99,
    image: "plate6.jpeg",
    description: "ad123c53",
  },
];

export default function MainScreen() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedQty, setSelectedQty] = useState(1);

  function addToCart() {
    if (selectedProduct) {
      setCart(prevCart => [
        ...prevCart,
        { ...selectedProduct, qty: selectedQty },
      ]);
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...selectedProduct, qty: selectedQty }])
      );
      setSelectedProduct(null);
      setSelectedQty(1);
    }
  }

  // function toggleCart() {
  //   setShowCart(prevShowCart => !prevShowCart);
  // }
  const toggleCart = () => {
    setShowCart(!showCart);
  };
  return (
    <div>
      <NavBar />
      <div className="cart-button" onClick={toggleCart}>
        Open/Close Cart ({cart.length})
        {showCart && <CartItem cart={cart} onClose={toggleCart} />}
      </div>
      <div className="product-main">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-section"
            style={{ display: "inline-block", width: "50%" }}
          >
            <img
              className="product-img"
              src={`/${product.image}`}
              alt="product image list"
              style={{ cursor: "pointer", maxWidth: "100%" }}
            />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <p>{product.description}</p>
            {product === selectedProduct ? (
              <>
                <input
                  type="number"
                  value={selectedQty}
                  onChange={event =>
                    setSelectedQty(parseInt(event.target.value))
                  }
                  min="1"
                  max="10"
                />
                <button onClick={addToCart} className="select-add-button">
                  Add to Cart
                </button>
              </>
            ) : (
              <button
                onClick={() => setSelectedProduct(product)}
                className="select-add-button"
              >
                Select
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
