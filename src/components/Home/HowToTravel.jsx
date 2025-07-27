import { useEffect, useRef, useState } from "react";
import Passport from "../../assets/images/home/travel.png";
import Flight from "../../assets/images/home/flight.png";
import Tour from "../../assets/logos/Logo2.png";

function HowToTravel() {
  const features = [
    {
      title: "Visa",
      desc: "A valid visa is required to visit Socotra, costing USD 150. We handle the application and send it to you 5–7 days before travel, and if you prefer not to have a passport stamp, just let us know in advance so we can help",
      img: Passport,
    },
    {
      title: "Flights",
      desc: "The easiest way to reach Socotra is via a twice-weekly humanitarian flight from Abu Dhabi during the high season (October–April). It’s not bookable online, but we can help arrange a seat through our airline contacts.",
      img: Flight,
    },
    {
      title: "Reserve a Tour",
      desc: "With no public transport or rental cars on Socotra, the best way to explore is by booking a tour with a local agency like Us (Socotra Way), where English-speaking guides will show you the island’s top spots",
      img: Tour,
    },
  ];

  const headerRef = useRef(null);
  const itemRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updatedVisible = [...visibleItems];
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting && !updatedVisible.includes(index)) {
            updatedVisible.push(index);
          }
        });
        setVisibleItems(updatedVisible);
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <section className="py-32 px text-black px-12">
      <div className="container mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          data-index={-1}
          className={`mx-auto flex flex-col items-center gap-6 text-center transform transition-all duration-1000 ease-out ${
            visibleItems.includes(-1)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
            Socotra Way
          </div>
          <h2 className="text-4xl font-medium">
            Traveling to Socotra
          </h2>
          <p className="text-lg text-zinc-600">
           Let Us Guide You to This Hidden Gem
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid gap-10 lg:grid-cols-3 xl:gap-20 h-full">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`flex flex-col lg:block h-full transform transition-all duration-1000 ease-out ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="rounded-lg border bg-zinc-100 p-3 h-[50%]">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              <div className="p-6">
                <p className="mb-1 font-semibold">{feature.title}</p>
                <p className="text-zinc-600">{feature.desc}</p>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowToTravel;
