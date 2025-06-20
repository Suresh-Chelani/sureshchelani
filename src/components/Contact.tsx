import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import useSound from 'use-sound';
import personal from '../data/personal.json';

export const Contact: React.FC = () => {
  const [playClick] = useSound('/sounds/click1.wav', { volume: 0.5 });

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold dark:text-white mb-6">Get in Touch</h3>

            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => playClick()}
              className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                <a href={`mailto:${personal.email}`} className="text-gray-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400">
                  {personal.email}
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => playClick()}
              className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                <a href={`tel:${personal.phone}`} className="text-gray-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400">
                  {personal.phone}
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => playClick()}
              className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                <p className="text-gray-900 dark:text-white">{personal.location}</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all"
                  placeholder="Your message"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => playClick()}
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
// ... existing code ...