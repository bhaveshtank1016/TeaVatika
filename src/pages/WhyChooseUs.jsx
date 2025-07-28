import { BadgeCheck, Leaf, FlaskConical, Users } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-black text-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">
          Why <span className="text-green-600">Choose Us?</span>
        </h2>
        <p className="text-gray-300 mb-12">
          We don’t just produce tea, we cultivate trust through ethical sourcing,
          rigorous testing, and passionate craftsmanship.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Quality Control */}
          <div className="flex flex-col items-center">
            <BadgeCheck className="text-green-600 mb-4 w-10 h-10" />
            <h3 className="font-semibold text-lg">Quality Control</h3>
            <p className="text-sm text-gray-300 mt-2">
              Multi-layered inspection from leaf to label to ensure excellence.
            </p>
          </div>

          {/* Ethical Sourcing */}
          <div className="flex flex-col items-center">
            <Leaf className="text-green-600 mb-4 w-10 h-10" />
            <h3 className="font-semibold text-lg">Ethical Sourcing</h3>
            <p className="text-sm text-gray-300 mt-2">
              Partnering with farms that practice fair trade and sustainability.
            </p>
          </div>

          {/* Tea Lab */}
          <div className="flex flex-col items-center">
            <FlaskConical className="text-green-600 mb-4 w-10 h-10" />
            <h3 className="font-semibold text-lg">Tea Lab Testing</h3>
            <p className="text-sm text-gray-300 mt-2">
              Each batch tested for flavor accuracy, purity, and aroma.
            </p>
          </div>

          {/* Tea Tasters */}
          <div className="flex flex-col items-center">
            <Users className="text-green-600 mb-4 w-10 h-10" />
            <h3 className="font-semibold text-lg">Experienced Tasters</h3>
            <p className="text-sm text-gray-300 mt-2">
              Decades of experience in selecting and blending world-class teas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
