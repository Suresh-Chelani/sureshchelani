import React from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import skillsData from '../data/skills.json';

interface SkillCategory {
  name: string;
  items: string[];
}

// Helper to map skill names to SVG/PNG paths
const skillToSvg: Record<string, string> = {
  'C++': '/svgs/cpp.svg',
  'JavaScript': '/svgs/javascript.svg',
  'Python': '/svgs/python.svg',
  'C': '/svgs/c.svg',
  'React.js': '/svgs/reactjs.svg',
  'HTML': '/svgs/html.svg',
  'CSS': '/svgs/css.svg',
  'Tailwind CSS': '/svgs/tailwindcss.svg',
  'Astro.js': '/svgs/astrojs.svg',
  'Node.js': '/svgs/nodejs.svg',
  'Express.js': '/svgs/expressjs.svg',
  'MongoDB': '/svgs/mongodb.svg',
  'Git': '/svgs/git.svg',
  'GitHub': '/images/github.png', // PNG fallback
  'VS Code': '/svgs/vscode.svg',
  'Data Structures & Algorithms': '/images/datastructures.png', // PNG fallback
  'Problem Solving': '/svgs/problemsolving.svg', // fallback SVG
};

export const Skills: React.FC = () => {
  const paths = "/sounds/click1.wav"
  const [playClick] = useSound(paths, { volume: 0.2 });

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(skillsData.skills as SkillCategory[]).map((category: SkillCategory, index: number) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => playClick()}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all"
            >
              <h3 className="text-xl font-bold mb-4 dark:text-white">{category.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill: string, i: number) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-center justify-center"
                  >
                    <div className="relative flex items-center justify-center group">
                      <div className="p-2 rounded-lg bg-white/80 dark:bg-dark flex items-center justify-center">
                        <img
                          src={skillToSvg[skill] || '/svgs/astrojs.svg'}
                          alt={skill}
                          className="w-20 h-20 object-contain drop-shadow-lg hover:scale-110 transition-transform duration-300"
                          draggable="false"
                        />
                      </div>
                      {/* Tooltip */}
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded bg-gray-800 text-white dark:bg-white dark:text-black text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap shadow-lg">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};