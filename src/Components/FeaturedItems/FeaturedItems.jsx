import React from "react";
import Items from "../Items/Items";


const FeaturedItems = ({items}) => {
  return (
    <div className="mt-20">
      <div className="text-center space-y-3">
        <h1
          className="text-3xl text-[#674636]
 font-mont font-bold  "
        >
          Featured Items
        </h1>
        <p className="text-xl font-lora text-[#928360]">
          Here you can explore the Most Demanded Craft Items
        </p>
      </div>
      {/* Added Cards */}
      <div className="w-10/12 gap-10 grid grid-cols-3 mx-auto  mt-10">
      {
        items.slice(0,6).map(item => <Items item={item}></Items>)
      }

      </div>
    </div>
  );
};

export default FeaturedItems;
