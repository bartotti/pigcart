import React from "react";

export default function CartItem({ cart }) {
  const totalAmount = cart
    ? cart.reduce((acc, item) => acc + item.qty * item.price, 0)
    : 0;

  return (
    <div>
      <p>--------------------------</p>
      {cart && cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
              <p>Qty: {item.qty}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>--------------------------</p>
            </div>
          ))}
          <p>Total: ${totalAmount.toFixed(2)}</p>
        </>
      ) : (
        <p>Nothing is in your cart</p>
      )}
    </div>
  );
}
