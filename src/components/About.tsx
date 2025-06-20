import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Database, Globe } from 'lucide-react';
import aboutData from '../data/about.json';

const skillIcons = {
  'Languages': <Code className="w-5 h-5" />,
  'Frontend': <Globe className="w-5 h-5" />,
  'Backend': <Database className="w-5 h-5" />,
  'Core': <Cpu className="w-5 h-5" />
};

export const About = () => {
  return (
    <section id = "about" className=" py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {aboutData.aboutText.map((text, idx) => (
              <p key={idx} className="text-lg dark:text-gray-300">{text}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            {aboutData.skills.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                    {skillIcons[category.name]}
                  </div>
                  <h3 className="font-semibold dark:text-white">{category.name}</h3>
                </div>
                <ul className="space-y-1">
                  {category.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="text-sm dark:text-gray-300"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};