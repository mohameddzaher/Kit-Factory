'use client';

import HeroSection from '@/components/home/HeroSection';
import StatsBar from '@/components/home/StatsBar';
import ServicesPreview from '@/components/home/ServicesPreview';
import PortfolioGallery from '@/components/home/PortfolioGallery';
import CreativeProcess from '@/components/home/CreativeProcess';
import CapabilitiesHoneycomb from '@/components/home/CapabilitiesHoneycomb';
import CoveragePreview from '@/components/home/CoveragePreview';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import ClientsPreview from '@/components/home/ClientsPreview';
import CallToAction from '@/components/home/CallToAction';
import ManagementMessage from '@/components/shared/ManagementMessage';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsBar />
      <ServicesPreview />
      <PortfolioGallery />
      <CreativeProcess />
      <CapabilitiesHoneycomb />
      <CoveragePreview />
      <FeaturedProjects />
      <ManagementMessage variant="light" />
      <ClientsPreview />
      <CallToAction />
    </main>
  );
}
