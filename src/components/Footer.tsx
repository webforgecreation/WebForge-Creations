import React from 'react';
import AppLogo from '@/components/ui/AppLogo';


export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <AppLogo
              src="/assets/WebForge_Lgo1-1784218497324.jpeg"
              size={36}
              className="rounded-lg overflow-hidden"
            />
            <span className="font-bold text-white tracking-tight">WebForge Creations</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: 'Services', href: '#services' },
              { label: 'Projects', href: '#projects' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ]?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-200"
              >
                {link?.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-white/40 font-medium">
            © 2025 WebForge Creations
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-white/30 font-medium">
            Presented by Softmint India · Manjeera Trinity Corporate, Hyderabad · Privacy · Terms
          </p>
        </div>
      </div>
    </footer>
  );
}
