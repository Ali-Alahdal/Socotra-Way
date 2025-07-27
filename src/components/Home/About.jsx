import { useEffect, useRef, useState } from "react";
import Landscapes from "../../assets/images/home/landscapes.jpg"
import Animals from "../../assets/images/home/animals.jpg"
import Cultur from "../../assets/images/home/cultur.jpg"

function About() {
  const activites = [
    {
      title: "Unique Flora & Fauna",
      img: Animals,
      description:
        "Socotra is home to rare plants and animals found nowhere else on Earth, like the iconic Dragon’s Blood Tree and Socotra starling.",
    },
    {
      title: "Stunning Landscapes",
      img: Landscapes,
      description:
        "From dramatic limestone mountains to pristine white sandy beaches and crystal-clear waters, Socotra offers breathtaking and diverse scenery.",
    },
    {
      title: "Rich Culture & Isolation",
      img: Cultur,
      description:
        "With a unique blend of ancient traditions and a remote location, Socotra preserves a distinct cultural heritage untouched by modern life",
    },
  
  ];

  const headerRef = useRef(null);
  const itemRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updatedVisibleItems = [...visibleItems];
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting && !updatedVisibleItems.includes(index)) {
            updatedVisibleItems.push(index);
          }
        });
        setVisibleItems(updatedVisibleItems);
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <section  className={`   lg:pt-[10%] pt-[40%] bg-white `}>
   
      <div
        ref={headerRef}
        data-index={-1}
        className={`max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 px-12 z-50 transform transition-all duration-1000 ease-out ${
          visibleItems.includes(-1)
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "150ms" }}
      >
      
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full">
            About Socotra
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="pattern-circle"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect fill="url(#pattern-circle)" width="52" height="24" />
            </svg>
            <span className="relative">Island </span>
          </span>{" "}
          of Wonders
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Socotra is a remote island known for its unique nature, rich biodiversity, and stunning landscapes
        </p>
      </div>

      <div  className="w-full bg- relative h-auto bg-gradient-to-b from-white to-white">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-8 lg:p-16 ">
          {activites.map((product, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden transform transition-all duration-1000 ease-out hover:scale-105 active:scale-105  ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img src={product.img} alt={product.title} />
              <div className="w-full p-6">
                <h5 className="text-xl font-semibold font-manrope text-gray-900 mb-4">
                  {product.title}
                </h5>
                <p className="text-sm font-medium text-gray-600">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
}

export default About;
