import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Trophy, Star, Award, Github, Linkedin, ExternalLink } from 'lucide-react';
import useSound from 'use-sound';
import codingProfilesData from '../data/codingProfiles.json';

interface CodingProfile {
  platform: string;
  link: string;
  stats: string;
  solved: string;
  achievements: string[];
  color: string;
}

const platformIcons = {
  LeetCode: <Code2 className="w-6 h-6 text-white" />,
  GitHub: <Github className="w-6 h-6 text-white" />,
  LinkedIn: <Linkedin className="w-6 h-6 text-white" />,
  // Add more as needed
};

export const CodingProfiles: React.FC = () => {
  const [playClick] = useSound('/sounds/click1.wav', { volume: 0.2 });

  return (
    <section id="coding" className="py-20 px-4 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text">
          Coding Profiles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {(codingProfilesData.profiles as CodingProfile[]).map((profile: CodingProfile, index: number) => (
            <motion.a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              key={profile.platform}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => playClick()}
              className="p-6 block rounded-xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex justify-center items-center gap-2 mb-4">
                <div className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${profile.color} shadow`}>
                <img
                    className="w-12 h-12 object-contain"
                    src={profile.icon}
                    alt={profile.platform}
                  />
                </div>
                <h3 className="text-2xl font-bold dark:text-white flex items-center gap-2">
                  {profile.platform}
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 hover:text-purple-500 transition-colors"
                    aria-label={`Visit ${profile.platform} profile`}
                  >
                    <ExternalLink className="w-5 h-5 inline" />
                  </a>
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <p className="dark:text-gray-300">{profile.stats}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-purple-500" />
                  <p className="dark:text-gray-300">{profile.solved}</p>
                </div>
                {profile.achievements.map((achievement: string, i: number) => (
                  <div key={i} className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-cyan-500" />
                    <p className="dark:text-gray-300">{achievement}</p>
                  </div>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};