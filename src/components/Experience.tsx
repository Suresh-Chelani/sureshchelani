import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';
import useSound from 'use-sound';
import experienceData from '../data/experience.json';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

export const Experience: React.FC = () => {
  const [playHover] = useSound('/sounds/hover.mp3', { volume: 0.2 });

  return (
    <section id = "experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {(experienceData.experiences as ExperienceItem[]).map((exp: ExperienceItem, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
              onHoverStart={() => playHover()}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex flex-wrap gap-4 items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 dark:text-white">{exp.title}</h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item: string, i: number) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-2 dark:text-gray-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
// ... existing code ...