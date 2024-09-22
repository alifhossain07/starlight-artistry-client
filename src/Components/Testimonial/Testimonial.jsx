import React from 'react';
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

const Testimonial = () => {
    return (
        <div>
            <section className="py-20 bg-white  mx-auto   ">
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
        </div>
    );
};

export default Testimonial;