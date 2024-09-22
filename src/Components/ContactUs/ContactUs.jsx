import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="w-10/12 mx-auto my-12 p-8  rounded-lg">
     {/* FAQ Section */}
     <div className="mb-32 flex justify-center  items-center">
        <div className="w-1/2">
        <h3 className="text-3xl  font-bold text-[#674636] mb-6 ">Frequently Asked Questions</h3>
        <p className="text-lg  w-11/12 text-[#928360] mb-4 ">
  Have questions? We’ve compiled a list of the most common inquiries from our customers. If you don’t find the answer you’re looking for, feel free to reach out to us directly!
</p>

        </div>
          
          <div className="space-y-4 w-1/2 mx-auto">
            <div className="collapse collapse-plus bg-[#fff8e8] shadow-lg">
              <input type="radio" name="faq" defaultChecked />
              <div className="collapse-title text-xl font-medium text-[#674636]">
                What types of products do you offer?
              </div>
              <div className="collapse-content text-[#928360]">
                <p>We offer a variety of paper crafts and glass art products, including card making, scrapbooking, paper quilling, glass painting, and lampworking.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-[#fff8e8] shadow-lg">
              <input type="radio" name="faq" />
              <div className="collapse-title text-xl font-medium text-[#674636]">
                How can I place an order?
              </div>
              <div className="collapse-content text-[#928360]">
                <p>You can place an order directly through our website by selecting your desired items and proceeding to checkout.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-[#fff8e8] shadow-lg">
              <input type="radio" name="faq" />
              <div className="collapse-title text-xl font-medium text-[#674636]">
                What is your return policy?
              </div>
              <div className="collapse-content text-[#928360]">
                <p>We accept returns within 30 days of purchase. Items must be unused and in original packaging.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-[#fff8e8] shadow-lg">
              <input type="radio" name="faq" />
              <div className="collapse-title text-xl font-medium text-[#674636]">
                Do you offer custom orders?
              </div>
              <div className="collapse-content text-[#928360]">
                <p>Yes, we provide custom design services! Please contact us directly to discuss your ideas and specifications.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-[#fff8e8] shadow-lg">
              <input type="radio" name="faq" />
              <div className="collapse-title text-xl font-medium text-[#674636]">
                How can I track my order?
              </div>
              <div className="collapse-content text-[#928360]">
                <p>Once your order has shipped, you will receive a confirmation email with tracking information to monitor your shipment.</p>
              </div>
            </div>
          </div>
        </div>
      {/* Header Section */}
      <section className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-[#674636] mb-4">Get In Touch</h1>
        <p className="text-lg text-[#928360] leading-relaxed max-w-2xl mx-auto">
          Connect with us to start exploring our unique artistry. Whether you have questions or need assistance, we're here to help!
        </p>
      </section>

      {/* Contact Information Section */}
      <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10">
        {/* Phone Section */}
        <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
          <div className="bg-[#674636] p-4 rounded-full text-white mb-4">
            <FaPhoneAlt size={30} />
          </div>
          <h2 className="text-2xl font-semibold text-[#674636] mb-2">Call Us</h2>
          <p className="text-lg text-[#928360] mb-4">For quick support, reach us at:</p>
          <p className="text-xl font-bold text-[#674636]">+1 (234) 567-890</p>
          <p className="text-xl font-bold text-[#674636]">+1 (234) 567-891</p>
        </div>

        {/* Email Section */}
        <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
          <div className="bg-[#674636] p-4 rounded-full text-white mb-4">
            <FaEnvelope size={30} />
          </div>
          <h2 className="text-2xl font-semibold text-[#674636] mb-2">Email Us</h2>
          <p className="text-lg text-[#928360] mb-4">Send us an email for inquiries:</p>
          <div className='w-full flex flex-col items-center mx-auto'>
            <p className="text-xl font-bold text-[#674636]">info@starlightartistry.com</p>
            <p className="text-xl font-bold text-[#674636]">support@starlightartistry.com</p>
          </div>
        </div>

        {/* Address Section */}
        <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
          <div className="bg-[#674636] p-4 rounded-full text-white mb-4">
            <FaMapMarkerAlt size={30} />
          </div>
          <h2 className="text-2xl font-semibold text-[#674636] mb-2">Visit Us</h2>
          <p className="text-lg text-[#928360] mb-4">Our office is located at:</p>
          <p className="text-xl font-bold text-[#674636]">123 Craft Lane, Art City</p>
          <p className="text-xl font-bold text-[#674636]">AC 12345, Country</p>
        </div>
      </section>

     
      

         {/* Social Media Links Section */}
      <section className="mt-36  text-center">
        <h2 className="text-3xl font-semibold text-[#674636] mb-4">Follow Us on Social Media</h2>
        <p className="text-lg text-[#928360] mb-8">
          Stay updated with our latest creations and promotions.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-[#674636] hover:text-[#928360]">
            <FaFacebookF size={30} />
          </a>
          <a href="#" className="text-[#674636] hover:text-[#928360]">
            <FaTwitter size={30} />
          </a>
          <a href="#" className="text-[#674636] hover:text-[#928360]">
            <FaLinkedinIn size={30} />
          </a>
          <a href="#" className="text-[#674636] hover:text-[#928360]">
            <FaInstagram size={30} />
          </a>
        </div>
        
      </section>
    </div>
  );
};

export default ContactUs;
