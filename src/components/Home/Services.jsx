import Travel from "../../assets/images/home/bg/travel.jpg";
import * as motion from "motion/react-client";
import AnimatedBackground from "../Parts/AnimatedBackground" // adjust path as needed

export default function ScrollTriggered() {
  return (
    <section style={sectionStyle} className="text-black  relative overflow-hidden ">
      
            {/* Section Header */}
       <div className="absolute top-0 text-center  w-full h-full z-50 text-black ">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl mb-4">
          Choose Your Escape
        </h2>
   
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Indulge in relaxation or adventure this season.
        </p>
      </div>
         <AnimatedBackground />
      <div style={container} className="mt-12">
        
        {cards.map(([imageUrl, hueA, hueB, title, description], i) => (
          
          <Card
            i={i}
            imageUrl={imageUrl}
            hueA={hueA}
            hueB={hueB}
            title={title}
            description={description}
            key={title}
          />
        ))}
      </div>
       
    </section>
  );
}

function Card({ imageUrl, hueA, hueB, i, title, description }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={`card-container-${i} mb-24  `}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    > 
      <div style={{ ...splash, background }} />
 
       
      <motion.div style={card} variants={cardVariants} className="card">
        <img src={imageUrl} alt={title} style={imageStyle} />
        <div style={textContent}>
          <h3 style={titleStyle}>{title}</h3>
          <p style={descriptionStyle}>{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */

const sectionStyle = {
  padding: "4rem 1rem",
};

const container = {
  margin: "50px auto",
  maxWidth: 500,
  paddingBottom: 100,
  width: "100%",
};

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
};

const splash = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath:
    "path('M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z')",
};

const card = {
  width: 240,
  height: 340,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: 20,
  background: "#f5f5f5",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
  padding: 16,
};

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: 12,
  marginBottom: 8,
};

const textContent = {
  textAlign: "center",
};

const titleStyle = {
  fontSize: 18,
  fontWeight: "bold",
  marginBottom: 4,
  color: "#333",
};

const descriptionStyle = {
  fontSize: 14,
  color: "#666",
};

/**
 * ==============   Image Data   ================
 */

const cards = [
  [Travel, 340, 10, "Visa & Flights", "We assist with visa applications and flight bookings, ensuring an easy route to Socotra through cities like Cairo or Abu Dhabi."],
  [Travel, 20, 40, "Juicy Orange", "Vibrant and energetic location, full of flavor and life."],
  ["https://via.placeholder.com/200x300?text=Lemon", 60, 90, "Sour Lemon", "A tangy spot for a sour but memorable adventure."],
  ["https://via.placeholder.com/200x300?text=Pear", 80, 120, "Sweet Pear", "Soft and serene, great for relaxed getaways."],
  ["https://via.placeholder.com/200x300?text=Apple", 100, 140, "Green Apple", "Classic charm with a refreshing twist."],
  ["https://via.placeholder.com/200x300?text=Blueberry", 205, 245, "Fresh Blueberries", "Cool and juicy vibes for a laid-back retreat."],
  ["https://via.placeholder.com/200x300?text=Eggplant", 260, 290, "Healthy Eggplant", "Wholesome and nourishing adventures await."],
  ["https://via.placeholder.com/200x300?text=Grapes", 290, 320, "Purple Grapes", "Elegant and rich experiences for the curious."],
];
