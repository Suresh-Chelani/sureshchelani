import React from 'react';
import personal from '../data/personal.json';

const SOCIAL_NAMES: Record<string, string> = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
  leetcode: 'LeetCode',
};

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} {personal.copyright}. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          {personal.footerOrder.map((key: string) => (
            <a
              key={key}
              href={personal.social[key as keyof typeof personal.social]}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500 transition-colors"
            >
              {SOCIAL_NAMES[key] || key}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
} 