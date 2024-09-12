/* eslint-disable react/prop-types */
// import React from "react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const CardDragger = () => {
  return (
    <div className="relative h-screen w-full bg-neutral-950 text-white grid place-content-center overflow-hidden">
      <h1 className="uppercase z-0 relative text-neutral-800 text-[20vw] font-black md:text-[200px]">
        astro<span className="text-violet-600">.</span>
      </h1>
      <Cards />
    </div>
  );
};

const Cards = () => {
  const ref = useRef(null);
  return (
    <div ref={ref} className="absolute z-10 inset-0">
      <Card
        src="https://images.unsplash.com/photo-1422565096762-bdb997a56a84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fHww"
        alt="A dog"
        containerRef={ref}
        className="w-60"
        top="20%"
        left="25%"
        rotate="13deg"
      />
      <Card
        src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fHww"
        alt="A dog"
        containerRef={ref}
        className="w-60"
        top="25%"
        left="53%"
        rotate="-20deg"
      />
      <Card
        src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8fHww"
        alt="A dog"
        containerRef={ref}
        className="w-56"
        top="27%"
        left="40%"
        rotate="23deg"
      />
      <Card
        src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
        alt="A dog"
        containerRef={ref}
        className="w-48"
        rotate="-8deg"
        top="39%"
        left="10%"
      />
      <Card
        src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nfGVufDB8fDB8fHww"
        alt="A dog"
        containerRef={ref}
        className="w-72"
        rotate="-18deg"
        top="20%"
        left="15%"
      />
      <Card
        src="https://images.unsplash.com/photo-1504826260979-242151ee45b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fHww"
        alt="A dog"
        containerRef={ref}
        className="w-44"
        rotate="-3deg"
        top="35%"
        left="35%"
      />
      <Card
        src="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
        alt="A dog"
        containerRef={ref}
        className="w-64"
        top="36%"
        left="26%"
        rotate="30deg"
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, className, top, left, rotate }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const elemnts = document.querySelectorAll(".drag-elements");

    let maxIndex = -Infinity;

    elemnts.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxIndex) {
        maxIndex = zIndex;
      }
    });

    setZIndex(maxIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      src={src}
      alt={alt}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
      className={twMerge(
        "drag-elements absolute h-60 object-cover bg-neutral-100 p-1 pb-4",
        className
      )}
    />
  );
};

export default CardDragger;
