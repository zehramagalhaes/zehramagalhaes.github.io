'use client';

import { motion } from 'framer-motion';

// Character animation for text
const CharacterAnimation = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  return (
    <motion.div className="inline-block">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + index * 0.05 }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-darcula-bg text-darcula-text relative flex h-screen flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-30">
        {/* Animated gradient orbs */}
        <motion.div
          className="bg-darcula-orange absolute top-1/4 left-1/4 h-64 w-64 rounded-full blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="bg-darcula-purple absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full blur-[120px]"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Additional floating elements */}
        <motion.div
          className="bg-darcula-blue absolute top-1/3 right-1/3 h-40 w-40 rounded-full opacity-40 blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(128, 90, 213, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(128, 90, 213, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="z-10 max-w-4xl text-center"
      >
        <motion.h1
          className="mb-4 text-6xl font-bold tracking-tight md:text-8xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-darcula-orange inline-block italic"
            whileHover={{
              scale: 1.05,
              textShadow: '0 0 20px rgba(255, 160, 122, 0.8)',
            }}
          >
            <CharacterAnimation text="Zehra" delay={0.2} />
          </motion.span>{' '}
          <motion.span
            className="inline-block text-white"
            whileHover={{ scale: 1.05 }}
          >
            <CharacterAnimation text="Magalhães" delay={0.4} />
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-darcula-text/80 relative mb-8 font-mono text-xl md:text-2xl"
        >
          {/* Animated code block background */}
          <motion.div
            className="from-darcula-purple/20 to-darcula-orange/20 absolute -inset-4 rounded-lg bg-gradient-to-r opacity-0 blur-lg transition-opacity group-hover:opacity-100"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              type: 'tween',
              ease: 'easeInOut',
            }}
          />
          <p className="relative">
            <span className="text-darcula-purple">const</span>{' '}
            <span className="text-darcula-yellow">role</span>{' '}
            <span className="text-darcula-green">=</span>{' '}
            <motion.span
              className="text-darcula-green"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              &quot;Software Engineer&quot;
            </motion.span>
            <span className="text-darcula-green">;</span>
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              type: 'tween',
              ease: 'easeInOut',
            }}
            className="from-darcula-orange h-12 w-1 rounded-full bg-gradient-to-b to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Floating code snippets (optional accent) */}
      <motion.div
        className="text-darcula-text/20 absolute bottom-20 left-10 hidden font-mono text-xs lg:block"
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          type: 'tween',
          ease: 'easeInOut',
        }}
      >
        &lt;Component /&gt;
      </motion.div>
      <motion.div
        className="text-darcula-text/20 absolute top-32 right-20 hidden font-mono text-xs lg:block"
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          type: 'tween',
          ease: 'easeInOut',
        }}
      >
        {'{} scalable'}
      </motion.div>
    </section>
  );
};
