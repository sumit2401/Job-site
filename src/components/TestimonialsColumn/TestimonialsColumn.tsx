import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import { Cards } from "../Card/Cards";

interface columnData {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}

function TestimonialsColumn({
  columnData,
  className,
  duration,
  direction

}: {
  columnData: columnData[];
  className?: string;
  duration?: number;
  direction?: "up" | "down";
 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const columnVariants = {
    animate: (custom: number) => ({
      y: direction === "up" ? [0, custom] : [custom, 0],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        },
      },
    }),
    hover: {
      y: 0, // or any other numeric value that makes sense for your animation
    },
  };

  const handleHoverStart = useCallback(() => {
    setIsHovered(true);
    controls.stop();
  }, [controls]);

  const handleHoverEnd = useCallback(() => {
    setIsHovered(false);
    controls.start("animate");
  }, [controls]);

  useEffect(() => {
    if (!isHovered) {
      controls.start("animate");
    }
  }, [isHovered, controls]);

  const columnHeight = columnData.length * 300; // Adjust this value based on your card height
  const moveDistance = -columnHeight;
  return (
    <div className={className}>
      <motion.div
        className="flex flex-col gap-6 pb-6"
        variants={columnVariants}
        initial="animate"
        animate={controls}
        custom={moveDistance}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        // transition={{
        //   repeat: Infinity,
        //   duration: duration || 10,
        //   repeatType:  "loop",
        //   ease: "linear",
          
        // }}
      >
        {[...new Array(3)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {columnData.map(({ text, imageSrc, name, username }, index) => (
              // <div key={index} className="card">
              //   <div>{text}</div>
              //   <div className="mt-5 flex items-center gap-2">
              //     <Image
              //       src={imageSrc}
              //       alt={name}
              //       width={40}
              //       height={40}
              //       className="rounded-full"
              //     />
              //     <div className="flex flex-col">
              //       <div className="font-medium leading-5 tracking-tight">
              //         {name}
              //       </div>
              //       <div className="leading-5 tracking-tight">{username}</div>
              //     </div>
              //   </div>
              // </div>
              <Cards key={index} text={text} imageSrc={imageSrc} name={name} username={username}/>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export default TestimonialsColumn;
