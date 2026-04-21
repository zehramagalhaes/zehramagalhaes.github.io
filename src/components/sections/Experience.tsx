'use client';

import { motion } from 'framer-motion';
import { Experience as ExperienceType } from '@/types';
import { SectionHeading } from '../ui/SectionHeading';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <section id="experience" className="bg-darcula-bg-darker px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Experience"
          subtitle="Work History & Accomplishments"
          color="darcula-purple"
        />

        <div className="relative">
          {/* Animated line */}
          <motion.div
            className="from-darcula-purple via-darcula-orange absolute top-0 -left-[2px] w-1 bg-gradient-to-b to-transparent md:left-[-1px]"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />

          <div className="border-darcula-text/20 ml-4 space-y-16 border-l pl-8 md:ml-8 md:pl-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
                whileHover={{ x: 5 }}
              >
                {/* Dot with pulse animation */}
                <motion.div
                  className="bg-darcula-bg border-darcula-purple absolute top-0 -left-[45px] z-10 flex h-8 w-8 items-center justify-center rounded-full border-4 md:-left-[61px]"
                  whileHover={{ scale: 1.3 }}
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(128, 90, 213, 0.7)',
                      '0 0 0 8px rgba(128, 90, 213, 0)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Briefcase size={14} className="text-darcula-purple" />
                </motion.div>

                {/* Card background animation */}
                <motion.div
                  className="from-darcula-purple/10 to-darcula-orange/10 absolute -inset-2 rounded-lg bg-gradient-to-r opacity-0 blur transition-opacity group-hover:opacity-50"
                  animate={{ opacity: [0, 0.1, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    type: 'tween',
                    ease: 'easeInOut',
                  }}
                />

                <motion.div className="relative">
                  <motion.span
                    className="text-darcula-orange mb-2 block font-mono text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                  >
                    {exp.period}
                  </motion.span>

                  <motion.h3
                    className="mb-1 text-2xl font-bold text-white"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.15 }}
                  >
                    {exp.role}
                  </motion.h3>

                  <motion.h4
                    className="text-darcula-yellow mb-4 text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {exp.company}
                  </motion.h4>

                  <motion.p
                    className="text-darcula-text mb-6 italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.25 }}
                  >
                    {exp.description}
                  </motion.p>

                  <ul className="space-y-3">
                    {exp.accomplishments.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.08 }}
                        className="text-darcula-text/90 group/item flex gap-3 transition-colors hover:text-white"
                        whileHover={{ x: 8 }}
                      >
                        <motion.span
                          className="text-darcula-green mt-0.5 flex-shrink-0 font-bold"
                          animate={{ x: [0, 3, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.1,
                            type: 'tween',
                            ease: 'easeInOut',
                          }}
                        >
                          ➜
                        </motion.span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* LinkedIn Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://www.linkedin.com/in/zehramagalhaes/details/experience/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-darcula-purple/20 border-darcula-purple hover:bg-darcula-purple/30 hover:border-darcula-purple/80 text-darcula-purple flex items-center gap-3 rounded-lg border px-8 py-4 font-semibold transition-all hover:text-white"
          >
            View Full Experience on LinkedIn
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
