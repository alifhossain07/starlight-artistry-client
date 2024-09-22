import React from "react";
import { Link } from "react-router-dom";
const testimonials = [
  {
    id: 1,
    quote:
      "As an Art and Craft Enthusiast, Liked Their Service and Products Very Much",
    name: "Tasnim Binte Subah",

    photo: "https://i.ibb.co.com/x1Gk5d5/pp1.jpg",
  },
  {
    id: 2,
    quote:
      "Their Products are very much affordable and unique. 100% Recommended",
    name: "Yeasin Rafee",

    photo: "https://i.ibb.co.com/fFdTNq2/pp2.jpg",
  },
];

const AboutUs = () => {
  return (
    <section className="relative ">
      {/* Welcome Section */}
      <div
        className="relative h-[34rem] text-white py-20 px-6 lg:px-16 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url('https://i.ibb.co.com/WDgbqtk/glass-Art-Banner.jpg')",
        }}
      >
        <div className="max-w-5xl mx-auto mt-14 p-10 rounded-lg">
          <h1
            className="text-5xl uppercase font-mont text-[#ffeac5]
 font-extrabold leading-tight"
          >
            Welcome to Starlight Artistry
          </h1>
          <p className="text-2xl font-lora text-[#f7eed3] mt-6 max-w-3xl mx-auto">
            Where Creativity Meets Craftsmanship. Explore the world of paper and
            glass art, where your imagination comes to life.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className=" py-20 ">
        <div className=" flex justify-around w-9/12 mx-auto gap-10 items-center ">
          <div className=" ">
            <h2
              className="text-4xl font-bold text-[#674636]
 font-mont uppercase"
            >
              Our Story
            </h2>
            <p
              className="mt-10 text-xl font-lora text-[#928360]
"
            >
              Starlight Artistry began as a dream to turn ordinary materials
              into extraordinary creations. Our mission is to empower creative
              minds and bring beautiful art into homes across the globe.
            </p>
          </div>
          <div className=" w-5/6">
            <img
              src="https://i.ibb.co.com/0f6PR22/craftingstory.jpg"
              alt="Our Story Image"
              className=" shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Our Craft Specialties Section */}
      <div className="relative bg-[#f7f5f1] text-white py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-[#674636] font-mont uppercase">
            Our Craft Specialties
          </h2>
          <div className="grid w-10/12 mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-8 bg-[#fff8e8] rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <h3
                className="text-2xl text-[#674636]
 font-bold font-mont mb-4"
              >
                Paper Crafts
              </h3>
              <p className="text-lg font-lora text-[#928360]">
                Delve into intricate paper quilling, origami, and card making,
                designed to spark creativity in every project.
              </p>
              <ul className="mt-4 font-lora text-lg space-y-2 text-[#928360]">
                <li>• Card Making</li>
                <li>• Scrapbooking</li>
                <li>• Paper Quilling & Origami</li>
              </ul>
            </div>
            <div className="p-8 bg-[#fff8e8]   rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <h3
                className="text-2xl text-[#674636]
 font-bold font-mont mb-4"
              >
                Glass Art
              </h3>
              <p className="text-lg font-lora text-[#928360]">
                Explore the beauty of stained glass, painting on glass, and the
                intricate art of lampworking.
              </p>
              <ul className="mt-4 text-[#928360] text-lg font-lora space-y-2">
                <li>• Glass Painting</li>
                <li>• Lampworking</li>
                <li>• Glass Dying & Staining</li>
              </ul>
            </div>
            <div className="p-8 bg-[#fff8e8] rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <h3
                className="text-2xl font-bold font-mont mb-4 text-[#674636]
"
              >
                Custom Designs
              </h3>
              <p className="text-lg font-lora text-[#928360]">
                Work with us to create something truly unique and custom-made to
                match your style and vision.
              </p>
              <p className="mt-4 font-lora text-[#928360]">
                Let your imagination run wild with personalized, one-of-a-kind
                designs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Artist Section */}
      <div className="py-20">
        <div className=" flex w-9/12 mx-auto justify-between items-center">
          <div className="">
            <img
              src="https://i.ibb.co.com/tsRGYjt/artist.jpg"
              alt="Artist"
              className=" h-96 w-96 rounded-full border-4 border-amber-600 object-cover mx-auto lg:mx-0"
            />
          </div>
          <div className="w-1/2 space-y-8">
            <h2 className="text-4xl font-mont font-bold uppercase text-[#674636]">
              Meet the Artist
            </h2>
            <p className=" text-xl font-lora text-[#928360]">
              Hi! I’m the creative force behind Starlight Artistry. Every piece
              in the store is a labor of love, made by hand with care and a deep
              passion for the art. Each item is unique, just like you!
            </p>
          </div>
        </div>
      </div>



      {/* Testimonials */}
      <section className="py-20 bg-[#f7f5f1]  mx-auto   ">
        <div className="container mx-auto px-6">
          <h2 className="lg:text-3xl text-3xl font-bold text-center mb-20 text-[#674636] uppercase">
            What Our Clients Say
          </h2>
          <div className=" w-10/12 mx-auto grid grid-cols-2 gap-20">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="  p-8 shadow-xl bg-[#fff8e8]"
              >
                <div className=" flex">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-24 h-24  rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="ml-4 space-y-2">
                    <p
                      className="text-xl font-semibold font-mont text-[#674636]
"
                    >
                      {testimonial.name}
                    </p>
                    <p className="font-lora text-gray-800 italic relative z-10">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center   py-28">
          <h2 className="text-4xl text-[#674636] font-bold uppercase mb-8">
            Ready to Create Something Beautiful?
          </h2>
          <Link to='/allitems'><button className='btn px-10 text-white bg-[#795757]'>Explore Our Works</button></Link>
          
        </div>

    </section>
  );
};

export default AboutUs;
