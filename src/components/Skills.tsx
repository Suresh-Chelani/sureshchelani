import React from 'react';
import { motion } from 'framer-motion';
import {
  Braces,
  FileCode2,
  Database,
  Globe,
  Cpu,
  Layout,
  Server,
  GitBranch,
  Code,
  Terminal
} from 'lucide-react';
import useSound from 'use-sound';
import skillsData from '../data/skills.json';

interface SkillCategory {
  name: string;
  items: string[];
}

const iconMap: Record<string, JSX.Element> = {
  'C++': <Braces className="w-5 h-5" />,
  'JavaScript': <FileCode2 className="w-5 h-5" />,
  'Python': <Terminal className="w-5 h-5" />,
  'C': <Code className="w-5 h-5" />,
  'React.js': <Layout className="w-5 h-5" />,
  'HTML': <Globe className="w-5 h-5" />,
  'CSS': <Layout className="w-5 h-5" />,
  'Tailwind CSS': <Layout className="w-5 h-5" />,
  'Bootstrap': <Layout className="w-5 h-5" />,
  'Node.js': <Server className="w-5 h-5" />,
  'Express.js': <Server className="w-5 h-5" />,
  'MongoDB': <Database className="w-5 h-5" />,
  'Git': <GitBranch className="w-5 h-5" />,
  'GitHub': <GitBranch className="w-5 h-5" />,
  'VS Code': <Code className="w-5 h-5" />,
  'Data Structures': <Cpu className="w-5 h-5" />,
  'Algorithms': <Cpu className="w-5 h-5" />,
  'Problem Solving': <Cpu className="w-5 h-5" />
};

export const Skills: React.FC = () => {
  const paths = "../sounds/hover.mp3"
  const [playHover] = useSound(paths, { volume: 0.2 });

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
              onHoverStart={() => playHover()}
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
                    className="flex items-center gap-2"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-700 dark:text-cyan-300">
                      {iconMap[skill]}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
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