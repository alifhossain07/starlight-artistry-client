import React, { useEffect, useState } from 'react';

const MyItems = () => {
    const [bookmarkedItems, setBookmarkedItems] = useState([]);

    useEffect(() => {
        const bookmarksKey = "bookmarks";
        const storedItems = JSON.parse(localStorage.getItem(bookmarksKey)) || [];
        setBookmarkedItems(storedItems);
    }, []);

    const handleRemoveBookmark = (id) => {
        const updatedItems = bookmarkedItems.filter(item => item._id !== id);
        setBookmarkedItems(updatedItems);
        localStorage.setItem("bookmarks", JSON.stringify(updatedItems));
    };

    return (
        <div className='h-[85vh]'>
            <h1 className="text-center text-3xl font-bold mb-4 py-10 text-[#674636]">Bookmarked Items</h1>
            <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {bookmarkedItems.length > 0 ? (
                    bookmarkedItems.map(item => (
                        <div key={item._id} className="card w-80 bg-[#fff8e8] shadow-xl">
                            <figure>
                                <img src={item.photoURL} alt={item.name} className="h-80 w-full" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-[#674636]">{item.name}</h2>
                                <p className="text-[#674636]">{item.category}</p>
                                <p className="font-bold text-[#674636]">${item.price}</p>
                                <button 
                                    className="btn bg-[#705656] hover:bg-[#736161] text-white mt-2"
                                    onClick={() => handleRemoveBookmark(item._id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-center text-xl font-semibold font-lora'>No bookmarked items found.</p>
                )}
            </div>
        </div>
    );
};

export default MyItems;
