import React from "react";
import Items from "../Items/Items";


const FeaturedItems = ({items}) => {
  return (
    <div className="mt-20">
      <div className="text-center space-y-3">
        <h1
          className="lg:text-3xl text-2xl text-[#674636]
 font-mont font-bold  "
        >
          Featured Items
        </h1>
        <p className="lg:text-xl mx-auto lg:w-full w-10/12 text-lg font-lora text-[#928360]">
          Here you can explore the Most Demanded Craft Items
        </p>
      </div>
      {/* Added Cards */}
      <div className="w-10/12 flex flex-col gap-10 lg:grid lg:grid-cols-3 mx-auto  mt-10">
      {
        items.slice(0,6).map(item => <Items item={item}></Items>)
      }

      </div>
    </div>
  );
};

export default FeaturedItems;
