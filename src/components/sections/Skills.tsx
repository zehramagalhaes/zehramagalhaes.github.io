'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Terminal,
  Languages,
  ChevronRight,
} from 'lucide-react';

interface SkillsProps {
  skills?: string[];
}

export const Skills = ({ skills: _skills }: SkillsProps) => {
  // Manual categorization based on resume data
  const categories = [
    {
      title: 'Frontend',
      icon: <Code2 size={24} />,
      items: [
        'React.js',
        'Next.js',
        'Vue.js',
        'TypeScript',
        'JavaScript',
        'SASS',
        'Bootstrap',
      ],
      color: 'text-darcula-purple',
      bg: 'bg-darcula-purple/10',
    },
    {
      title: 'Backend & APIs',
      icon: <Database size={24} />,
      items: ['Node.js', 'PHP', 'Redux', 'RESTful APIs'],
      color: 'text-darcula-green',
      bg: 'bg-darcula-green/10',
    },
    {
      title: 'DevOps & Testing',
      icon: <Terminal size={24} />,
      items: ['Git', 'npm', 'Jest', 'Enzyme', 'Agile', 'WordPress'],
      color: 'text-darcula-orange',
      bg: 'bg-darcula-orange/10',
    },
    {
      title: 'Languages',
      icon: <Languages size={24} />,
      items: ['Português (Native)', 'Inglês (Full Professional)'],
      color: 'text-darcula-yellow',
      bg: 'bg-darcula-yellow/10',
    },
  ];

  return (
    <section id="skills" className="bg-darcula-bg/50 relative py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-darcula-green mb-4 font-mono text-xl font-bold uppercase">
            {`// Technical Arsenal`}
          </h2>
          <h3 className="text-4xl font-bold text-white md:text-5xl">
            Specialized in{' '}
            <span className="text-darcula-orange">Modern Web</span> Solutions
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
              whileHover={{ y: -8 }}
            >
              {/* Animated background glow */}
              <motion.div
                className={`absolute -inset-0.5 rounded-2xl opacity-0 blur transition-opacity duration-300 group-hover:opacity-100 ${cat.bg}`}
                animate={{
                  opacity: [0, 0.1, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:-translate-y-2 hover:border-white/20">
                <motion.div
                  className={`h-14 w-14 rounded-xl ${cat.bg} ${cat.color} mb-6 flex items-center justify-center transition-transform group-hover:scale-110`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {cat.icon}
                </motion.div>

                <h4 className="mb-6 flex items-center gap-2 text-xl font-bold text-white">
                  {cat.title}
                </h4>

                <ul className="space-y-4">
                  {cat.items.map((skill, skillIdx) => (
                    <motion.li
                      key={skill}
                      className="text-darcula-text/80 group/item flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + skillIdx * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        className={`${cat.color} opacity-0 transition-opacity group-hover/item:opacity-100`}
                        animate={{ rotate: [0, 180, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          type: 'tween',
                          ease: 'easeInOut',
                        }}
                      >
                        <ChevronRight size={14} />
                      </motion.span>
                      <span className="transition-colors group-hover/item:text-white">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
