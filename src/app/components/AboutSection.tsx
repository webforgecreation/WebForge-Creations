'use client';

import React, { useEffect, useRef } from 'react';


const values = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Innovation First',
    description: 'We adopt emerging technologies proactively to keep our clients ahead of the curve.',
    color: '#2563EB',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Security by Design',
    description: 'Every product we build is engineered with security, compliance, and data privacy at its core.',
    color: '#06B6D4',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Client Partnership',
    description: 'We work as an extension of your team — dedicated support, transparent communication, long-term relationships.',
    color: '#818CF8',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: 'Scalable Architecture',
    description: 'Built to grow — our infrastructure solutions handle millions of transactions without breaking a sweat.',
    color: '#10B981',
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.1 }
    );
    const reveals = sectionRef?.current?.querySelectorAll('.scroll-reveal');
    reveals?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-80 h-80 blob-primary opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <div className="scroll-reveal stagger-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
              </svg>
              About Us
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Building fintech that{' '}
              <span className="gradient-text-blue">moves money smarter</span>
            </h2>

            <div className="space-y-4 text-white/60 font-medium leading-relaxed">
              <p>
                <strong className="text-white">WebForge Creations</strong> is a technology company
                founded in 2023, dedicated to providing scalable and innovative fintech solutions
                for global clients. Presented by{' '}
                <strong className="text-accent">Softmint India</strong>, we combine deep domain
                expertise with cutting-edge engineering to deliver products that matter.
              </p>
              <p>
                We specialize in building the digital infrastructure that powers modern financial
                services — from payment gateways and payout systems to AI-driven analytics and
                cloud platforms. Our solutions are trusted by businesses across India and beyond.
              </p>
              <p>
                Our team provides <strong className="text-white">dedicated technical support</strong> and{' '}
                <strong className="text-white">custom integration services</strong> to ensure seamless
                operation. For startup businesses and online platforms, we offer essential API tools
                and cloud infrastructure modules for rapid deployment.
              </p>
            </div>

            {/* Founding info */}
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { label: 'Founded', value: '2023' },
                { label: 'Based in', value: 'Hyderabad, India' },
                { label: 'Backed by', value: 'Softmint India' },
              ]?.map((item) => (
                <div key={item?.label} className="glass-card rounded-xl px-4 py-3 min-w-[120px]">
                  <div className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1">{item?.label}</div>
                  <div className="text-sm font-bold text-white">{item?.value}</div>
                </div>
              ))}
            </div>

            {/* Mission statement */}
            <div className="mt-8 p-5 rounded-2xl border border-primary/20 bg-primary/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-l-2xl" />
              <p className="text-white/80 font-semibold leading-relaxed italic pl-4">
                "Our primary goal is to empower businesses with efficient digital infrastructure —
                enabling them to focus on growth while we handle the technology."
              </p>
            </div>
          </div>

          {/* Right: Values */}
          <div className="space-y-4">
            <div className="scroll-reveal stagger-2 mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Our Core Values</h3>
              <p className="text-white/40 font-medium text-sm">
                Principles that guide every project we build
              </p>
            </div>

            {values?.map((value, i) => (
              <div
                key={value?.title}
                className={`scroll-reveal stagger-${i + 3} group glass-card rounded-xl p-5 transition-all duration-500 service-card-glow flex gap-4 items-start`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${value?.color}20`, color: value?.color }}
                >
                  {value?.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">
                    {value?.title}
                  </h4>
                  <p className="text-sm text-white/50 leading-relaxed font-medium">
                    {value?.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Additional offerings */}
            <div className="scroll-reveal stagger-7 mt-6 p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20">
              <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Built for Startups & Enterprises
              </h4>
              <p className="text-sm text-white/50 leading-relaxed font-medium">
                Whether you are launching your first digital product or scaling an enterprise platform,
                WebForge provides essential API tools, cloud modules, and rapid deployment support
                to accelerate your time to market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}