import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { FloatingMenu } from '@/components/sections/FloatingMenu';
import { Footer } from '@/components/sections/Footer';
import { projects as mockProjects } from '@/lib/data';
import { Experience as ExperienceType, Project as ProjectType } from '@/types';
import fs from 'fs';
import path from 'path';

// This is a Server Component (SSR by default)
async function getPortfolioData() {
  const dynamicDataPath = path.join(process.cwd(), 'src/data/resume-data.json');
  let experiences: ExperienceType[] = [];
  const projects: ProjectType[] = mockProjects;
  let summary = '';
  let skills: string[] = [];

  if (fs.existsSync(dynamicDataPath)) {
    try {
      const fileData = fs.readFileSync(dynamicDataPath, 'utf-8');
      const parsed = JSON.parse(fileData);
      if (parsed.experiences) experiences = parsed.experiences;
      if (parsed.summary) summary = parsed.summary;
      if (parsed.skills) skills = parsed.skills;
    } catch (error) {
      console.error('Error reading dynamic resume data:', error);
    }
  }

  // Fallback if no dynamic data found
  if (experiences.length === 0) {
    const { experiences: mockExperiences } = await import('@/lib/data');
    experiences = mockExperiences;
  }

  return { experiences, projects, summary, skills };
}

export default async function Home() {
  const { experiences, projects, summary, skills } = await getPortfolioData();

  return (
    <main className="bg-darcula-bg flex min-h-screen flex-col">
      <FloatingMenu />
      <Hero />
      <About summary={summary} />
      <Experience experiences={experiences} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Footer />
    </main>
  );
}
