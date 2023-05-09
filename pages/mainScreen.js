import React, { useState } from "react";
import CartItem from "./cartItem";
import NavBar from "./navBar";

export const products = [
  {
    id: 1,
    name: "plate 1",
    price: 1.99,
    image: "plate1.jpeg",
    description: "zxc123",
  },
  {
    id: 2,
    name: "plate 2",
    price: 2.99,
    image: "plate2.jpeg",
    description: "acc1723",
  },
  {
    id: 3,
    name: "plate 3",
    price: 3.99,
    image: "plate3.jpeg",
    description: "zbzc53",
  },
  {
    id: 4,
    name: "plate 4",
    price: 4.99,
    image: "plate4.jpeg",
    description: "1zad53",
  },
  {
    id: 5,
    name: "plate 5",
    price: 5.99,
    image: "plate5.jpeg",
    description: "5123",
  },
  {
    id: 6,
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
      const itemExists = cart.some(item => item.name === selectedProduct.name);
      if (itemExists) {
        setCart(prevCart =>
          prevCart.map(item =>
            item.name === selectedProduct.name
              ? { ...item, qty: item.qty + selectedQty }
              : item
          )
        );
      } else {
        setCart(prevCart => [
          ...prevCart,
          { ...selectedProduct, qty: selectedQty },
        ]);
      }
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...selectedProduct, qty: selectedQty }])
      );
      setSelectedProduct(null);
      setSelectedQty(1);
    }
  }

  function removeFromCart(itemId) {
    setCart(prevCart => prevCart.filter(item => item.name !== itemId));
    localStorage.setItem(
      "cart",
      JSON.stringify(cart.filter(item => item.name !== itemId))
    );
    console.log("imclick");
  }

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  function updateCartItemQty(productId, newQty) {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, qty: newQty } : item
      )
    );
    localStorage.setItem(
      "cart",
      JSON.stringify(
        cart.map(item =>
          item.id === productId ? { ...item, qty: newQty } : item
        )
      )
    );
  }
  return (
    <div>
      <NavBar />
      <div className="cart-button">
        <button onClick={toggleCart}>Open/Close Cart</button>({cart.length})
        {showCart && (
          <CartItem
            cart={cart}
            onRemove={removeFromCart}
            onUpdate={updateCartItemQty}
            onClose={toggleCart}
          />
        )}
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
