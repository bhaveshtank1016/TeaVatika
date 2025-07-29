import React from "react";

const teas = [
  {
    id: 1,
    name: '"Constant Comment"® Black Tea',
    count: "20 Count (Pack of 6)",
    totalBags: "120 Total Tea Bags",
    price: "$20.95",
    rating: 4.7,
    reviews: 58,
    image: "https://tealeavz.com/cdn/shop/articles/what-does-black-tea-taste-like.jpg?v=1659743106", // Replace with actual path
  },
  {
    id: 2,
    name: "Lemon Ginger Plus Probiotics Herbal Tea",
    count: "18 Count (Pack of 6)",
    totalBags: "108 Total Tea Bags",
    price: "$20.95",
    rating: 4.3,
    reviews: 37,
    image: "https://static.toiimg.com/photo/69385334.cms",
  },
  {
    id: 3,
    name: "Ginger Honey plus Zinc Herbal Tea",
    count: "18 Count (Pack of 6)",
    totalBags: "108 Total Tea Bags",
    price: "$20.95",
    rating: 4.6,
    reviews: 36,
    image: "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-114984933/114984933.jpg",
  },
  {
    id: 4,
    name: "Green Tea",
    count: "20 Count (Pack of 6)",
    totalBags: "120 Total Tea Bags",
    price: "$20.95",
    rating: 4.8,
    reviews: 10,
    image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/8468/Tea.jpg",
  },
  {
    id: 5,
    name: "Cozy Chamomile® Herbal Tea",
    count: "20 Count (Pack of 6)",
    totalBags: "120 Total Tea Bags",
    price: "$20.95",
    rating: 4.8,
    reviews: 13,
    image: "https://tealeavz.com/cdn/shop/articles/what-does-black-tea-taste-like.jpg?v=1659743106",
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push("★");
  }
  if (halfStar) stars.push("☆");

  return <span className="text-yellow-500">{stars.join("")}</span>;
};

const OurProducts = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Shop Our Most Popular Teas
          </h2>
          <a
            href="#"
            className="text-sm font-medium text-indigo-600 hover:underline"
          >
            View all
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teas.map((tea) => (
            <div
              key={tea.id}
              className="border rounded-md p-4 text-center shadow-sm hover:shadow-lg transition"
            >
              <img
                src={tea.image}
                alt={tea.name}
                className="h-32 mx-auto object-contain mb-4"
              />
              <h3 className="text-sm font-semibold mb-1">{tea.name}</h3>
              <p className="text-xs text-gray-200">{tea.count}</p>
              <p className="text-xs text-gray-200 mb-2">{tea.totalBags}</p>
              <p className="text-md font-semibold mb-2">{tea.price}</p>
              <div className="flex justify-center items-center gap-1 text-sm">
                <StarRating rating={tea.rating} />
                <span className="text-gray-500">({tea.reviews})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
