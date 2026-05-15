import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'Talent Matcher',
    description:
      'AI tool that helps candidates to optimize their resume against given job description.',
    tags: [
      'React',
      'Node.js',
      'Next.js',
      'Gemini API',
      'AI-Driven',
      'TypeScript',
    ],
    imageUrl: '/assets/projects/talent-matcher-1.png',
    details:
      'Developed using React, Node and Next.js, this AI assistant evaluates user uploaded Resume against given job descriptions to find the perfect match. It is ethical, as it does not encourage the candidate to add fake skills to their resume, instead, it suggests them how to better present their real skills.',
    screenshots: [
      '/assets/projects/talent-matcher-1.png',
      '/assets/projects/talent-matcher-2.png',
    ],
    liveUrl: 'https://talent-matcher-ten.vercel.app',
  },
  {
    id: 'proj2',
    title: 'Task Manager',
    description: 'A Trello-like kanban view tasks organizer.',
    tags: ['Angular', 'Node.js', 'Express', 'TypeScript'],
    imageUrl: '/assets/projects/task-manager-2.png',
    details:
      'Developed with Node.js/Express and Angular, this task organizer provides a Kanban board view to help teams manage their tasks efficiently.',
    screenshots: [
      '/assets/projects/task-manager-1.png',
      '/assets/projects/task-manager-2.png',
    ],
    liveUrl: 'https://task-manager-snowy-chi.vercel.app',
  },
  {
    id: 'proj3',
    title: 'Digital Mundo Miraira',
    description:
      'A digital platform for the Miraira Traditional Cultural Practices Laboratory at IFCE.',
    tags: ['Wordpress', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    imageUrl: '/assets/projects/digital-miraira-1.png',
    details:
      "Developed an interactive and accessible platform for the Miraira Traditional Cultural Practices Laboratory at IFCE. The platform serves as a digital database for the preservation and diffusion of Ceará's intangible cultural heritage from the Northeast region of Brazil, with a focus on Ceará. It contains several types of digital educational materials such as photos, videos, texts, oral histories, etc.",
    screenshots: ['/assets/projects/digital-miraira-1.png'],
    liveUrl: 'https://www.digitalmundomiraira.com.br/',
  },
];
