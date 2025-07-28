import { FaCertificate } from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";
import { SiGoogletagmanager } from "react-icons/si";

const certifications = [
  {
    title: "FSSAI Certified",
    icon: <FaCertificate className="text-indigo-500 text-5xl mb-4" />,
    description: "Licensed by Food Safety and Standards Authority of India",
  },
  {
    title: "USDA Organic",
    icon: <GiRibbonMedal className="text-green-500 text-5xl mb-4" />,
    description: "Certified for organic farming & sustainability",
  },
  {
    title: "ISO 22000",
    icon: <SiGoogletagmanager className="text-yellow-400 text-5xl mb-4" />,
    description: "Certified food safety management system",
  },
  {
    title: "Tea Board India",
    icon: <FaCertificate className="text-red-400 text-5xl mb-4" />,
    description: "Registered with Tea Board of India",
  },
];

const CertificationsAndAwards = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Certifications & Awards
        </h2>
        <p className="mb-10 text-gray-300 text-sm sm:text-base">
          Our excellence is backed by trusted certifications and global recognition.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {item.icon}
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsAndAwards;
