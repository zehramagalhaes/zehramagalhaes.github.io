'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Code, Cpu } from 'lucide-react';

export const FloatingMenu = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  const menuItems = [
    { id: 'hero', icon: <Home size={20} />, label: 'Home' },
    { id: 'about', icon: <User size={20} />, label: 'About' },
    { id: 'experience', icon: <Briefcase size={20} />, label: 'Experience' },
    { id: 'skills', icon: <Cpu size={20} />, label: 'Skills' },
    { id: 'projects', icon: <Code size={20} />, label: 'Projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show menu after scrolling down 300px
      setIsVisible(window.scrollY > 300);

      // Determine active section
      const sections = menuItems.map((item) =>
        document.getElementById(item.id)
      );
      const currentSection = sections.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom >= 200;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0, x: '-50%' }}
          animate={{ y: 0, opacity: 1, x: '-50%' }}
          exit={{ y: 100, opacity: 0, x: '-50%' }}
          className="fixed bottom-10 left-1/2 z-50 transition-all"
        >
          <motion.nav
            className="bg-darcula-bg/80 flex items-center gap-2 rounded-full border border-white/10 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            animate={{
              boxShadow: [
                '0 20px 50px rgba(0,0,0,0.5)',
                '0 25px 60px rgba(128, 90, 213, 0.3)',
                '0 20px 50px rgba(0,0,0,0.5)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              type: 'tween',
              ease: 'easeInOut',
            }}
          >
            {menuItems.map((item, idx) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`group relative rounded-full p-4 transition-all ${activeSection === item.id ? 'text-darcula-purple bg-white/5' : 'text-darcula-text/60 hover:text-white'} `}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: idx * 0.1,
                  type: 'spring',
                  stiffness: 200,
                }}
              >
                <motion.div
                  animate={{ rotate: activeSection === item.id ? 360 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>

                {/* Tooltip */}
                <motion.span
                  className="bg-darcula-bg pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 rounded-md border border-white/10 px-3 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100"
                  initial={{ y: 5, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  {item.label}
                </motion.span>

                {/* Active Indicator */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="bg-darcula-purple/10 absolute inset-0 -z-10 rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      type: 'tween',
                      ease: 'easeInOut',
                      duration: 1.5,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
