import React, { useState, useEffect } from "react";
import { FaEdit, FaBookmark } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Items = ({ item, allItems, setItems }) => {
  const { _id, name, category, details, price, quantity, photoURL } = item;

  const handleDelete = (_id) => {
    setSelectedItem(null);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/craftItem/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Item has been deleted.", "success");
              const remaining = allItems.filter((itm) => itm._id !== _id);
              setItems(remaining);
            }
          });
      }
    });
  };

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (selectedItem) {
      document.getElementById("my_modal_5").showModal();
    }
  }, [selectedItem]);

  const handleViewDetails = (item) => {
    setSelectedItem(item);
  };

  const handleBookmark = (item) => {
    setSelectedItem(null);
    const bookmarksKey = "bookmarks";
    const existingBookmarks = JSON.parse(localStorage.getItem(bookmarksKey)) || [];

    if (!existingBookmarks.some((bookmark) => bookmark._id === item._id)) {
      existingBookmarks.push(item);
      localStorage.setItem(bookmarksKey, JSON.stringify(existingBookmarks));
      Swal.fire("Bookmarked!", "Your item has been bookmarked.", "success");
    } else {
      Swal.fire("Already Bookmarked!", "This item is already in your bookmarks.", "info");
    }
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
              <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle z-10">
                <div className="modal-box">
                  <img className="h-96 object-fill w-full" src={selectedItem.photoURL} alt={selectedItem.name} />
                  <h2 className="text-2xl font-semibold font-mont py-4">{selectedItem.name}</h2>
                  <p className="text-xl mb-2 font-lora">{selectedItem.category}</p>
                  <p className="mb-2">{selectedItem.details}</p>
                  <p className="text-xl font-bold">Price: ${selectedItem.price}</p>

                  <div className="modal-action">
                    <Link to={`/updateitems/${_id}`}>
                      <button className="btn bg-[#705656] hover:bg-[#736161] text-white text-xl">
                        <FaEdit />
                      </button>
                    </Link>

                    <button onClick={() => handleDelete(_id)} className="btn bg-[#705656] hover:bg-[#736161] text-white text-xl">
                      <MdDelete />
                    </button>
                    <button onClick={() => handleBookmark(selectedItem)} className="btn bg-[#705656] hover:bg-[#736161] text-white text-xl">
                      <FaBookmark />
                    </button>

                    <button className="btn bg-[#705656] hover:bg-[#736161] text-white text-xl" onClick={() => setSelectedItem(null)}>
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
