import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Items from "../Items/Items";

const All_items = () => {
  const items = useLoaderData();
  const [allItems, setItems] = useState(items);
  
  // Get the selected category from the URL parameters
  const { category } = useParams();

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState(category || "All");

  // Function to filter items based on selected category
  const filteredItems = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="font-mont">
      <h1 className="mt-10 text-center font-mont font-bold uppercase lg:text-3xl text-2xl text-[#674636]">
        Our Collection
      </h1>

      {/* Category Buttons */}
      <div className="flex p-4 gap-5 justify-center lg:gap-20 mt-16 mb-10 text-white text-sm lg:text-xl">
        
          <button
            className={`px-8 py-2 rounded-md duration-300 ${selectedCategory === "All" ? "bg-[#695449] hover:bg-[#674636]" : "bg-[#674636] hover:bg-[#695449]"}`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
        
        
          <button
            className={`px-5 py-1 rounded-md duration-300 ${selectedCategory === "Paper Craft" ? "bg-[#695449] hover:bg-[#674636]" : "bg-[#674636] hover:bg-[#695449]"}`}
            onClick={() => setSelectedCategory("Paper Craft")}
          >
            Paper Crafts
          </button>
        
        
          <button
            className={`px-8 py-2 rounded-md duration-300 ${selectedCategory === "Glass Art" ? "bg-[#695449] hover:bg-[#674636]" : "bg-[#674636] hover:bg-[#695449]"}`}
            onClick={() => setSelectedCategory("Glass Art")}
          >
            Glass Arts
          </button>
        
      </div>

      {/* Display filtered items */}
      <div className="w-10/12 flex flex-col  gap-10 lg:grid lg:grid-cols-3 mx-auto mb-20 mt-20">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <Items key={item._id} item={item} allItems={allItems} setItems={setItems} />)
        ) : (
          <p className="col-span-3 text-center text-xl">No items found for this category</p>
        )}
      </div>
    </div>
  );
};

export default All_items;
