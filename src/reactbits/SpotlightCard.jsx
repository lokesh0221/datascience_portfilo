import { useRef } from "react";
import "./SpotlightCard.css";

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(139, 92, 246, 0.35)" }) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = divRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    el.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div ref={divRef} onMouseMove={handleMouseMove} className={`card-spotlight ${className}`}>
      {children}
    </div>
  );
};

export default SpotlightCard;
