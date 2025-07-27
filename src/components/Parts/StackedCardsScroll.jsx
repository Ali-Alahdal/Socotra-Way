import React, { useEffect, useRef, useState } from "react";
import BestTimeImage from "../../assets/images/home/besttime.jpg";
import Culutr from "../../assets/images/home/cultur2.jpg";

const deals = [
  {
    title: "When to visit",
    description:
      "Visit Socotra from October to April for warm weather. Off-season is windier but still sunny, offering a quieter experience",
    image: BestTimeImage,
    overlayColor: "bg-orange-900/50",
    buttonColor: "bg-white text-blue-600 hover:bg-blue-50",
  },
  {
    title: "Safety",
    description:
      "Socotra is safe for travel, as it has stayed untouched by Yemen’s conflict. Visitors can enjoy its peaceful, secure environment and explore its stunning landscapes and unique biodiversity worry-free",
    image: Culutr,
    overlayColor: "bg-green-900/50",
    buttonColor: "bg-white text-purple-600 hover:bg-purple-50",
  },
];

const EscapeDeals = () => {
  const refs = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisible((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="Info"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {deals.map((deal, index) => (
          <div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            data-index={index}
            className={`relative rounded-xl overflow-hidden shadow-lg group h-64 transition-all duration-700 ease-out transform ${
              visible.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${deal.image})` }}
            >
              <div className={`${deal.overlayColor} absolute inset-0`}></div>
            </div>
            <div className="relative h-full flex items-center justify-center p-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {deal.title}
                </h3>
                <p className="text-white">{deal.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EscapeDeals;
