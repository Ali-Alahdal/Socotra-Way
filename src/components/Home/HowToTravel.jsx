import { useEffect, useRef, useState } from "react";
import Passport from "../../assets/images/home/passport.jpg";
import Flight from "../../assets/images/home/flight.jpg";
import Tour from "../../assets/images/home/tour.jpg";

function HowToTravel() {
  const features = [
    {
      title: "Copy paste components",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi laboriosam voluptatibus temporibus doloremque laudantium.",
      img: Passport,
    },
    {
      title: "100% customizable",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi laboriosam voluptatibus temporibus doloremque laudantium.",
      img: Flight,
    },
    {
      title: "24/7 support",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi laboriosam voluptatibus temporibus doloremque laudantium.",
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
            Features
          </div>
          <h2 className="text-4xl font-medium">
            Various integrations to help you grow your business
          </h2>
          <p className="text-lg text-zinc-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            sunt deleniti aliquid voluptates, nihil culpa enim.
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
              <div className="rounded-lg border bg-zinc-100 p-3">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              <div className="p-6">
                <p className="mb-1 font-semibold">{feature.title}</p>
                <p className="text-zinc-600">{feature.desc}</p>
                <a href="#" className="mt-4 flex items-center gap-2 font-medium">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right w-4"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowToTravel;
