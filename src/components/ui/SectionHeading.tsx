'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  color?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  color = 'darcula-orange',
}: SectionHeadingProps) => {
  const colorMap: { [key: string]: string } = {
    'darcula-orange': '#FFA07A',
    'darcula-purple': '#805A5D',
    'darcula-yellow': '#F0DB4F',
    'darcula-green': '#52E080',
  };

  const colorValue = colorMap[color] || colorMap['darcula-orange'];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mb-12"
    >
      {/* Animated background accent */}
      <motion.div
        className={`absolute top-0 -left-4 h-full w-1 rounded-full opacity-0`}
        style={{ backgroundColor: colorValue }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.h2
        className={`mb-2 text-4xl font-bold md:text-5xl text-${color}`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="text-darcula-text/60 font-mono text-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {`//`} {subtitle}
        </motion.p>
      )}

      <motion.div
        className={`mt-4 h-1 w-20 bg-${color} rounded-full`}
        initial={{ width: 0, opacity: 1 }}
        whileInView={{ width: 80, opacity: [1, 0.7, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      />
    </motion.div>
  );
};
