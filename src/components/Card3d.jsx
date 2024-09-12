// import React from "react";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";

const Card3d = () => {
  return (
    <div className="h-screen w-full relative grid place-content-center bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-500 text-white">
      <TitleCard />
    </div>
  );
};

const TitleCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className="h-96 w-72 relative rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(75px)",
          backgroundImage: `url(${"https://images.unsplash.com/photo-1469460340997-2f854421e72f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute bg-white object-cover inset-4 rounded-xl text-black grid place-content-center"
      >
        <FiMousePointer
          style={{
            // transformStyle: "preserve-3d",
            transform: "translateZ(75px)",
          }}
          className="text-4xl mx-auto"
        />
        <p
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="font-black uppercase cursor-pointer text-3xl mt-1.5"
        >
          Hover Me
        </p>
      </div>
    </motion.div>
  );
};

export default Card3d;
