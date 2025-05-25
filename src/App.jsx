// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';

//  import CartPage from "./components/Cartpage";

// import ProductGrid from "./components/card";




// function App() {

  
  
//   const [cart, setCart] = useState([]); 
//    return (

    
//   //   <div className="min-h-screen bg-gray-100">
//   //     <ProductGrid />
//   //   </div>
//   <Router>
//       <div className="min-h-screen bg-gray-100">
//         {/* Navbar */}
//         <nav className="bg-white shadow-md p-4 flex justify-between">
//           <Link to="/" className="text-xl font-bold">🏪 Store</Link>
//           <Link to="/cart" className="text-blue-500 font-semibold">🛒 Cart ({cart.length})</Link>
//         </nav>

//         {/* Routes */}
//         <Routes>
//           <Route path="/" element={<ProductGrid cart={cart} setCart={setCart} />} />
//           <Route path="/cart" element={<CartPage cart={cart} />} />
//         </Routes>
//         <ToastContainer position="top-right" autoClose={2000} />
// {/* <ProductGrid/> */}
//       </div>
//     </Router>
//   );
// }

// export default App;





import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import CartPage from "./components/Cartpage";
import ProductGrid from "./components/card";

function App() {
  // Load cart from localStorage on first render
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Save to localStorage on cart change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-white shadow-md p-4 flex justify-between">
          <Link to="/" className="text-xl font-bold">🏪 Store</Link>
          <Link to="/cart" className="text-blue-500 font-semibold">🛒 Cart ({cart.length})</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<ProductGrid cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} />} />
        </Routes>

        <ToastContainer position="top-left" autoClose={2000} />
      </div>
    </Router>
  );
}

export default App;

