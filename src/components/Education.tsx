import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import useSound from 'use-sound';
import educationData from '../data/education.json';

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  grade: string;
}

export const Education: React.FC = () => {
  const [playClick] = useSound('/sounds/click1.wav', { volume: 0.2 });

  return (
    <section id = "education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text"
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {(educationData.education as EducationItem[]).map((edu: EducationItem, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => playClick()}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 dark:text-white">{edu.institution}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Award className="w-4 h-4" />
                      <span>{edu.degree}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="mt-2 inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-700 dark:text-cyan-300"
                    >
                      {edu.grade}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};