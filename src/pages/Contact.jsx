import React, { useRef } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6sbjhds",
        "template_cmgp9a9",
        form.current,
        "AuuiQAXPgWMXLUGCh"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-black text-white px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Factory Info & Map */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Visit Our Factory</h2>
          <p className="mb-4 text-gray-300">
            <strong>Address:</strong> NH-31, Greenleaf Tea Factory, Siliguri, West Bengal
          </p>
          <p className="mb-4 text-gray-300">
            <strong>Landmark:</strong> Just 10 mins from Siliguri Railway Station
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white mt-6">
            <div className="flex gap-3">
              <Phone className="text-indigo-600" />
              <div>
                <p className="font-semibold">Call Us</p>
                <p>+91 86199 65763</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="text-indigo-600" />
              <div>
                <p className="font-semibold">Email</p>
                <p>bookings@greenleaftea.com</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="text-indigo-600" />
              <div>
                <p className="font-semibold">Hours</p>
                <p>Mon – Sun: 9:00 AM – 6:00 PM</p>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="text-indigo-600" />
              <div>
                <p className="font-semibold">Location</p>
                <p>Siliguri, WB</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="https://wa.me/918619965763"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded text-white font-medium"
            >
              WhatsApp
            </a>
            <a
              href="tel:+918619965763"
              className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded text-white font-medium"
            >
              Call Now
            </a>
          </div>

          <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Factory Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11450.059511258628!2d88.4288896!3d26.7271015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441d479c22d91%3A0x7b49dbe326fe03a7!2sSiliguri%20Junction!5e0!3m2!1sen!2sin!4v1712590766256!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </section>

        {/* Inquiry / Visit Form */}
        <section>
          <div className="bg-gray-500 p-6 rounded-xl shadow-md w-full">
            <h3 className="text-2xl font-bold mb-4">Book a Factory Visit / Send Inquiry</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Full Name"
                  className="border border-gray-300 p-3 rounded w-full text-black"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  className="border border-gray-300 p-3 rounded w-full text-black"
                />
              </div>

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 p-3 rounded w-full text-black"
              />

              <select
                name="product"
                required
                className="border border-gray-300 p-3 rounded w-full text-black"
              >
                <option value="">Select Product</option>
                <option value="CTC Tea">CTC Tea</option>
                <option value="Orthodox Tea">Orthodox Tea</option>
                <option value="Green Tea">Green Tea</option>
                <option value="Custom Blend">Custom Blend</option>
              </select>

              <input
                name="quantity"
                type="text"
                placeholder="Required Quantity (e.g., 500kg)"
                className="border border-gray-300 p-3 rounded w-full text-black"
              />

              <input
                name="delivery_location"
                type="text"
                placeholder="Delivery Location"
                className="border border-gray-300 p-3 rounded w-full text-black"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Additional Instructions / Inquiry"
                className="border border-gray-300 p-3 rounded w-full text-black"
              />

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded hover:bg-indigo-500"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;


