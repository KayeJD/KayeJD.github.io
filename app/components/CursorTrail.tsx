// This is just experimenting

import { useEffect } from "react";

export function CursorTrail() {
  useEffect(() => {
    let counter = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const id = counter++;

      const el = document.createElement("div");
      el.className = "cursor-trail-dot";
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      document.body.appendChild(el);

      requestAnimationFrame(() => {
        el.style.opacity = "0";
        el.style.transform = "translate(-50%, -50%) scale(0.2)";
      });

      setTimeout(() => el.remove(), 600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}
