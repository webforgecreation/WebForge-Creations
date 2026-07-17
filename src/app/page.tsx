import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ServicesSection from '@/app/components/ServicesSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import AboutSection from '@/app/components/AboutSection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    <main className="bg-secondary overflow-x-hidden">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}