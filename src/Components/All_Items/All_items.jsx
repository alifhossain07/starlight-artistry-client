import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Items from "../Items/Items";

const All_items = () => {
  const items = useLoaderData();
  
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to filter items based on selected category
  const filteredItems = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div>
      <h1 className="mt-10 text-center font-mont font-bold text-3xl text-[#674636]">
        Our Collection
      </h1>

      {/* Category Buttons */}
      <div className="flex justify-center gap-20 mt-16 mb-10 text-white text-2xl">
        <div>
          <button
            className={`px-8 py-2 rounded-md duration-300 ${selectedCategory === "All" ? "bg-[#695449] hover:bg-[#674636]" : "bg-[#674636] hover:bg-[#695449]"}`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
        </div>
        <div>
          <button
            className={`px-8 py-2 rounded-md duration-300 ${selectedCategory === "Paper Craft" ? "bg-[#695449] hover:bg-[#674636]" : "bg-[#674636] hover:bg-[#695449]"}`}
            onClick={() => setSelectedCategory("Paper Craft")}
          >
            Paper Crafts
          </button>
        </div>
        <div>
          <button
            className={`px-8 py-2 rounded-md duration-300 ${selectedCategory === "Glass Art" ? "bg-[#695449] hover:bg-[#674636]" : "bg-[#674636] hover:bg-[#695449]"}`}
            onClick={() => setSelectedCategory("Glass Art")}
          >
            Glass Arts
          </button>
          
        </div>
      </div>

      {/* Display filtered items */}
      <div className="w-10/12 gap-10 grid grid-cols-3 mx-auto mt-20">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <Items key={item._id} item={item} />)
        ) : (
          <p className="col-span-3 text-center text-xl">No items found for this category</p>
        )}
      </div>
    </div>
  );
};

export default All_items;
