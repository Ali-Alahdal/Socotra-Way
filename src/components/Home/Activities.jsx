import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Landscapes from "../../assets/images/home/landscapes.jpg";
import Stars from "../../assets/images/home/stars.jpg";
import Swim from "../../assets/images/home/swim.jpg";

function Activities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const cards = [
    {
      id: 1,
      title: "DOLOMITES SUNRISE",
      subtitle: "Winter Mountains",
      description: "Celebrate the season by planning a wintertime trip to one of our favourite mountain getaways.",
      imageUrl: Stars,
      thumbnailUrl: Stars  
    },
    {
      id: 2,
      title: "WHITE ALPS CLOUDS",
      subtitle: "Cold Weather Adventures",
      description: "Experience the magic of alpine winters with our exclusive guided tours through snow-covered peaks.",
      imageUrl: Swim,
      thumbnailUrl: Swim
    },
    {
      id: 3,
      title: "LIGHTS OF AURORA",
      subtitle: "Northern Wonders",
      description: "Witness the breathtaking aurora borealis dancing across winter mountain skies.",
      imageUrl: Landscapes,
      thumbnailUrl: Landscapes
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, cards.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToCard = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Reorder cards to always show current first
  const reorderedCards = [
    cards[currentIndex],
    ...cards.filter((_, index) => index !== currentIndex)
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* <div className="absolute z-50 top-0 bg-linear-60  w-full h-full  bg-cover bg-center"
      
        style={{ 
            backgroundImage: `url(${Wave})`,
          }}>

      </div> */}
      {/* Background image - only on right side */}
      <div className="absolute inset-0 flex">
        {/* Left side - pure black */}
        <div className="w-1/2 h-full bg-black"></div>
        
        {/* Right side - current card image */}
        <div 
          className="w-1/2 h-full  transition-all duration-1000 ease-in-out"
          
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
      </div>

      {/* Content container */}
      <div  className="relative  bg-cover bg-center z-10 flex flex-col lg:flex-row h-full container mx-auto px-4 sm:px-6" style={{ 
            backgroundImage: `url(${cards[currentIndex].imageUrl})`,
          }} >
        {/* Left side - text content with fade animation */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-8 lg:py-0 lg:pr-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white max-w-md mx-auto lg:mx-0"
            >
              <h3 className="text-lg sm:text-xl font-light mb-2 tracking-wider">
                {cards[currentIndex].subtitle}
              </h3>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                {cards[currentIndex].title}
              </h2>
              <p className="text-base sm:text-lg font-light mb-6 sm:mb-8 leading-relaxed">
                {cards[currentIndex].description}
              </p>
              <button className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-black rounded-md hover:bg-gray-100 transition-colors font-medium text-sm sm:text-base">
                Book Your Destination
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right side - horizontal card thumbnails with sliding animation */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center pb-8 lg:pb-0 lg:pl-12">
          <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 pl-4 sm:pl-6">
            <div className="flex overflow-x-visible pb-4 space-x-6 sm:space-x-8 items-end h-full">
              <AnimatePresence>
                {reorderedCards.map((card, index) => {
                  const isCurrent = card.id === cards[currentIndex].id;
                  return (
                    <motion.div
                      key={card.id}
                      initial={{ x: index === 0 ? 0 : 50 }}
                      animate={{ 
                        x: 0,
                        opacity: isCurrent ? 1 : 0.8,
                        y: isCurrent ? -20 : 0
                      }}
                      transition={{ 
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                      }}
                      onClick={() => goToCard(cards.findIndex(c => c.id === card.id))}
                      className={`flex-shrink-0 relative cursor-pointer`}
                    >
                      <img 
                        src={card.thumbnailUrl} 
                        alt={card.title}
                        className={`h-48 sm:h-56 md:h-64 lg:h-72 w-32 sm:w-40 md:w-48 lg:w-56 object-cover rounded-lg shadow-xl transition-all duration-300 `}
                      />
                      {isCurrent && (
                        <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 text-center">
                          <span className="text-white font-bold text-sm sm:text-base bg-black  px-3 py-1.5 rounded">
                            {card.title}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center lg:justify-end mt-8 space-x-4">
            <button 
              onClick={goToPrev}
              className="p-3 sm:p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all text-white"
              aria-label="Previous card"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6"  viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={goToNext}
              className="p-3 sm:p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all text-white"
              aria-label="Next card"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6"  viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;