import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, LineChart, Newspaper, Type, Monitor } from 'lucide-react';
import useSound from 'use-sound';
import projectsData from '../data/projects.json';

const iconMap: Record<string, JSX.Element> = {
  'LineChart': <LineChart className="w-6 h-6" />,
  'Newspaper': <Newspaper className="w-6 h-6" />,
  'Type': <Type className="w-6 h-6" />,
  'Monitor': <Monitor className="w-6 h-6" />
};

export const Projects: React.FC = () => {
  const [playClick] = useSound('..//..//sounds/click1.wav', { volume: 0.2 });

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                  {iconMap[project.icon]}
                </div>
                <div>
                  <h3 className="text-2xl font-bold dark:text-white">{project.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{project.date}</p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

              <ul className="space-y-2 mb-4">
                {project.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex-shrink-0" />
                    {point}
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-700 dark:text-cyan-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.a
                  href={project.links.github}
                  onClick={() => playClick()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400"
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.a>
                <motion.a
                  href={project.links.live}
                  onClick={() => playClick()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};