import React from "react";
import about1 from "../assets/aboutbg.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-black via-gray-950 to-black"
    >
      {/* Introduction Section */}
      <div className="w-full py-24 px-6 md:px-20">
        <div className="bg-gradient-to-b from-black via-gray-900 to-black border-white rounded-lg p-6 md:p-10 shadow-md">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <h3 className="text-red-600 font-bold text-sm mb-2 tracking-wide uppercase">
                Our Value
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-200">
                Authentic Tea. Ethical Roots. Global Standards.
              </h2>
              <p className="text-gray-300 mb-8 max-w-sm leading-relaxed">
                We are a premium tea manufacturing and export company dedicated
                to delivering pure, fresh, and aromatic teas — directly from the
                tea gardens of India to cups around the world. Our legacy is
                built on quality, tradition, and innovation.
              </p>
            </div>

            <div className="md:col-span-2 bg-[#0a0a4a] text-white rounded-lg overflow-hidden grid md:grid-cols-2">
              <div className="w-full flex justify-center items-center">
                <div className="p-6 md:p-8 w-full">
                  <div className="grid gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                      <p className="text-sm mb-4 leading-relaxed">
                        To become the most trusted global name in tea — known
                        for consistent quality, ethical sourcing, and
                        sustainable practices. We aim to inspire health and joy
                        in every cup through our expertly crafted blends and
                        responsible manufacturing.
                      </p>
                      <button className="bg-yellow-400 text-black text-sm font-bold px-4 py-2 rounded hover:bg-yellow-500 transition duration-300">
                        LEARN MORE
                      </button>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Our Mission
                      </h3>
                      <p className="text-sm mb-4 leading-relaxed">
                        To produce and export the finest teas by combining
                        age-old cultivation techniques with state-of-the-art
                        manufacturing. From organic farming to hygienic
                        packaging, our mission is to deliver wellness and taste
                        — backed by certifications like FSSAI, ISO, and USDA
                        Organic.
                      </p>
                      <button className="bg-yellow-400 text-black text-sm font-bold px-4 py-2 rounded hover:bg-yellow-500 transition duration-300">
                        LEARN MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div
        className="relative w-full bg-cover bg-center text-white py-24 px-6 md:px-20"
        style={{ backgroundImage: `url(${about1})` }}
      >
        <div className="absolute inset-0 bg-[#0a0a4a] opacity-75 z-0"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Schedule a Factory Tour or Request a Tea Sample Today <br />
            Experience quality, purity, and flavor — directly from the source.
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            From organic green tea to premium CTC blends, we offer bulk tea
            manufacturing, private labeling, and global export — crafted with
            care, certified for quality. 📦 USDA Organic | ✅ ISO 22000 | 🇮🇳 Tea
            Board of India Certified
          </p>
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-yellow-400 text-black font-bold px-6 py-3 rounded hover:bg-yellow-500 transition duration-300"
          >
           BOOK A FACTORY VISIT
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bbg-gradient-to-b from-black via-gray-900 to-black text-white py-14 px-6 md:px-20 grid grid-cols-2 md:grid-cols-4 text-center gap-8">
        <div>
          <h3 className="text-4xl font-bold">10K+</h3>
          <p className="font-medium mt-2">Happy Clients</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">25K+</h3>
          <p className="font-medium mt-2">Projects Done</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">521+</h3>
          <p className="font-medium mt-2">Professional Experts</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">4.6</h3>
          <p className="font-medium mt-2">Client Rating</p>
        </div>
      </div>
    </section>
  );
};

export default About;
