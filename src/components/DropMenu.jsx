/* eslint-disable react/prop-types */
// import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const DropMenu = () => {
  return (
    <div className="h-screen w-full bg-neutral-900 grid place-content-start justify-center py-32 text-white">
      <DropMenuLink href="#" DropMenuContent={PricingContent}>
        Hover me
      </DropMenuLink>
    </div>
  );
};

const DropMenuLink = ({ children, href, DropMenuContent }) => {
  const [show, setShow] = useState(false);

  const showConent = show && DropMenuContent;

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="relative h-fit w-fit"
    >
      <a className="relative text-white" href={href}>
        {children}
        <span
          style={{ transform: showConent ? "scaleX(1)" : "scaleX(0)" }}
          className="h-1 rounded-full origin-left scale-x-0 absolute -bottom-3 -right-1 -left-1  bg-violet-400 transition-transform duration-200 ease-out"
        />
      </a>
      <AnimatePresence>
        {showConent && (
          <motion.div
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              translateX: "-50%",
            }}
            className="w-44 h-60 bg-white text-black absolute left-1/2 top-12"
          >
            <div className="absolute w-full h-6 -top-6 left-0 right-0 bg-transparent" />
            <div className="absolute size-5 bg-white left-1/2 top-2 -translate-x-1/2 -translate-y-1/2 rotate-45" />
            <DropMenuContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">For Individuals</h3>
        <a href="#" className="block text-sm hover:underline">
          Introduction
        </a>
        <a href="#" className="block text-sm hover:underline">
          Pay as you go
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">For Companies</h3>
        <a href="#" className="block text-sm hover:underline">
          Startups
        </a>
        <a href="#" className="block text-sm hover:underline">
          SMBs
        </a>
        <a href="#" className="block text-sm hover:underline">
          Enterprise
        </a>
      </div>
      <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        Contact sales
      </button>
    </div>
  );
};

export default DropMenu;
