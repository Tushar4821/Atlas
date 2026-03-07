import React from "react";

function Contact() {

  const handleFormSubmit = (formData) => {

  const formInputData = Object.fromEntries(formData.entries())
  }
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 py-20">
      
      <div className="w-full max-w-3xl bg-[#1C1C1C] rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-800">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-3">
            Contact <span className="text-gray-300">GeoVerse</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Have questions about countries or suggestions? We'd love to hear from you.
          </p>
        </div>

        {/* Form */}
        <form action={handleFormSubmit} className="space-y-6">
          
          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-2 text-sm">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-white transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2 text-sm">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-white transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-300 mb-2 text-sm">
              Your Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-white transition resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-white text-black font-semibold px-8 py-3 rounded-lg transition duration-300 hover:bg-gray-300 shadow-lg"
            >
              Send Message
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}

export default Contact;