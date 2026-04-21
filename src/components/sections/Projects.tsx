'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Project as ProjectType } from '@/types';
import { SectionHeading } from '../ui/SectionHeading';
import { ExternalLink, X } from 'lucide-react';

interface ProjectsProps {
  projects: ProjectType[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  return (
    <section id="projects" className="bg-darcula-bg min-h-screen px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="Built with Passion & Logic"
          color="darcula-yellow"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="bg-darcula-bg-darker border-darcula-text/10 group relative cursor-pointer overflow-hidden rounded-xl border"
              onClick={() => setSelectedProject(project)}
            >
              {/* Animated background glow */}
              <motion.div
                className="from-darcula-orange/30 to-darcula-purple/30 absolute -inset-0.5 rounded-xl bg-gradient-to-r opacity-0 blur transition-opacity group-hover:opacity-100"
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  type: 'tween',
                  ease: 'easeInOut',
                }}
              />

              <div className="relative z-10">
                <motion.div
                  className="relative aspect-video overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={
                      project.imageUrl ||
                      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000'
                    }
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.p
                      className="bg-darcula-orange rounded-full px-4 py-2 font-medium text-white"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      View Details
                    </motion.p>
                  </motion.div>
                </motion.div>

                <div className="p-6">
                  <motion.h3
                    className="group-hover:text-darcula-yellow mb-2 text-xl font-bold text-white transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-darcula-text/70 mb-4 line-clamp-2 text-sm">
                    {project.description}
                  </p>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {project.tags.map((tag, tagIdx) => (
                      <motion.span
                        key={tag}
                        className="bg-darcula-blue/10 text-darcula-blue border-darcula-blue/20 rounded border px-2 py-1 text-[10px] font-bold tracking-wider uppercase"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + 0.25 + tagIdx * 0.05,
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: 'rgba(100, 150, 255, 0.2)',
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal & Carousel */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-darcula-bg-darker border-darcula-text/20 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border-darcula-text/10 bg-darcula-bg flex items-center justify-between border-b p-4">
                <h2 className="text-darcula-yellow text-2xl font-bold">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="hover:bg-darcula-text/10 rounded-full p-2 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 space-y-8 overflow-y-auto p-6">
                {/* Native Carousel with CSS Scroll Snap */}
                <div className="group relative">
                  <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto rounded-xl pb-4">
                    {selectedProject.screenshots.map((src, i) => (
                      <div
                        key={i}
                        className="relative aspect-video min-w-full snap-center"
                      >
                        <Image
                          src={src}
                          alt={`Screenshot ${i + 1}`}
                          fill
                          className="border-darcula-text/10 rounded-lg border object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {selectedProject.screenshots.length > 1 && (
                    <div className="mt-2 flex justify-center gap-2">
                      {selectedProject.screenshots.map((_, i) => (
                        <div
                          key={i}
                          className="bg-darcula-text/20 h-2 w-2 rounded-full"
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="text-darcula-orange text-lg font-bold">
                    About Project
                  </h3>
                  <p className="text-darcula-text leading-relaxed">
                    {selectedProject.details}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-4">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-darcula-text/5 border-darcula-text/10 text-darcula-text rounded-md border px-3 py-1 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-darcula-bg border-darcula-text/10 flex justify-end border-t p-6">
                <button
                  className="bg-darcula-orange hover:bg-darcula-orange/90 flex items-center gap-2 rounded-lg px-6 py-2 text-white transition-colors"
                  onClick={() =>
                    window.alert('Link to live demo would go here')
                  }
                >
                  Live Demo <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
