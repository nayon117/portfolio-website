const Contact = () => {
    return (
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 data-aos="fade-left"
        className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900  ">
             GET IN TOUCH CONTACT
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500   sm:text-xl">
            Looking for a professional web developer to build your next website? Let&apos;s talk and contact me today!
            </p>
            <form   className="space-y-8">
              <div className="flex items-center  gap-6">
              <input
                  type="text"
                  id="name"
                  className=" flex-1 p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="First Name"
                  required
                />
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500  p-3 flex-1  "
                  placeholder="Your Email Adress"
                  required
                            />
                              
               
              </div>
              <div>
              
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className=" btn btn-neutral btn-sm  text-sm font-medium text-center    sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  };
  
  export default Contact;