import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import ServiceDetail from './ServiceDetail';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} — Kit Factory`,
      description: service.description,
      images: [{ url: service.image, width: 1200, height: 630 }],
    },
  };
}

export default function Page({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
