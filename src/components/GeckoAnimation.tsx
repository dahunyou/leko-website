"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function GeckoAnimation() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => ({
        x: prev.x + 5 * direction,
        y: prev.y + Math.sin(prev.x / 50) * 5,
      }));

      if (position.x > window.innerWidth - 100 || position.x < 0) {
        setDirection((prev) => prev * -1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [position, direction]);

  return (
    <div
      className="fixed top-1/3 left-0 w-24 h-24"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scaleX(${direction})`,
        transition: "transform 0.1s linear",
      }}
    >
      <Image src="/images/dancing_leopard_gecko.gif" alt="Dancing Gecko" width={80} height={80} />
    </div>
  );
}
