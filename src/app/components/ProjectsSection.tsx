'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const stats: Stat[] = [
  {
    value: 500,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Successfully completed and deployed across fintech, e-commerce, and enterprise domains',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: '#2563EB',
  },
  {
    value: 120,
    suffix: '+',
    label: 'Global Clients',
    description: 'Businesses across India, Southeast Asia, Middle East, and beyond trust WebForge',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    color: '#06B6D4',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Consistently high satisfaction scores driven by quality delivery and dedicated support',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    color: '#F59E0B',
  },
  {
    value: 50,
    suffix: '+',
    label: 'API Integrations',
    description: 'Payment, banking, insurance, and telecom API integrations built and maintained',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    color: '#818CF8',
  },
];

const projectHighlights = [
  {
    category: 'Fintech Platform',
    title: 'Multi-Bank Payout Engine',
    description: 'Built a real-time payout system processing ₹50Cr+ daily across 25 bank integrations for a leading fintech startup.',
    tags: ['DMT', 'NEFT/IMPS', 'Real-time'],
    color: '#2563EB',
    metric: '₹50Cr+',
    metricLabel: 'Daily Volume',
  },
  {
    category: 'Payment Infrastructure',
    title: 'BBPS Aggregator Platform',
    description: 'Developed a white-label BBPS aggregator serving 200+ billers with 99.9% uptime and sub-second response times.',
    tags: ['BBPS', 'API', 'White-label'],
    color: '#06B6D4',
    metric: '99.9%',
    metricLabel: 'Uptime',
  },
  {
    category: 'Enterprise Software',
    title: 'AI-Powered Risk Analytics',
    description: 'Deployed machine learning models for real-time fraud detection, reducing false positives by 78% for a payment company.',
    tags: ['AI/ML', 'Fraud Detection', 'Analytics'],
    color: '#F59E0B',
    metric: '78%',
    metricLabel: 'Fraud Reduction',
  },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, active]);
  return count;
}

function StatCard({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.value, 1800, active);
  return (
    <div className="group glass-card rounded-2xl p-6 transition-all duration-500 service-card-glow relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-60"
        style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
      />
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
      >
        {stat.icon}
      </div>
      <div className="stat-number font-extrabold text-white leading-none mb-1">
        {count}{stat.suffix}
      </div>
      <div className="text-sm font-bold text-white/80 mb-2">{stat.label}</div>
      <p className="text-xs text-white/40 leading-relaxed font-medium">{stat.description}</p>
    </div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            if (entry.target.classList.contains('stats-trigger')) {
              setStatsActive(true);
            }
          }
        });
      },
      { threshold: 0.15 }
    );
    const reveals = sectionRef.current?.querySelectorAll('.scroll-reveal, .stats-trigger');
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 blob-accent opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal stagger-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-5">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
            </svg>
            Projects & Impact
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Delivered results that{' '}
            <span className="gradient-text-cyan">speak for themselves</span>
          </h2>
          <p className="text-lg text-white/50 font-medium">
            Numbers that reflect our commitment to quality, speed, and scale.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 stats-trigger scroll-reveal stagger-2">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} active={statsActive} />
          ))}
        </div>

        {/* Project Highlights */}
        <div className="scroll-reveal stagger-3 mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Featured Projects</h3>
          <p className="text-white/40 font-medium text-sm">A selection of our most impactful deliveries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectHighlights.map((project, i) => (
            <div
              key={project.title}
              className={`scroll-reveal stagger-${i + 4} group glass-card rounded-2xl p-6 transition-all duration-500 service-card-glow relative overflow-hidden`}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
              />

              {/* Metric badge */}
              <div className="flex items-start justify-between mb-5">
                <span
                  className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: `${project.color}20`, color: project.color }}
                >
                  {project.category}
                </span>
                <div className="text-right">
                  <div
                    className="text-2xl font-extrabold leading-none"
                    style={{ color: project.color }}
                  >
                    {project.metric}
                  </div>
                  <div className="text-xs text-white/40 font-medium">{project.metricLabel}</div>
                </div>
              </div>

              <h4 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h4>
              <p className="text-sm text-white/50 leading-relaxed font-medium mb-5">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white/5 text-white/50 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}