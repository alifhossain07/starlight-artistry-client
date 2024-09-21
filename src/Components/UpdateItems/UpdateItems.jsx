import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const UpdateItems = () => {

    const { user } = useContext(AuthContext);
    
    const items = useLoaderData();
    console.log(items);
    const {_id,name,category,details,price,quantity,photoURL,email} = items;

  const handleUpdateItems = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const category = form.category.value;
    const details = form.details.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const photoURL = form.photourl.value;
    const email = form.email.value;

    const CraftInfo = {
      name,
      category,
      details,
      price,
      quantity,
      photoURL,
      email,
      
    };

    console.log(CraftInfo);

    // send data To the Server
    fetch(`http://localhost:5000/craftItem/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(CraftInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Information Updated Successfully! ",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-center mt-10 text-3xl font-bold text-[#674636]">
        Update Item
      </h1>
      <div className="p-20 w-2/4 mx-auto">
        <form
          onSubmit={handleUpdateItems}
          className="space-y-4 bg-[#fae9d7]  rounded-xl p-10 "
        >
          <div className="flex flex-col gap-4 justify-between">
            
              <div>
                <label class="label">
                  <span class="text-base label-text">Item Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Product Name"
                  defaultValue={name}
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
                  defaultValue={category}
                  class="w-full input input-bordered"
                />
              </div>
              <div>
                <label class="label">
                  <span class="text-base label-text">Details</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Product Details"
                  name="details"
                  defaultValue={details}
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
                  defaultValue={price}
                  class="w-full input input-bordered"
                />
              </div>
              <div>
                <label class="label">
                  <span class="text-base label-text">Product Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Amount"
                  name="quantity"
                  defaultValue={quantity}
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
                defaultValue={photoURL}
                class="w-full input input-bordered"
              />
            </div>
            <div className="mb-6">
              <label className="label">
                <span className="text-base label-text">User Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                defaultValue={user?.email || ""} // Use logged-in user's email if available
                readOnly={!!user} // Make it read-only if user is logged in
                className="w-full input input-bordered"
              />
            </div>
          </div>

          <input
            type="submit"
            value="Update Item"
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

export default UpdateItems;
