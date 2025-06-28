import React, { useRef, useEffect, useState } from 'react';
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
  const [playClick] = useSound('/sounds/click1.wav', { volume: 0.2 });
  const timelineRef = useRef<HTMLDivElement>(null);
  const stickRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [stickHeight, setStickHeight] = useState(0);

  useEffect(() => {
    // Set stick height to match the timeline/cards
    if (stickRef.current) {
      setStickHeight(stickRef.current.offsetHeight);
    }
  }, [experienceData.experiences]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const section = timelineRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height - windowHeight;
      if (rect.top >= 0) {
        setProgress(0);
      } else if (Math.abs(rect.top) >= totalHeight) {
        setProgress(1);
      } else {
        setProgress(Math.min(1, Math.max(0, Math.abs(rect.top) / totalHeight)));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = experienceData.experiences as ExperienceItem[];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text"
        >
          Experience
        </motion.h2>
        <div ref={timelineRef} className="relative flex flex-col md:flex-row md:items-start">
          {/* Timeline Stick - only show on md and up */}
          <div className="hidden md:flex flex-col items-center relative mr-10" style={{ width: '32px', height: stickHeight ? `${stickHeight}px` : '100%' }}>
            {/* Full stick */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-700 rounded-full" style={{ height: '100%' }} />
            {/* Progress fill */}
            <div
              className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full transition-all duration-300 z-10"
              style={{ height: `${progress * 100}%` }}
            />
            {/* Dots for each card */}
            {experiences.map((_, idx) => (
              <span
                key={idx}
                className="z-20 w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 bg-gradient-to-r from-cyan-500 to-purple-500 absolute left-1/2 -translate-x-1/2"
                style={{ top: `calc(${(idx+0.2) * (100 / experiences.length)}%)`, transform: 'translate(-50%, -50%)' }}
              />
            ))}
          </div>
          {/* Experience Cards */}
          <div className="flex-1 space-y-12" ref={stickRef}>
            {experiences.map((exp: ExperienceItem, index: number) => (
              <div key={index} className="flex items-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.01 }}
                  onClick={() => playClick()}
                  className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all w-full"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};