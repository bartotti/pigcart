import React, { useState } from "react";
import CartItem from "./cartItem";
import NavBar from "./navBar";

export const products = [
  {
    id: 1,
    name: "plate 1 Container",
    price: 1.99,
    image: "plate1.jpeg",
    description: "zxc123",
    category: "Container",
  },
  {
    id: 2,
    name: "plate 2 Utensil",
    price: 2.99,
    image: "plate2.jpeg",
    description: "acc1723",
    category: "Utensil",
  },
  {
    id: 3,
    name: "plate 3 Bag",
    price: 3.99,
    image: "plate3.jpeg",
    description: "zbzc53",
    category: "Bag",
  },
  {
    id: 4,
    name: "plate 4 Accessory",
    price: 4.99,
    image: "plate4.jpeg",
    description: "1zad53",
    category: "Accessory",
  },
  {
    id: 5,
    name: "plate 5 Container",
    price: 5.99,
    image: "plate5.jpeg",
    description: "5123",
    category: "Container",
  },
  {
    id: 6,
    name: "plate 6 Utensil",
    price: 6.99,
    image: "plate6.jpeg",
    description: "ad123c53",
    category: "Utensil",
  },
];

export default function MainScreen() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedQty, setSelectedQty] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  const filterProducts = category => {
    setSelectedCategory(category);
  };

  const resetFilter = () => {
    setSelectedCategory(null);
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

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

      <div className="filter-section">
        <label className="filter-option">
          <input
            type="radio"
            name="category"
            checked={!selectedCategory}
            onChange={resetFilter}
          />
          All
        </label>
        <label className="filter-option">
          <input
            type="radio"
            name="category"
            checked={selectedCategory === "Container"}
            onChange={() => filterProducts("Container")}
          />
          Container
        </label>
        <label className="filter-option">
          <input
            type="radio"
            name="category"
            checked={selectedCategory === "Utensil"}
            onChange={() => filterProducts("Utensil")}
          />
          Utensil
        </label>
        <label className="filter-option">
          <input
            type="radio"
            name="category"
            checked={selectedCategory === "Bag"}
            onChange={() => filterProducts("Bag")}
          />
          Bag
        </label>
        <label className="filter-option">
          <input
            type="radio"
            name="category"
            checked={selectedCategory === "Accessory"}
            onChange={() => filterProducts("Accessory")}
          />
          Accessory
        </label>
      </div>
      <div className="product-container">
        <div className="product-main">
          {filteredProducts.map((product, index) => (
            <div key={index} className="product-section">
              <img
                className="product-img"
                src={`/${product.image}`}
                alt="product image list"
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
    </div>
  );
}
