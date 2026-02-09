import type { Metadata } from 'next';
import TeamPage from './TeamPage';

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Meet the talented team behind Kit Factory. From creative directors to production managers, our people drive our success.',
  openGraph: {
    title: 'Our Team — Kit Factory',
    description: 'Meet the talented team behind Kit Factory.',
  },
};

export default function Page() {
  return <TeamPage />;
}
