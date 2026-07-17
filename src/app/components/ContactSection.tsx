'use client';

import React, { useEffect, useRef, useState } from 'react';

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 70933 34484',
    link: 'tel:+917093334484',
    color: '#2563EB',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'webforgecreation@gmail.com',
    link: 'mailto:webforgecreation@gmail.com',
    color: '#06B6D4',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Address',
    value: 'Manjeera Trinity Corporate, Level 4, JNTU Road, Kukatpally, Hyderabad, Telangana',
    link: 'https://maps.google.com/?q=Manjeera+Trinity+Corporate+Kukatpally+Hyderabad',
    color: '#818CF8',
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.1 }
    );
    const reveals = sectionRef.current?.querySelectorAll('.scroll-reveal');
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error || 'Something went wrong. Please try again.');
        return;
      }

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormState({ name: '', email: '', company: '', service: '', message: '' });
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] blob-primary opacity-[0.15] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] blob-accent opacity-[0.12] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: Info */}
          <div className="lg:col-span-5 space-y-10 scroll-reveal stagger-1">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Contact Us
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Ready to build{' '}
                <span className="gradient-text-blue">something great?</span>
              </h2>
              <p className="text-lg text-white/50 font-medium leading-relaxed">
                Reach out to our team for a free consultation. We respond within 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.link}
                  target={detail.label === 'Address' ? '_blank' : undefined}
                  rel={detail.label === 'Address' ? 'noopener noreferrer' : undefined}
                  className="group flex items-start gap-4 glass-card rounded-xl p-4 transition-all duration-300 service-card-glow block"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${detail.color}20`, color: detail.color }}
                  >
                    {detail.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-white/40 font-bold uppercase tracking-wider mb-0.5">
                      {detail.label}
                    </div>
                    <div className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-200 break-words">
                      {detail.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Trust block */}
            <div className="p-5 rounded-2xl border border-primary/20 bg-primary/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-2">
                  {['#2563EB', '#06B6D4', '#818CF8'].map((c, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-navy-800 flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: c }}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm font-semibold text-white">+120 businesses trust us</span>
              </div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-white/40 font-medium">
                Rated 4.9/5 across all service categories
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7 scroll-reveal stagger-2">
            <div className="relative bg-white/[0.04] border border-white/10 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl shadow-black/30">
              {/* Inner glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 blob-primary opacity-30 pointer-events-none" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/50 font-medium">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
                      Send us a message
                    </h3>
                    <p className="text-white/40 text-sm font-medium">
                      Tell us about your project and we'll be in touch.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                        placeholder="Rahul Sharma"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-medium placeholder-white/25 focus:outline-none focus:border-primary/60 focus:bg-white/8 transition-all duration-200"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                        placeholder="rahul@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-medium placeholder-white/25 focus:outline-none focus:border-primary/60 focus:bg-white/8 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState((s) => ({ ...s, company: e.target.value }))}
                      placeholder="Your Company Pvt. Ltd."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-medium placeholder-white/25 focus:outline-none focus:border-primary/60 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-2">
                      Service of Interest <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formState.service}
                        onChange={(e) => setFormState((s) => ({ ...s, service: e.target.value }))}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-medium focus:outline-none focus:border-primary/60 transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-secondary text-white/50">Select a service</option>
                        <option value="payment-gateway" className="bg-secondary text-white">Payment Gateway</option>
                        <option value="fintech-web" className="bg-secondary text-white">Fintech Web Development</option>
                        <option value="payout" className="bg-secondary text-white">Payout Services</option>
                        <option value="bbps" className="bg-secondary text-white">BBPS Integration</option>
                        <option value="dmt" className="bg-secondary text-white">Money Transfer DMT</option>
                        <option value="pos" className="bg-secondary text-white">POS Machines</option>
                        <option value="design" className="bg-secondary text-white">Website & App Design</option>
                        <option value="insurance" className="bg-secondary text-white">Insurance SDK & API</option>
                        <option value="custom" className="bg-secondary text-white">Custom Software Development</option>
                        <option value="cloud" className="bg-secondary text-white">Cloud Infrastructure</option>
                        <option value="ai" className="bg-secondary text-white">AI Analytics Solutions</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-2">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      placeholder="Tell us about your project requirements..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-medium placeholder-white/25 focus:outline-none focus:border-primary/60 focus:bg-white/8 transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-white font-bold text-base hover:bg-blue-500 transition-all duration-300 hover:-translate-y-0.5 shadow-xl shadow-primary/40 group disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                      </>
                    )}
                  </button>

                  {error && (
                    <div className="flex items-start gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30">
                      <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                      <p className="text-red-400 text-xs font-medium">{error}</p>
                    </div>
                  )}

                  <p className="text-center text-xs text-white/30 font-medium">
                    We typically respond within 24 hours · No spam, ever
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
