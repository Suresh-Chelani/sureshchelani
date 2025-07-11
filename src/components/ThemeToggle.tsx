import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import useSound from 'use-sound';

export const ThemeToggle: React.FC = () => {
  const {theme, toggleTheme } = useTheme();
  const [playClick] = useSound('/sounds/click1.wav', { volume: 0.5 });
  // const handleToggle = () => {
  //   toggleTheme();
  // };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {toggleTheme(), playClick()}}
      className="z-10 fixed top-4 right-10 p-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
    >
      {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
    </motion.button>
  );
};