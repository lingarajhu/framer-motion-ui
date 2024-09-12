// import React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const AurorHero = () => {
  const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  const color = useMotionValue(COLORS[0]);
  const background = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020317 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.section
      style={{
        background,
      }}
      className="relative grid place-content-center overflow-hidden bg-gray-950 text-gray-200 px-4 py-24 min-h-screen"
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="text-sm rounded-full py-2 px-3 mb-1.5 bg-gray-600/50 inline-block">
          Beta Now Live!
        </span>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent text-center text-3xl font-medium leading-tight sm-text-5xl md:text-7xl">
          Decrease your SaaS chrun by over 90%
        </h1>
        <p className="my-6 text-base max-w-xl text-center leading-relaxed md:text-lg md:leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          impedit officiis totam aliquid quas quidempturi officiis totam
          aliquid?
        </p>
        <motion.button
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          style={{
            border,
            boxShadow,
          }}
          className="relative flex gap-2 group w-fit items-center bg-gray-950/10 rounded-full hover:bg-gray-950/50 transition-colors px-4 py-2"
        >
          Start free trail
          <FiArrowRight className="group-hover:-rotate-45 group-active:-rotate-12 transition-transform" />
        </motion.button>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default AurorHero;
