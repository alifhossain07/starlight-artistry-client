import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <section className="py-20 bg-[#f7f5f1]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#674636] mb-12 uppercase">Explore Our Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto gap-10">
          {/* Paper Craft Card */}
          <Link to="/all-items/Paper%20Craft" className="bg-[#fff8e8] shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src="https://i.ibb.co/6WhZ18T/pc1.jpg"
              alt="Paper Craft"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#674636]">Paper Craft</h3>
            </div>
          </Link>

          {/* Glass Art Card */}
          <Link to="/all-items/Glass%20Art" className="bg-[#fff8e8] shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src="https://i.ibb.co/9GS6Yq0/ga1.jpg"
              alt="Glass Art"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#674636]">Glass Art</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
