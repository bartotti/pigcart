import React from "react";

export default function CartItem({ cart, onRemove, onUpdate }) {
  const totalAmount = cart
    ? cart.reduce((acc, item) => acc + item.qty * item.price, 0)
    : 0;

  function handleUpdateQty(itemId, newQty) {
    onUpdate(itemId, newQty);
  }

  return (
    <div>
      <p>--------------------------</p>
      {cart && cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
              <p>
                Qty:
                <input
                  type="number"
                  value={item.qty}
                  onChange={event =>
                    handleUpdateQty(item.id, parseInt(event.target.value))
                  }
                  min="1"
                  max="998"
                />
              </p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <div>
                <button onClick={() => onRemove(item.name)}>Remove</button>
              </div>
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
