import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddItems = () => {
  const handleAddItems = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const category = form.category.value;
    const details = form.details.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const photoURL = form.photourl.value;

    const CraftInfo = {
      name,
      category,
      details,
      price,
      quantity,
      photoURL,
      
    };

    console.log(CraftInfo);

    // send data To the Server
    fetch("http://localhost:5000/craftItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(CraftInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added Successfully! ",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-center mt-10 text-3xl font-bold text-[#674636]">
        Add Coffee
      </h1>
      <div className="p-20 w-2/4 mx-auto">
        <form
          onSubmit={handleAddItems}
          className="space-y-4 bg-[#fae9d7]  rounded-xl p-10 "
        >
          <div className="flex flex-col gap-4 justify-between">
            
              <div>
                <label class="label">
                  <span class="text-base label-text">Item Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Coffee Name"
                  name="name"
                  class="w-full input input-bordered"
                />
              </div>
              <div>
                <label class="label">
                  <span class="text-base label-text">Category</span>
                </label>
                <input
                  type="text"
                  placeholder="Product category"
                  name="category"
                  class="w-full input input-bordered"
                />
              </div>
              <div>
                <label class="label">
                  <span class="text-base label-text">Details</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Coffee Details"
                  name="details"
                  class="w-full input input-bordered"
                />
              </div>
              
              
            
            
              <div>
                <label class="label">
                  <span class="text-base label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Item Price"
                  name="price"
                  class="w-full input input-bordered"
                />
              </div>
              <div>
                <label class="label">
                  <span class="text-base label-text">Product Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Write The Quality of the product"
                  name="quantity"
                  class="w-full input input-bordered"
                />
              </div>
              
              
            
          </div>
          <div>
            <div className="mb-6">
              <label class="label">
                <span class="text-base label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter Photo URL"
                name="photourl"
                class="w-full input input-bordered"
              />
            </div>
          </div>

          <input
            type="submit"
            value="Add Item"
            className="btn w-full text-xl bg-amber-900 hover:bg-amber-700 duration-300 text-white "
          />
        </form>
      </div>

      <Link to="/">
        <div className="text-center">
          <button className="btn">Go To Home</button>
        </div>
      </Link>
    </div>
  );
};

export default AddItems;
