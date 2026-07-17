'use client';

import React, { useEffect, useRef } from 'react';



export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const blobs = heroRef.current.querySelectorAll<HTMLElement>('[data-parallax]');
      blobs.forEach((blob) => {
        const speed = parseFloat(blob.dataset.parallax || '1');
        blob.style.transform = `translate(${x * speed * 40}px, ${y * speed * 30}px)`;
      });
    };
    const el = heroRef.current;
    el?.addEventListener('mousemove', handleMouseMove);
    return () => el?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-secondary"
      style={{ paddingTop: '80px' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg-dark pointer-events-none" />

      {/* Atmospheric blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] blob-primary animate-blob-float pointer-events-none"
        data-parallax="1.2"
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] blob-accent animate-blob-float-alt pointer-events-none"
        data-parallax="0.8"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blob-secondary animate-blob-float-slow pointer-events-none opacity-60"
        data-parallax="0.5"
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-xs font-bold text-accent uppercase tracking-widest">
            Presented by Softmint India
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="text-hero-xl font-extrabold text-white tracking-tight leading-none mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="block">Code.</span>
          <span className="block gradient-text-blue">Create.</span>
          <span className="block">Conquer.</span>
        </h1>

        {/* Sub headline */}
        <p
          className="text-lg sm:text-xl text-white/60 font-medium max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Scalable and innovative fintech solutions for global clients.
          From payment gateways to AI-driven analytics — we build the digital
          infrastructure that powers your business.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <button
            onClick={() => handleScrollTo('#services')}
            className="px-8 py-3.5 rounded-xl bg-primary text-white font-bold text-base hover:bg-blue-500 transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-primary/40 flex items-center gap-2 group w-full sm:w-auto justify-center"
          >
            Explore Services
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none" stroke="currentColor" strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </button>
          <button
            onClick={() => handleScrollTo('#contact')}
            className="px-8 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            Get in Touch
          </button>
        </div>

        {/* Stats strip */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          {[
            { value: '500+', label: 'Projects Delivered' },
            { value: '11+', label: 'Core Services' },
            { value: '2023', label: 'Founded' },
            { value: '24/7', label: 'Tech Support' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl px-4 py-4 text-center"
            >
              <div className="text-2xl font-extrabold gradient-text-blue leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-white/50 font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <span className="text-xs text-white/30 font-medium uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}