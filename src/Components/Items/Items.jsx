import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Items = ({ item }) => {
  const { _id,name, category, details, price, quantity, photoURL } = item;

  // State for managing the currently active item in the modal
  const [selectedItem, setSelectedItem] = useState(null);

  // Use effect to open the modal after state update
  useEffect(() => {
    if (selectedItem) {
      document.getElementById("my_modal_5").showModal(); // Open modal after state update
    }
  }, [selectedItem]);

  // Function to set the selected item
  const handleViewDetails = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <div className="card font-mont rounded-md bg-[#fff8e8] w-80 mx-auto h-5/6 shadow-xl">
        <figure>
          <img className="h-80 w-full" src={photoURL} alt={name} />
        </figure>
        <div className="card-body space-y-2">
          <h2 className="card-title text-2xl">{name}</h2>
          <p className="text-xl font-lora">{category}</p>
          <p className="text-xl">
            <strong>${price}</strong>
          </p>
          <div className="w-full">
            <button
              className="btn text-white w-full bg-[#705656] hover:bg-[#736161]"
              onClick={() => handleViewDetails(item)}
            >
              View Details
            </button>

            {/* Modal */}
            {selectedItem && (
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <img
                    className="h-96 object-fill w-full"
                    src={selectedItem.photoURL}
                    alt={selectedItem.name}
                  />
                  <h2 className="text-2xl font-semibold font-mont  py-4">
                    {selectedItem.name}
                  </h2>
                  <p className="text-xl mb-2 font-lora">
                    {selectedItem.category}
                  </p>
                  <p className="mb-2">{selectedItem.details}</p>
                  <p className="text-xl font-bold">
                    Price: ${selectedItem.price}
                  </p>

                  <div className="modal-action">
                    <Link to={`/updateitems/${_id}`} >
                      <button className="btn bg-[#705656] hover:bg-[#736161] text-white text-xl ">
                        <FaEdit />
                      </button>
                    </Link>

                    <button className="btn bg-[#705656] hover:bg-[#736161] text-white text-xl ">
                      <MdDelete />
                    </button>
                    <button className="btn bg-[#705656] hover:bg-[#736161] text-white text-xl ">
                      <FaBookmark />
                    </button>

                    <button
                      className="btn bg-[#705656] hover:bg-[#736161] text-white text-xl "
                      onClick={() => setSelectedItem(null)}
                    >
                      <AiOutlineClose />
                    </button>
                  </div>
                </div>
              </dialog>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
