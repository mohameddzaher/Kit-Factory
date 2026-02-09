import type { Metadata } from 'next';
import CoveragePage from './CoveragePage';

export const metadata: Metadata = {
  title: 'Coverage',
  description:
    'Kit Factory serves 33+ cities across Saudi Arabia with offices in Jeddah and Dubai. Western, Eastern, Southern, and Central region coverage.',
  openGraph: {
    title: 'Coverage — Kit Factory',
    description: 'Serving 33+ cities across Saudi Arabia with offices in Jeddah and Dubai.',
  },
};

export default function Page() {
  return <CoveragePage />;
}
