import React from "react";
import bgHero from "../assets/baner.jpg";

import {
  FaTools,
  FaWindowRestore,
  FaBuilding,
  FaGripLines,
  FaWrench,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// hero slide imgs
import heroImg1 from "../assets/baner.jpg";
import heroImg2 from "../assets/banner.png";
import heroImg3 from "../assets/banner.png";

import stairImage1 from "../assets/hero13.png";
import stairImage2 from "../assets/hero13.png";
import stairImage3 from "../assets/hero13.png";

export default function Home() {
  return (
    <div className="w-full scroll-smooth">
      {/* Hero Section */}
      <section id="hero" className="relative w-full h-[600px] overflow-hidden">
        {/* Background Swiper */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="w-full h-full"
          >
            {[heroImg1, heroImg2, heroImg3].map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-60 z-10"></div>

        {/* Foreground Content */}
        <div className="relative z-20 flex flex-col md:flex-row justify-between items-center h-full px-6 max-w-7xl mx-auto text-white">
          <div className="mt-24 md:mt-0 max-w-xl text-center md:text-left">
            <p className="text-yellow-400 text-lg font-bold">
              WELCOME TO CHAIVATIKA CENTER
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-snug mt-2">
              From Garden to Cup – Pure & Authentic Tea
            </h1>
            <button
              className="mt-6 bg-yellow-400 text-black px-6 py-3 font-semibold rounded shadow hover:bg-yellow-300 transition duration-200"
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              DISCOVER MORE
            </button>
          </div>
          <div className="mt-10 md:mt-0"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Premium Tea Solutions
            </h2>
            <p className="text-lg md:text-xl mb-6 text-gray-300">
              Specializing in high-quality tea production — from fresh garden
              leaves to hygienic packaging. We offer a wide variety of teas
              backed by modern manufacturing, export standards, and trusted
              quality.
            </p>
            <ul className="space-y-4 text-gray-200">
              {[
                {
                  icon: <FaWindowRestore className="text-indigo-600 mt-1" />,
                  title: "Loose Leaf & CTC Tea Supply",
                  desc: "Bulk supply of premium-grade Assam, Darjeeling, and Nilgiri teas..",
                },
                {
                  icon: <FaBuilding className="text-indigo-600 mt-1" />,
                  title: "Private Label Packaging",
                  desc: "Custom branding & packaging solutions for your business.",
                },
                {
                  icon: <FaGripLines className="text-indigo-600 mt-1" />,
                  title: "Tea Blending & Flavoring",
                  desc: "Expertly crafted blends including herbal, spice-infused, and organic varieties.",
                },
                {
                  icon: <FaTools className="text-indigo-600 mt-1" />,
                  title: "Export-Grade Manufacturing",
                  desc: "Certified tea processing with global shipping capabilities.",
                },
                {
                  icon: <FaWrench className="text-indigo-600 mt-1" />,
                  title: "Custom Tea Box & Gift Packs",
                  desc: "Specialized design and export-ready gift boxes for festivals or corporates.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  {item.icon}
                  <div>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-100">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE SLIDER */}
          <div className="relative w-full">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="w-full"
            >
              {[stairImage1, stairImage2, stairImage3].map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="rounded-xl shadow-lg w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[550px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}
