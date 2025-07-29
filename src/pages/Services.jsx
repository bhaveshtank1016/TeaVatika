import React from "react";
import hhero from "../assets/hero13.png";

const Services = () => {
  return (
    <section
      id="services"
      className="px-6 py-16 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/3">
          <img
            src={hhero}
            alt="Fabrication Services"
            className="w-full h-auto rounded-2xl ml-3 object-contain"
          />
        </div>
        <div className="md:w-1/2 mt-10 text-white md:mt-0 md:pl-12">
          <h4 className="text-blue-600 font-semibold mb-2 uppercase">
            Our Services
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            "Trusted Partners in
            <br /> Premium Tea Manufacturing & Export
          </h2>
          <p className="text-gray-300 mb-6">
            We specialize in bulk tea production — from sourcing hand-picked tea
            leaves to hygienic processing, custom blending, and packaging. Our
            expert team ensures every batch meets international quality
            standards, ready for private labels and global export. Whether you
            need CTC, Orthodox, Green Tea, or Herbal Fusions, we tailor every
            blend to your market needs.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
