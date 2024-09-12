/* eslint-disable react/prop-types */
// import React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";

const NavBar = () => {
  return (
    <div className="h-screen bg-neutral-100 grid place-content-center ">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({ ...pv, opacity: 0 }));
      }}
      className="flex relative w-fit items-center border-2 bg-white px-1 py-2 border-black rounded-full"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Pricing</Tab>
      <Tab setPosition={setPosition}>Feature</Tab>
      <Tab setPosition={setPosition}>Docs</Tab>
      <Tab setPosition={setPosition}>Blog</Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      ref={ref}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-sm uppercase text-white mix-blend-difference"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-10 md:h-11 w-24 rounded-full bg-black"
    />
  );
};

export default NavBar;
