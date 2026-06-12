import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import ToggleCircle from "../ToggleCircle";
import personalData from "../data/personal.json";
import { TypeAnimation } from "react-type-animation";
import useSound from "use-sound";
import { FaFileAlt } from "react-icons/fa";
const Hero = () => {
  const [playClick] = useSound("/sounds/click1.wav", { volume: 0.5 });
  const socialItems: Array<{ key: 'github' | 'linkedin' | 'resume' | 'leetcode' | 'instagram' }> = [
    { key: 'github' },
    { key: 'linkedin' },
    { key: 'resume' },
    { key: 'leetcode' },
    { key: 'instagram' },
  ];
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div id="vanta-bg" className="absolute inset-0 z-0" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
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
          <h3>I'm</h3>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {socialItems.map((item, index) => {
            const key = item.key;

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
                  className="rounded-full p-2 transition-all md:p-3"
                >
                  <Image
                    src={personalData.social[key].img}
                    alt={key}
                    width={40}
                    height={40}
                    className="h-8 w-8 object-contain md:h-10 md:w-10"
                  />
                </motion.a>
              );
            }

            return (
              <motion.a
                onClick={() => playClick()}
                key={key}
                href={personalData.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group ml-2 flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 px-2 py-2 text-white shadow-md transition-all duration-300 hover:shadow-xl sm:gap-3 sm:px-4"
              >
                <FaFileAlt className="text-lg text-white transition-transform group-hover:scale-110 sm:text-xl" />
                <span className="hidden text-sm tracking-wide sm:inline">View Resume</span>
              </motion.a>
            );
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
