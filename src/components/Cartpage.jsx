import React, { useState } from "react";
import { Link } from "react-router-dom";

const CartPage = ({ cart }) => {
  const groupedItems = cart.reduce((acc, item) => {
    const existing = acc.find((i) => i.title === item.title);
    if (existing) {
      existing.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const [items, setItems] = useState(groupedItems);

  const handleQuantityChange = (index, delta) => {
    setItems((prev) => {
      return prev.map((item, i) => {
        if (i === index) {
          const newQuantity = item.quantity + delta;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      });
    });
  };

  const calculateTotal = () => {
    return items.reduce((acc, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return acc + price * item.quantity;
    }, 0);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">🛒 Your Cart</h2>
      {items.length > 0 ? (
        <div className="space-y-4">
          {items.map((item, index) => {
            const price = parseFloat(item.price.replace("$", ""));
            const itemTotal = price * item.quantity;
            return (
              <div
                key={index}
                className="bg-white p-4 rounded shadow flex justify-between items-center"
              >
                <div>
                  <span className="font-semibold">{item.title}</span>
                  <br />
                  <span className="text-gray-500">Price: ${price}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleQuantityChange(index, -1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(index, 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
                <div className="font-bold">Total: ${itemTotal}</div>
              </div>
            );
          })}
          <div className="text-right font-bold text-lg mt-4">
            Total: ${calculateTotal()}
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
      <Link to="/" className="mt-6 inline-block text-blue-500 hover:underline">
        ← Back to Products
      </Link>
    </div>
  );
};

export default CartPage;
