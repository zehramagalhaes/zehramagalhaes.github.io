'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

interface AboutProps {
  summary?: string;
}

export const About = ({ summary: _summary }: AboutProps) => {
  return (
    <section
      id="about"
      className="bg-darcula-bg relative overflow-hidden py-24"
    >
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3"
          >
            <div className="group relative mx-auto aspect-[4/5] max-w-md">
              <motion.div
                className="from-darcula-purple to-darcula-orange absolute inset-0 rotate-3 rounded-2xl bg-gradient-to-tr opacity-20 transition-transform duration-500 group-hover:rotate-6"
                animate={{
                  rotate: [3, 5, 3],
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="bg-darcula-purple/10 absolute inset-0 -rotate-2 rounded-2xl transition-transform duration-500 group-hover:-rotate-4"
                animate={{
                  rotate: [-2, -4, -2],
                  scale: [1, 0.98, 1],
                }}
                transition={{ duration: 4.5, repeat: Infinity }}
              />
              <motion.div
                className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 0 30px rgba(128, 90, 213, 0.3)',
                }}
              >
                <Image
                  src="/about-me.png"
                  alt="Zehra Magalhães"
                  unoptimized
                  fill
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-darcula-orange mb-4 font-mono text-xl font-bold tracking-wider uppercase"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {`// About Me`}
              </motion.h2>
              <motion.h3
                className="mb-8 text-4xl leading-tight font-bold text-white md:text-5xl"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Building{' '}
                <motion.span
                  className="text-darcula-purple"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    type: 'tween',
                    ease: 'easeInOut',
                  }}
                >
                  High-Performance Systems
                </motion.span>{' '}
                at Scale
              </motion.h3>

              <div className="text-darcula-text/90 max-w-2xl space-y-6 text-lg leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  I solve real engineering problems. Over 5+ years, I&apos;ve
                  specialized in building frontend architectures that scale—but
                  more importantly, I&apos;ve learned what actually matters:{' '}
                  <strong>
                    measurable impact, sustainable systems, and enablement of
                    teams.
                  </strong>{' '}
                  <span>
                    I&apos;m not here to showcase technical brilliance; I&apos;m
                    here to deliver tangible results.
                  </span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Here&apos;s what sets me apart: I treat{' '}
                  <strong>testing and code quality as non-negotiable</strong>
                  —not because they&apos;re best practices, but because they
                  directly reduce risk and accelerate shipping. I&apos;ve
                  architected component systems and Design Systems that cut
                  shipping time by 40%. I&apos;ve built testing cultures that
                  reached 85% coverage—enabling teams to deploy with confidence.
                  I&apos;ve compressed 2-month onboarding cycles into 3 weeks
                  through mentorship and documentation. These aren&apos;t soft
                  skills—they&apos;re business multipliers.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  My sweet spot is{' '}
                  <strong>
                    designing systems that let teams move fast and stay safe:
                  </strong>{' '}
                  scalable frontend architectures with React and Next.js, robust
                  API integrations, and maintainable codebases. But I think in
                  full-stack terms—I understand that frontend excellence only
                  matters if the backend can support it. I ask hard questions,
                  challenge assumptions, and focus on solutions that compound
                  value over time.
                </motion.p>
              </div>

              <motion.div
                className="mt-12 flex flex-wrap items-center gap-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <motion.a
                    href="https://linkedin.com/in/zehramagalhaes"
                    target="_blank"
                    className="text-darcula-text hover:text-darcula-purple hover:border-darcula-purple rounded-full border border-white/10 bg-white/5 p-3 transition-all"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 0 20px rgba(128, 90, 213, 0.4)',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <LinkedinIcon size={24} />
                  </motion.a>
                  <motion.a
                    href="mailto:contact@zehramagalhaes.dev"
                    className="text-darcula-text hover:text-darcula-orange hover:border-darcula-orange rounded-full border border-white/10 bg-white/5 p-3 transition-all"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 0 20px rgba(255, 160, 122, 0.4)',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={24} />
                  </motion.a>
                  <motion.a
                    href="https://github.com/zehramagalhaes"
                    target="_blank"
                    className="text-darcula-text rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:border-white/50 hover:text-white"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GithubIcon size={24} />
                  </motion.a>
                </motion.div>

                <motion.a
                  href="mailto:contact@zehramagalhaes.dev"
                  className="group bg-darcula-purple hover:bg-darcula-purple/80 shadow-darcula-purple/20 flex transform items-center gap-3 rounded-xl px-8 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-1"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(128, 90, 213, 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Let&apos;s Talk Business
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      type: 'tween',
                      ease: 'easeInOut',
                    }}
                  >
                    <ArrowRight
                      size={20}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </motion.div>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
