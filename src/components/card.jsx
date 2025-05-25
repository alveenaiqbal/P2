
import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const products = [
  {
    id: 1,
    title: "Haier Model 1",
    category: "Air Conditioner",
    description: "Dalmo Mobile Air Conditioner, Cool 3-in-1 Air Conditioner, 9000 BTU, 3 Adjustable Fan Speeds and Output Directions (120 Range).",
    price: "$199",
    image:
      "https://www.electronica.pk/wp-content/uploads/2024/03/Dalmo-jpg.webp",
    addtocart: "Add To Cart",
  },
  {
    id: 2,
    title: "Dawlance Model A",
    category: "Refrigerator",
    description: "Orient Etron Series Metallic Door Inverter Refrigerators are sophisticatedly designed for modern interiors.",
    price: "$299",
    image:
      "https://www.alfatah.com.pk/wp-content/uploads/2024/08/image-1-300x300.jpg",
  },
  {
    id: 3,
    title: "Haier Model 2",
    category: "Refrigerator",
    description: "Orient Etron Series Metallic Door Inverter Refrigerators are sophisticatedly designed for modern interiors.",
    price: "$249",
    image:
      "https://www.almumtaz.com.pk/wp-content/uploads/2024/05/Haier-HRF-368-IARA-Digital-Inverter-Refrigerator-1.webp",
  },
  {
    id: 4,
    title: "GREE Model A1",
    category: "Air Conditioner",
    description: "Dalmo Mobile Air Conditioner, Cool 3-in-1 Air Conditioner, 9000 BTU, 3 Adjustable Fan Speeds and Output Directions (120 Range).",
    price: "$179",
    image:
      "https://s.alicdn.com/@sc04/kf/Hcee4d56615c5496585b43fdf3efd5e4eD.jpg",
  },
  {
    id: 5,
    title: "Dawlance Model B",
    category: "Washing Machine",
    description: "Washing And Spinning Capacity: 12 kg, Program: 8, Rotation Per Minute: 1300, Fuzzy Control: Yes.",
    price: "$159",
    image:
      "https://cubeonline.pk/cdn/shop/files/pk-wa4000c-522585-wa80ck4240bwrt-543483098__81623_zoom_1024x1024.png?v=1729842382",
  },
  {
    id: 6,
    title: "Haier Model 3",
    category: "Washing Machine",
    description: "Washing And Spinning Capacity: 12 kg, Program: 8, Rotation Per Minute: 1300, Fuzzy Control: Yes.",
    price: "$189",
    image:
      "https://whitehouse.com.pk/wp-content/uploads/2021/04/5.png",
  },
  {
    id: 7,
    title: "LG Model 1",
    category: "Refrigerator",
    description: "Orient Etron Series Metallic Door Inverter Refrigerators are sophisticatedly designed for modern interiors.",
    price: "$169",
    image:
      "https://cdnweb.microfridge.com/wp-content/uploads/sites/9/2024/07/17192351/Fridge_Thumbnail__0016_DFF180E2SSDB.jpg",
  },
  {
    id: 8,
    title: "Samsung Model A",
    category: "Refrigerator",
    description: "Orient Etron Series Metallic Door Inverter Refrigerators are sophisticatedly designed for modern interiors.",
    price: "$174",
    image:
      "https://images.tamkeenstores.com.sa/assets/new-media/GS78SS_16-18NOV.webp",
  },
  {
    id: 9,
    title: "Samsung Model B",
    category: "Refrigerator",
    description: "Orient Etron Series Metallic Door Inverter Refrigerators are sophisticatedly designed for modern interiors .",
    price: "$283",
    image:
      "https://www.alfatah.com.pk/wp-content/uploads/2024/08/image-1-300x300.jpg",
  },
  {
    id: 10,
    title: "Samsung Model C",
    category: "Refrigerator",
    description: "Orient Etron Series Metallic Door Inverter Refrigerators are sophisticatedly designed for modern interiors.",
    price: "$250",
    image:
      "https://newglacier.pk/wp-content/uploads/2024/08/9149-chr-c.jpg",
  },
  {
    id: 11,
    title: "Westpoint Model 1",
    category: "Grinder",
    description: "an appliance that combines the functions of a mixer and a grinder, allowing you to blend liquids and grind dry ingredients.",
    price: "$158",
    image:
      "https://shop.bajajelectricals.com/cdn/shop/files/410185-NEWTORNADO550WATTSMIXERGRINDER.jpg?v=1727081759",
  },
  {
    id: 12,
    title: "Westpoint Model 2",
    category: "Grinder",
    description: "an appliance that combines the functions of a mixer and a grinder, allowing you to blend liquids and grind dry ingredients.",
    price: "$145",
    image:
      "https://ik.imagekit.io/anscommerce/image/tr:e-usm-2-2-0.8-0.024,dpr-3,h-1000,w-1000,q-85,cm-pad_resize/data/philips/08sept2023/251-2022_05_18-5_7506.jpg",
  },
];

const ProductGrid = ({cart, setCart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedProducts, setSortedProducts] = useState(products);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const uniqueCategories = ["All", ...new Set(products.map((product) => product.category))];

  const filteredProducts = sortedProducts.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }
);
const addToCart = (product) => {
  setCart((prevCart) => [...prevCart, product]);
  
};

  const handleSort = (order) => {
    const sortedArray = [...products].sort((a, b) => {
      const priceA = parseInt(a.price.replace('$', '').replace(',', ''));
      const priceB = parseInt(b.price.replace('$', '').replace(',', ''));

      if (order === "lowToHigh") {
        return priceA - priceB;
      } else if (order === "highToLow") {
        return priceB - priceA;
      }
      return 0;
    });
    setSortedProducts(sortedArray);
    setIsDropdownOpen(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsCategoryDropdownOpen(false);
  };

  return (

    <div className="p-8">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

     
      <div className="flex flex-wrap gap-4 mb-6">
       
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-blue-500 text-white px-7 py-2 rounded-lg"
          >
            Filter by Price
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
              <ul>
                <li
                  onClick={() => handleSort("lowToHigh")}
                  className="cursor-pointer hover:bg-gray-200 px-8 py-2"
                >
                  Price: Low to High
                </li>
                <li
                  onClick={() => handleSort("highToLow")}
                  className="cursor-pointer hover:bg-gray-200 px-8 py-2"
                >
                  Price: High to Low
                </li>
              </ul>
            </div>
          )}
        </div>

       
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
            className="bg-green-500 text-white px-7 py-2 rounded-lg"
          >
            Filter by Category
          </button>
          {isCategoryDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
              <ul>
                {uniqueCategories.map((category, index) => (
                  <li
                    key={index}
                    onClick={() => handleCategorySelect(category)}
                    className="cursor-pointer hover:bg-gray-200 px-8 py-2"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

     
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-48 object-cover mb-4"
              />
              <h2 className="text-lg font-bold text-left">{product.title}</h2>
              <p className="text-gray-500 text-left">{product.description}</p>
              <h6 className="text-lg font-bold text-left">{product.price}</h6>
              {/* <button
            onClick={()=>className="bg-green-500 text-white px-7 py-2 rounded-lg text-left"}
            
          >
            Add To Cart 
          </button> */}

<button 
  onClick={() => 
    {
      
      addToCart(product);
      toast.success(`Added to cart successfully!`);
    }}
  className="bg-green-500 text-white px-7 py-2 rounded-lg mt-2"
>
  
  Add To Cart
</button>

            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-12 text-xl">
          No products found.
        </div>
      )}
    </div>
  );
};

export default ProductGrid;

