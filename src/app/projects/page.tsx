import type { Metadata } from 'next';
import ProjectsPage from './ProjectsPage';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore our portfolio of advertising, signage, exhibition, and branding projects delivered across the GCC.',
  openGraph: {
    title: 'Projects — Kit Factory',
    description: 'Portfolio of advertising, signage, exhibition, and branding projects across the GCC.',
  },
};

export default function Page() {
  return <ProjectsPage />;
}
