'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../ui/Icons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-darcula-bg-darker border-darcula-text/10 relative overflow-hidden border-t px-4 py-12">
      {/* Animated background elements */}
      <motion.div
        className="bg-darcula-purple/10 pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full blur-[120px]"
        animate={{
          y: [0, 50, 0],
          x: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="bg-darcula-orange/10 pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full blur-[120px]"
        animate={{
          y: [0, -50, 0],
          x: [0, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={itemVariants}
          className="text-center md:text-left"
        >
          <motion.h2
            className="mb-2 text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            ZehraMagalhaes<span className="text-darcula-orange">.</span>dev
          </motion.h2>
          <p className="text-darcula-text/60">
            Building the web of tomorrow, with logic and style.
          </p>
        </motion.div>

        <motion.div className="flex gap-6" variants={containerVariants}>
          {[
            {
              icon: <GithubIcon size={20} />,
              href: 'https://github.com/zehramagalhaes',
              label: 'GitHub',
            },
            {
              icon: <LinkedinIcon size={20} />,
              href: 'https://linkedin.com/in/zehramagalhaes',
              label: 'LinkedIn',
            },
            {
              icon: <Mail size={20} />,
              href: 'mailto:contact@zehramagalhaes.dev',
              label: 'Email',
            },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              className="bg-darcula-bg border-darcula-text/10 text-darcula-text hover:text-darcula-orange hover:border-darcula-orange group relative rounded-full border p-3 transition-all"
              whileHover={{ y: -8, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Animated background glow on hover */}
              <motion.div
                className="bg-darcula-orange/20 absolute inset-0 -z-10 rounded-full opacity-0 blur transition-opacity group-hover:opacity-100"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  type: 'tween',
                  ease: 'easeInOut',
                }}
              />
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-darcula-text/40 text-center font-mono text-sm md:text-right"
        >
          <p>&copy; {currentYear} Zehra Magalhães.</p>
          <p>All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};
