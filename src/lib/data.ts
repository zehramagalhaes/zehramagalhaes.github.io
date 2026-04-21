import { Experience, Project } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'exp1',
    idx: 1,
    company: 'Tech Innovators Inc.',
    role: 'Senior Full Stack Engineer',
    period: '2022 - Present',
    description:
      'Leading the development of high-performance web applications using Next.js and React.',
    accomplishments: [
      'Architected a micro-frontend solution that reduced build times by 40%.',
      'Implemented SSR strategies improving SEO rankings across 5 major product lines.',
      'Mentored a team of 10+ developers in modern React patterns and TypeScript best practices.',
    ],
  },
  {
    id: 'exp2',
    idx: 2,
    company: 'Creative Solutions Studio',
    role: 'Frontend Specialist',
    period: '2020 - 2022',
    description:
      'Focused on creating gorgeous, pixel-perfect user interfaces with smooth animations.',
    accomplishments: [
      'Developed a custom component library used across 20+ client projects.',
      'Reduced initial page load times by 50% using advanced image optimization and code-splitting.',
      'Delivered 15+ high-stakes projects on time with 99.9% uptime.',
    ],
  },
  {
    id: 'exp3',
    idx: 3,
    company: 'StartUp Hub',
    role: 'Junior Web Developer',
    period: '2018 - 2020',
    description:
      'Built and maintained various client websites and internal tools.',
    accomplishments: [
      'Contributed to the launch of a successful MVP that secured $2M in Series A funding.',
      'Automated internal workflows using Node.js, saving the team 10 hours per week.',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'E-Commerce Platform',
    description:
      'A full-featured online store with real-time inventory and seamless checkout.',
    tags: ['Next.js', 'Tailwind CSS', 'Stripe', 'TypeScript'],
    imageUrl:
      'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    details:
      'This project involved building a complex e-commerce engine from scratch, focusing on performance and accessibility.',
    screenshots: [
      'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: 'proj2',
    title: 'AI Portfolio Builder',
    description:
      'An AI-powered tool that generates stunning portfolios in minutes.',
    tags: ['React', 'Framer Motion', 'OpenAI', 'Tailwind'],
    imageUrl:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    details:
      'Leveraging GPT-4 to analyze resumes and generate personalized design systems.',
    screenshots: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: 'proj3',
    title: 'Task Management App',
    description: 'A collaborative, real-time board for agile teams.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Socket.io'],
    imageUrl:
      'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800',
    details:
      'Focused on real-time synchronization and intuitive drag-and-drop interfaces.',
    screenshots: [
      'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
    ],
  },
];
