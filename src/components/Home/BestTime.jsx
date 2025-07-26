import { useEffect, useRef, useState } from "react";
import Travel from "../../assets/images/home/bg/travel.jpg";
import BestTimeImage from "../../assets/images/home/besttime.jpg";

function BestTime() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const [visible, setVisible] = useState({ section: false, image: false, text: false });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const newVisibility = { ...visible };
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = entry.target.getAttribute("data-key");
            newVisibility[key] = true;
          }
        });
        setVisible(newVisibility);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, [visible]);

  return (
    <div
      ref={sectionRef}
      data-key="section"
      className="hero relative min-h-screen bg-center bg-cover overflow-hidden px-4"
    >
      <div className="container px-6 mx-auto">
        <div className="items-center lg:flex">
          {/* Text Content */}
          <div
            ref={textRef}
            data-key="text"
            className={`w-full lg:w-1/2 transform transition-all duration-1000 ease-out ${
              visible.text ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
                Best place to choose <br /> your{" "}
                <span className="text-orange-300">clothes</span>
              </h1>
              <p className="mt-3 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                beatae error laborum ab amet sunt recusandae? Reiciendis natus
                perspiciatis optio.
              </p>
              <button className="w-full px-5 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-orange-300 rounded-lg lg:w-auto hover:bg-orange-400 active:bg-orange-500">
                Shop Now
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div
            ref={imageRef}
            data-key="image"
            className={`flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 transform transition-all duration-1000 ease-out ${
              visible.image ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <img
              className="w-full h-full lg:max-w-3xl rounded-3xl"
              src={BestTimeImage}
              alt="Catalogue"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestTime;
