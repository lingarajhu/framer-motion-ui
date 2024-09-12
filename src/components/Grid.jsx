/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// import React from 'react'
import { motion } from "framer-motion";
import { FiArrowUpRight, FiMapPin, FiMail } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { SiYoutube, SiGithub, SiX, SiLinkedin } from "react-icons/si";

const Grid = () => {
  return (
    <div className="relative min-h-screen py-12 px-4 bg-neutral-900 overflow-hidden text-white">
      <GridLayout />
      <Footer />
    </div>
  );
};

const GridLayout = () => {
  return (
    <div className="max-w-4xl grid grid-cols-12 grid-flow-dense gap-4 mx-auto h-1/2">
      <HeaderBlock />
      <SocialBlocks />
      <DescriptionBlock />
      <LocationBlock />
      <EmailListBlock />
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      className={twMerge(
        "col-span-4 rounded-lg bg-zinc-800 border border-zinc-700 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <img
        src="https://api.dicebear.com/9.x/adventurer/svg?seed=Missy"
        alt="avatar"
        className="size-16 rounded-full mb-2"
      />
      <h1 className="mb-2 font-medium leading-tight text-3xl">
        Hi, I'm Lingraj.
        <span className=" text-zinc-400">
          {" "}
          I build cool website like this one.
        </span>
      </h1>
      <a
        href="#"
        className="text-base hover:underline text-orange-500 flex items-center gap-1 group"
      >
        contact{" "}
        <FiArrowUpRight className="group-hover:rotate-45 duration-200 ease-out" />
      </a>
    </Block>
  );
};

const SocialBlocks = () => {
  return (
    <>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-red-500 md:col-span-3"
      >
        <a className="grid place-content-center h-full text-3xl text-white">
          <SiYoutube />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-black md:col-span-3"
      >
        <a className="grid place-content-center h-full text-3xl text-white">
          <SiX />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-green-500 md:col-span-3"
      >
        <a className="grid place-content-center h-full text-3xl text-white">
          <SiGithub />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-blue-500 md:col-span-3"
      >
        <a className="grid place-content-center h-full text-3xl text-white">
          <SiLinkedin />
        </a>
      </Block>
    </>
  );
};

const DescriptionBlock = () => {
  return (
    <Block className="col-span-12 row-span-2">
      <p className="text-3xl leading-snug">
        My passion is building cool stuff.{" "}
        <span className="text-zinc-400">
          {" "}
          I build primarily with React, Tailwind CSS, and Framer Motion. I love
          this stack so much that I even built a website about it. I've made
          over a hundred videos on the subject across YouTube and TikTok.
        </span>
      </p>
    </Block>
  );
};

const LocationBlock = () => {
  return (
    <Block className="col-span-12 md:col-span-3 flex flex-col items-center gap-4">
      <FiMapPin className="text-3xl text-white" />
      <p className="text-xl text-zinc-400 text-center">Cyberspace</p>
    </Block>
  );
};

const EmailListBlock = () => {
  return (
    <Block className="col-span-12 md:col-span-9">
      <p className="mb-2 text-lg ">Join my mailing list</p>
      <form
        className="flex items-center gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Enter your mail"
          className="w-full px-3 py-1.5 rounded bg-zinc-800 border border-zinc-700 transition-colors focus:border-red-300 focus:outline-0"
        />
        <button
          className="flex items-center gap-1 bg-zinc-50 hover:bg-zinc-300 px-3 py-2 text-zinc-900 text-sm whitespace-nowrap transition-colors rounded font-medium"
          type="submit"
        >
          <FiMail /> Join the list
        </button>
      </form>
    </Block>
  );
};

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Made with ❤️ by{" "}
        <a
          href="https://www.linkedin.com/in/lingrajhu/"
          target="_blank"
          className="text-red-300 hover:underline"
        >
          @lingraj
        </a>
      </p>
    </footer>
  );
};

export default Grid;
