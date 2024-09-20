import React from "react";

const Items = ({item}) => {
    const {_id,name,category,details,price,quantity,photoURL}=item;
  return (
    <div>
      <div className="card  font-mont rounded-md bg-[#fff8e8] w-80 mx-auto h-5/6 shadow-xl">
        <figure>
          <img className="h-80 w-full"
            src={photoURL}
            alt="Shoes"
          />
        </figure>
        <div className="card-body space-y-2">
          <h2 className="card-title text-2xl">{name}</h2>
          <p className="text-xl font-lora">{category}</p>
          <p className="text-xl">
            <strong>${price}</strong>
          </p>
          <div className=" w-full">
            <button className="btn text-white w-full bg-[#705656] hover:bg-[#736161]">View Details </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
