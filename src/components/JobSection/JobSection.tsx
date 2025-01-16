"use client";

import { useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { FloatingTag } from "../FloatingJob/FloatingJob";

const tags = [
  "Cyber Security",
  "Blockchain Developers",
  "Vue JS Developers",
  "Android Developers",
  "Front End Developers",
  "Artificial Intelligence",
  "SaaS",
  "Robotics",
  "Hardware",
  "Node JS Developers",
  "Austin",
  "New York",
  "Los Angeles",
  "Aerospace",
  "Boston",
  "Stack Developers",
  "Databases",
  "Flutter Developers",
  "Los Angeles",
  "Aerospace",
  "Boston",
  "Stack Developers",
  "Databases",
  "Flutter Developers",
  "Los Angeles",
  "Aerospace",
  "Boston",
  "Stack Developers",
  "Databases",
  "Flutter Developers",
];

const checkOverlap = (
  pos1: { x: number; y: number },
  pos2: { x: number; y: number },
  minDistance: number
) => {
  const dx = pos1.x - pos2.x;
  const dy = pos1.y - pos2.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < minDistance;
};

const generatePosition = (width: number, height: number, padding: number) => ({
  x: padding + Math.random() * (width - 4 * padding),
  y: padding + Math.random() * (height - 2 * padding),
});

export default function JobSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [containerSize, setContainerSize] = useState({ width: 1000, height: 600 });
  const [positions, setPositions] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    const updateSize = () => {
      const container = document.getElementById("job-section-container");
      if (!container) return;

      const { width, height } = container.getBoundingClientRect();
      setContainerSize({ width, height });

      const newPositions: Array<{ x: number; y: number }> = [];
      const padding = 100;
      const minDistance = 150;

      tags.forEach(() => {
        let attempts = 0;
        let position: { x: number; y: number };
        let hasOverlap;

        do {
          position = generatePosition(width, height, padding);
          hasOverlap = newPositions.some((existingPos) =>
            checkOverlap(position, existingPos, minDistance)
          );
          attempts++;
        } while (hasOverlap && attempts < 50);

        newPositions.push(position);
      });

      setPositions(newPositions);
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const container = document.getElementById("job-section-container");
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    mouseX.set(offsetX);
    mouseY.set(offsetY);
  };

  return (
    <div
      id="job-section-container"
      className="relative mx-auto bg-slate-200 overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ width: "100%", height: "600px" }}
    >
      <h1
        className="font-bold text-black absolute inset-0 flex items-center justify-center"
        style={{ fontSize: "5rem" }}
      >
        Find what&apos;s<span className="text-pink-500 ml-2">Next</span> 
      </h1>

      {positions.length > 0 &&
        tags.map((tag, index) => (
          <FloatingTag
            key={index}
            text={tag}
            mouseX={mouseX}
            mouseY={mouseY}
            x={positions[index].x}
            y={positions[index].y}
            containerWidth={containerSize.width}
            containerHeight={containerSize.height}
          />
        ))}
    </div>
  );
}
