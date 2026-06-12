import React, { useState, useEffect } from 'react';
import {
  Home,
  User,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Code2,
  Mail
} from 'lucide-react';
import useSound from 'use-sound';
interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: <Home size={20} />, label: 'Home', href: '#home' },
  { icon: <User size={20} />, label: 'About', href: '#about' },
  { icon: <Briefcase size={20} />, label: 'Experience', href: '#experience' },
  { icon: <GraduationCap size={20} />, label: 'Education', href: '#education' },
  { icon: <FolderGit2 size={20} />, label: 'Projects', href: '#projects' },
  { icon: <Code2 size={20} />, label: 'Coding', href: '#coding' },
  { icon: <Mail size={20} />, label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [playClick] = useSound('/sounds/click1.wav', { volume: 0.5 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-all duration-300 w-[60%] max-w-4xl ${isScrolled ? 'scale-95' : 'scale-100'
        }`}>
        <nav className="relative">
          <div className="absolute inset-0 bg-background/40 dark:bg-background/20 backdrop-blur-md shadow-lg">
            {/* Left curve */}
            <div className="absolute -left-6 top-0 bottom-0 w-12 bg-background/40 dark:bg-background/20 backdrop-blur-md transform skew-x-[12deg]"></div>
            {/* Right curve */}
            <div className="absolute -right-6 top-0 bottom-0 w-12 bg-background/40 dark:bg-background/20 backdrop-blur-md transform -skew-x-[12deg]"></div>
          </div>
          <div className="relative flex items-center justify-between h-14 px-32">
            <div className="flex space-x-12">
              {navItems.map((item) => (
                <a
                  onClick={() => playClick()}
                  key={item.label}
                  href={item.href}
                  className="move-y-2text-black hover:-translate-y-2 hover:text-blue-500 transition-transform duration-300 group flex flex-col items-center text-foreground hover:text-primary transition-all duration-300"
                >
                  <span className="transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="text-[10px] mt-0.5 transition-opacity duration-300">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="relative">
          <div className="absolute inset-0 bg-background/60 backdrop-blur-md shadow-lg">
            {/* Top curve */}
            <div className="absolute left-0 right-0 -top-6 h-12 bg-background/60 backdrop-blur-md rounded-t-[2rem]"></div>
          </div>
          <div className="relative flex justify-around items-center h-16 px-4 pt-1">
            {navItems.map((item) => (
              <a
                onClick={() => playClick()}
                key={item.label}
                href={item.href}
                className="flex text-black hover:-translate-y-2 hover:text-blue-500 transition-transform duration-300 flex-col items-center text-foreground hover:text-primary transition-all duration-300"
              >
                <span className="transform hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="text-[10px] mt-1">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;