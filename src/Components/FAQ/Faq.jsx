

const Faq = () => {
    return (
        <div className=" mx-auto mt-20 bg-[#f7f5f1]">
             {/* FAQ Section */}
     <div className=" lg:w-9/12 mx-auto py-16 flex justify-center flex-col lg:flex-row  items-center">
        <div className="lg:w-1/2 p-10 lg:p-0">
        <h3 className="text-2xl lg:text-3xl   font-bold font-mont text-[#674636] mb-6 ">Frequently Asked Questions</h3>
        <p className="text-lg font-lora lg:text-xl  w-11/12 text-[#928360] mb-4 ">
  Have questions? We’ve compiled a list of the most common inquiries from our customers. If you don’t find the answer you’re looking for, feel free to reach out to us directly!
</p>

        </div>
          
          <div className="space-y-4 p-10 lg:p-0 lg:w-1/2 mx-auto">
            <div className="collapse collapse-plus bg-[#fff8e8] shadow-lg">
              <input type="radio" name="faq" defaultChecked />
              <div className="collapse-title text-lg lg:text-xl font-mont font-bold text-[#674636]">
                What types of products do you offer?
              </div>
              <div className="collapse-content text-[#928360]">
                <p className="font-lora">We offer a variety of paper crafts and glass art products, including card making, scrapbooking, paper quilling, glass painting, and lampworking.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-[#fff8e8] shadow-lg">
              <input type="radio" name="faq" />
              <div className="collapse-title text-lg lg:text-xl  font-mont font-bold text-[#674636]">
                How can I place an order?
              </div>
              <div className="collapse-content text-[#928360]">
                <p className="font-lora">You can place an order directly through our website by selecting your desired items and proceeding to checkout.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-[#fff8e8] shadow-lg">
              <input type="radio" name="faq" />
              <div className="collapse-title text-lg lg:text-xl font-mont font-bold text-[#674636]">
                What is your return policy?
              </div>
              <div className="collapse-content text-[#928360]">
                <p className="font-lora">We accept returns within 30 days of purchase. Items must be unused and in original packaging.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-[#fff8e8] shadow-lg">
              <input type="radio" name="faq" />
              <div className="collapse-title text-lg font-mont lg:text-xl font-bold text-[#674636]">
                Do you offer custom orders?
              </div>
              <div className="collapse-content text-[#928360]">
                <p className="font-lora">Yes, we provide custom design services! Please contact us directly to discuss your ideas and specifications.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-[#fff8e8] shadow-lg">
              <input type="radio" name="faq" />
              <div className="collapse-title text-lg font-mont lg:text-xl font-bold text-[#674636]">
                How can I track my order?
              </div>
              <div className="collapse-content text-[#928360]">
                <p className="font-lora">Once your order has shipped, you will receive a confirmation email with tracking information to monitor your shipment.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Faq;