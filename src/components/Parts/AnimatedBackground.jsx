import Tree from "../../assets/images/home/tree.png"

export default function AnimatedBackground() {
  const ballCount = 40;
  const imageUrl = Tree; // Replace with your image path

 
  const random = (min, max) => Math.random() * (max - min) + min;

  return (
    <div className="balls-bg">
      {Array.from({ length: ballCount }).map((_, i) => {
        const top = `${random(0, 100)}%`;
        const left = `${random(0, 100)}%`;
        const duration = `${random(20, 60)}s`;
        const delay = `${-random(0, 30)}s`;
        const originX = `${random(-30, 30)}vw`;
        const originY = `${random(-30, 30)}vh`;

        const style = {
          position: "absolute",
          top,
          left,
          width: "10vmin",
          height: "10vmin",
          objectFit: "contain",
       
          animation: `move ${duration} linear infinite`,
          animationDelay: delay,
          transformOrigin: `${originX} ${originY}`,
        };

        return <img key={i} src={imageUrl} style={style} alt="" draggable={false} />;
      })}
    </div>
  );
}
