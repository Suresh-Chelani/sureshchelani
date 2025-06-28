import React from "react";
import { motion } from "framer-motion";
import ToggleCircle from "../ToggleCircle";
import personalData from "../data/personal.json";
import { TypeAnimation } from "react-type-animation";
import useSound from "use-sound";
import { FaFileAlt } from "react-icons/fa";
const Hero = () => {
  const [playClick] = useSound("/sounds/click1.wav", { volume: 0.5 });
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(0, 255, 255, 0.3)",
                "0 0 60px rgba(0, 255, 255, 0.3)",
                "0 0 20px rgba(0, 255, 255, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block rounded-full p-1 bg-gradient-to-r from-cyan-500 to-purple-500"
          >
            <ToggleCircle />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text"
        >
          Suresh Chelani
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3>I' am</h3>
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Competitive Programmer",
              2000,
              "Coder",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8"
            repeat={Infinity}
          />
        </motion.div>

        {/* Links Row */}
        
        {/* Links Row */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.9 }}
  className="flex justify-center align-center items-center gap-6 flex-wrap"
>
  {[
    { key: "github" },
    { key: "linkedin" },
    { key: "resume" },
    { key: "leetcode" },
    { key: "instagram" },
  ].map((item, index) => {
    const key = item.key as keyof typeof personalData.social;

    if (key !== "resume") {
      return (
        <motion.a
          onClick={() => playClick()}
          key={key}
          href={personalData.social[key].link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
          className="rounded-full transition-all p-2 md:p-3"
        >
          <img
            src={personalData.social[key].img}
            alt={key}
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
            style={{ display: "block" }}
          />
        </motion.a>
      );
    } else {
      return (
        <motion.a
        onClick={() => playClick()}
        key={key}
        href={personalData.resume}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center gap-2 px-2 sm:gap-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium sm:font-semibold shadow-md hover:shadow-xl transition-all duration-300 ml-2"
      >
        <FaFileAlt className="text-white text-lg sm:text-xl group-hover:scale-110 transition-transform" />
        <span className="text-sm tracking-wide hidden sm:inline">View Resume</span>
      </motion.a>
      
      );
    }
  })}
</motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-cyan-500 dark:text-cyan-400"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
