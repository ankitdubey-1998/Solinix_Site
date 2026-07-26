import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    const handleMouseMove = (e) => {
      // requestAnimationFrame se smooth movement, lag-free
      requestAnimationFrame(() => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[9999] w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-multiply opacity-40"
      style={{
        background:
          "radial-gradient(circle, rgba(168,85,247,0.6) 0%, rgba(59,130,246,0.4) 40%, transparent 70%)",
        filter: "blur(40px)",
        transition: "left 0.05s linear, top 0.05s linear",
      }}
    />
  );
};

export default CursorGlow;