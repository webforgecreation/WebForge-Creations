'use client';

import React, { useEffect, useRef } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  colSpan: string;
  rowSpan?: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Payment Gateway Providers',
    description: 'Secure, fast, and reliable payment processing solutions with multi-currency support and real-time transaction monitoring for global businesses.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    accent: '#2563EB',
    colSpan: 'md:col-span-4',
    rowSpan: 'md:row-span-2',
    featured: true,
  },
  {
    id: 2,
    title: 'Fintech Web Development',
    description: 'Custom fintech platforms built with cutting-edge technology stacks, ensuring compliance, security, and exceptional user experience.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    accent: '#06B6D4',
    colSpan: 'md:col-span-4',
  },
  {
    id: 3,
    title: 'Payout Services',
    description: 'Automated bulk payout systems for seamless disbursements to vendors, employees, and partners across banking networks.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    accent: '#818CF8',
    colSpan: 'md:col-span-4',
  },
  {
    id: 4,
    title: 'BBPS Integration',
    description: 'Bharat Bill Payment System integration for utility payments, recharges, and bill collection across all major billers in India.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    accent: '#10B981',
    colSpan: 'md:col-span-4',
  },
  {
    id: 5,
    title: 'Money Transfer DMT',
    description: 'Domestic Money Transfer solutions enabling real-time fund transfers to any bank account across India with high success rates.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    accent: '#F59E0B',
    colSpan: 'md:col-span-4',
  },
  {
    id: 6,
    title: 'POS Machines',
    description: 'Advanced Point-of-Sale hardware and software solutions for retail, restaurants, and service businesses with cloud-based management.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    accent: '#EC4899',
    colSpan: 'md:col-span-6',
  },
  {
    id: 7,
    title: 'Website & App Design',
    description: 'Full-spectrum UI/UX design and development for web and mobile applications — from concept to deployment with pixel-perfect precision.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    accent: '#06B6D4',
    colSpan: 'md:col-span-6',
  },
  {
    id: 8,
    title: 'Insurance SDK & API',
    description: 'Plug-and-play insurance integration SDKs and APIs for embedding insurance products directly into your digital platforms.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    accent: '#818CF8',
    colSpan: 'md:col-span-4',
  },
  {
    id: 9,
    title: 'Custom Software Development',
    description: 'Bespoke enterprise software built to your exact specifications — scalable architectures, clean code, and agile delivery.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    accent: '#2563EB',
    colSpan: 'md:col-span-4',
  },
  {
    id: 10,
    title: 'Cloud Infrastructure Management',
    description: 'End-to-end cloud setup, migration, and managed services on AWS, Azure, and GCP — optimized for performance, cost, and security.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    accent: '#10B981',
    colSpan: 'md:col-span-4',
  },
  {
    id: 11,
    title: 'AI-Driven Data Analytics Solutions',
    description: 'Transform raw data into strategic insights with our AI-powered analytics platform — predictive modeling, real-time dashboards, and automated reporting for data-driven decision making at scale.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6.75v6.75" />
      </svg>
    ),
    accent: '#F59E0B',
    colSpan: 'md:col-span-12',
    featured: true,
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const reveals = sectionRef.current?.querySelectorAll('.scroll-reveal');
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg-dark pointer-events-none opacity-60" />
      <div className="absolute top-0 right-0 w-96 h-96 blob-primary opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 blob-accent opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 scroll-reveal stagger-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-accent text-xs font-bold uppercase tracking-widest mb-5">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Everything you need to{' '}
            <span className="gradient-text-blue">scale your fintech</span>
          </h2>
          <p className="text-lg text-white/50 font-medium leading-relaxed">
            From payment infrastructure to AI analytics — 11 specialized services
            designed to power your digital business from day one.
          </p>
        </div>

        {/* Bento Grid */}
        {/* 
          BENTO GRID AUDIT:
          Array has 11 cards: [PaymentGateway(cs-4 rs-2), FintechWeb(cs-4), PayoutServices(cs-4), BBPS(cs-4), MoneyTransfer(cs-4), POSMachines(cs-6), WebAppDesign(cs-6), InsuranceSDK(cs-4), CustomSoftware(cs-4), CloudInfra(cs-4), AIAnalytics(cs-12)]
          
          Row 1: [col1-4: PaymentGateway cs-4 rs-2] [col5-8: FintechWeb cs-4] [col9-12: PayoutServices cs-4]
          Row 2: [col1-4: PaymentGateway cont.] [col5-8: BBPS cs-4] [col9-12: MoneyTransfer cs-4]
          Row 3: [col1-6: POSMachines cs-6] [col7-12: WebAppDesign cs-6]
          Row 4: [col1-4: InsuranceSDK cs-4] [col5-8: CustomSoftware cs-4] [col9-12: CloudInfra cs-4]
          Row 5: [col1-12: AIAnalytics cs-12]
          Placed 11/11 cards ✓
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Card 1: Payment Gateway — cs-4 rs-2 */}
          <div className={`md:col-span-4 md:row-span-2 scroll-reveal stagger-1`}>
            <ServiceCard service={services[0]} tall />
          </div>

          {/* Card 2: Fintech Web */}
          <div className="md:col-span-4 scroll-reveal stagger-2">
            <ServiceCard service={services[1]} />
          </div>

          {/* Card 3: Payout Services */}
          <div className="md:col-span-4 scroll-reveal stagger-3">
            <ServiceCard service={services[2]} />
          </div>

          {/* Card 4: BBPS */}
          <div className="md:col-span-4 scroll-reveal stagger-4">
            <ServiceCard service={services[3]} />
          </div>

          {/* Card 5: Money Transfer */}
          <div className="md:col-span-4 scroll-reveal stagger-5">
            <ServiceCard service={services[4]} />
          </div>

          {/* Card 6: POS Machines */}
          <div className="md:col-span-6 scroll-reveal stagger-6">
            <ServiceCard service={services[5]} />
          </div>

          {/* Card 7: Web & App Design */}
          <div className="md:col-span-6 scroll-reveal stagger-7">
            <ServiceCard service={services[6]} />
          </div>

          {/* Card 8: Insurance SDK */}
          <div className="md:col-span-4 scroll-reveal stagger-8">
            <ServiceCard service={services[7]} />
          </div>

          {/* Card 9: Custom Software */}
          <div className="md:col-span-4 scroll-reveal stagger-9">
            <ServiceCard service={services[8]} />
          </div>

          {/* Card 10: Cloud Infra */}
          <div className="md:col-span-4 scroll-reveal stagger-10">
            <ServiceCard service={services[9]} />
          </div>

          {/* Card 11: AI Analytics — cs-12 */}
          <div className="md:col-span-12 scroll-reveal stagger-11">
            <ServiceCard service={services[10]} wide />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  tall,
  wide,
}: {
  service: Service;
  tall?: boolean;
  wide?: boolean;
}) {
  return (
    <div
      className={`group relative glass-card rounded-2xl p-6 transition-all duration-500 service-card-glow cursor-default overflow-hidden h-full ${
        tall ? 'min-h-[320px] flex flex-col justify-between' : ''
      } ${wide ? 'flex flex-col sm:flex-row gap-6 items-start' : ''}`}
    >
      {/* Glow accent */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${service.accent} 0%, transparent 70%)`,
          filter: 'blur(20px)',
        }}
      />

      <div className={`${wide ? 'flex-shrink-0' : ''}`}>
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${service.accent}20`, color: service.accent }}
        >
          {service.icon}
        </div>

        {/* Tag */}
        {service.featured && (
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-3"
            style={{ backgroundColor: `${service.accent}20`, color: service.accent }}
          >
            Featured
          </span>
        )}
      </div>

      <div className={`${wide ? 'flex-1' : ''}`}>
        <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-accent transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed font-medium">
          {service.description}
        </p>

        {/* Arrow link */}
        <div
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
          style={{ color: service.accent }}
        >
          Learn more
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}