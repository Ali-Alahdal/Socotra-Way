export default function AnimatedBackground() {
  const ballCount = 40;

  const random = (min, max) =>
    Math.random() * (max - min) + min;

  return (
    <div className="absolute inset-0 overflow-hidden z-0 balls-bg">
      {Array.from({ length: ballCount }).map((_, i) => {
        const top = `${random(0, 100)}%`;
        const left = `${random(0, 100)}%`;
        const duration = `${random(20, 60)}s`;
        const delay = `${-random(0, 30)}s`;
        const originX = `${random(-30, 30)}vw`;
        const originY = `${random(-30, 30)}vh`;
        const blur = `${random(4, 6)}vmin`;

        const style = {
          top,
          left,
          animationDuration: duration,
          animationDelay: delay,
          transformOrigin: `${originX} ${originY}`,
          boxShadow: `${Math.random() < 0.5 ? "-" : ""}40vmin 0 ${blur} currentColor`,
        };

        return <span key={i} className="ball" style={style} />;
      })}
    </div>
  );
}
