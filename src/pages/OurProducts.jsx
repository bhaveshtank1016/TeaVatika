import React from "react";
import {
 Leaf,
  Coffee,
  Flower,
  Package,
  Sprout,
  CupSoda,
} from "lucide-react";

const services = [
  {
    icon: <Leaf size={40} />,
    title: "Green Tea",
    description:
      "Light and refreshing with natural antioxidants — perfect for a healthy lifestyle.",
  },
  {
    icon: <Coffee size={40} />,
    title: "Black Tea",
    description:
      "Robust and full-bodied, ideal for morning energy or milk tea blends.",
  },
  {
    icon: <Flower size={40} />,
    title: "Herbal Infusions",
    description:
      "Caffeine-free blends with wellness herbs like tulsi, chamomile, and lemongrass.",
  },
  {
    icon: <CupSoda size={40} />,
    title: "CTC Tea",
    description:
      "Strong flavor and quick brew — best for Indian masala chai.",
  },
  {
    icon: <Sprout size={40} />,
    title: "Organic Tea",
    description:
      "Grown without chemicals, certified organic — pure from farm to cup.",
  },
  {
    icon: <Package size={40} />,
    title: "Custom Blends & Packaging",
    description:
      "Tea customized for your brand: flavor, cut, and export-ready packaging.",
  },
];


const OurProducts = () => {
  return (
    <section id="offer" className="px-6 py-20 md:px-16  text-white bg-black">
      <h4 className="text-red-600 text-lg font-bold mb-2 uppercase text-center">
        OUR PRODUCTS
      </h4>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Premium Range of Teas for Every Taste & Tradition
      </h2>
      <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
        Explore our collection of hand-picked teas — from bold black blends to
        refreshing green, calming herbal infusions, and classic CTC. Crafted
        with care, ready for export and retail.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-blue-950 text-white flex flex-col items-center p-10 text-center min-h-[250px] rounded-xl shadow"
          >
            <div className="mb-4 text-yellow-400">{service.icon}</div>
            <h3 className="text-lg font-semibold text-yellow-400">
              {service.title}
            </h3>
            <p className="text-sm mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
