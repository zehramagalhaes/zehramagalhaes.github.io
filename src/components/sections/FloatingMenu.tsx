'use client';

import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Code, Cpu } from 'lucide-react';

// ─── Constants ────────────────────────────────────────────────────────────────

const SCROLL_THRESHOLD = 300;
const ACTIVE_SECTION_OFFSET = 200;
const SCROLL_TO_OFFSET = 80;

// ─── Types ────────────────────────────────────────────────────────────────────

interface MenuItem {
  id: string;
  icon: React.ReactNode;
  label: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function isFooterVisible(footer: Element | null): boolean {
  if (!footer) return false;
  return footer.getBoundingClientRect().top < window.innerHeight;
}

function getActiveSectionId(menuItems: MenuItem[]): string | undefined {
  return menuItems
    .map((item) => document.getElementById(item.id))
    .find((section) => {
      if (!section) return false;
      const { top, bottom } = section.getBoundingClientRect();
      return top <= ACTIVE_SECTION_OFFSET && bottom >= ACTIVE_SECTION_OFFSET;
    })?.id;
}

function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (!element) return;

  const top =
    element.getBoundingClientRect().top + window.scrollY - SCROLL_TO_OFFSET;

  window.scrollTo({ top, behavior: 'smooth' });
}

// ─── Animation Variants ───────────────────────────────────────────────────────

// Menu slides up from the bottom when it appears, slides back down on exit
const menuVariants = {
  hidden: { y: 100, opacity: 0, x: '-50%' },
  visible: { y: 0, opacity: 1, x: '-50%' },
};

// Each button fades + scales in with a staggered delay
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay, type: 'spring' as const, stiffness: 200 },
  }),
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const Tooltip = ({ label }: { label: string }) => (
  <motion.span
    className="bg-darcula-bg pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 rounded-md border border-white/10 px-3 py-1 text-xs whitespace-nowrap text-white"
    initial={{ y: 4, opacity: 0 }}
    whileHover={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.15 }}
  >
    {label}
  </motion.span>
);

// Sliding highlight that moves between active buttons via layoutId
const ActivePill = () => (
  <motion.div
    layoutId="active-pill"
    className="bg-darcula-purple/10 absolute inset-0 -z-10 rounded-full"
    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
  />
);

// ─── Main Component ───────────────────────────────────────────────────────────

export const FloatingMenu = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  const footerRef = useRef<Element | null>(null);

  const menuItems = useMemo<MenuItem[]>(
    () => [
      { id: 'hero', icon: <Home size={20} />, label: 'Home' },
      { id: 'about', icon: <User size={20} />, label: 'About' },
      { id: 'experience', icon: <Briefcase size={20} />, label: 'Experience' },
      { id: 'skills', icon: <Cpu size={20} />, label: 'Skills' },
      { id: 'projects', icon: <Code size={20} />, label: 'Projects' },
    ],
    []
  );

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const shouldShow =
        window.scrollY > SCROLL_THRESHOLD &&
        !isFooterVisible(footerRef.current);
      setIsVisible(shouldShow);

      const activeSectionId = getActiveSectionId(menuItems);
      if (activeSectionId) setActiveSection(activeSectionId);
    });
  }, [menuItems]);

  useEffect(() => {
    footerRef.current = document.querySelector('footer');
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-10 left-1/2 z-50"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ type: 'spring', stiffness: 260, damping: 25 }}
        >
          <nav className="bg-darcula-bg/80 flex items-center gap-2 rounded-full border border-white/10 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            {menuItems.map((item, idx) => {
              const isActive = activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative rounded-full p-4 transition-colors ${
                    isActive
                      ? 'text-darcula-purple'
                      : 'text-darcula-text/60 hover:text-white'
                  }`}
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  custom={idx * 0.05}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                  <Tooltip label={item.label} />
                  {isActive && <ActivePill />}
                </motion.button>
              );
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
