"use client";

import { useState, useEffect, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
}

interface CTAButton {
  text: string;
  onClick: () => void;
}

interface AnimatedHeroProps {
  backgroundVideoUrl?: string;
  backgroundImageUrl?: string;
  logo: ReactNode;
  navLinks: NavLink[];
  topRightAction?: ReactNode;
  title: string;
  description: string;
  searchBar?: ReactNode;
}

export function AnimatedHero({
  backgroundVideoUrl,
  backgroundImageUrl,
  logo,
  navLinks,
  topRightAction,
  title,
  description,
  searchBar,
}: AnimatedHeroProps) {

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky / Fixed Navbar */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-slate-950/85 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5"
            : "bg-slate-950/40 backdrop-blur-sm border-b border-white/5 py-5"
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {logo}
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-7 lg:gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/90 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden items-center gap-4 md:flex">
            {topRightAction}
          </div>

          {/* Mobile Actions: CTA + Hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            {topRightAction}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="rounded-lg p-2 text-white hover:bg-white/10 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md px-2 py-2 text-base font-medium text-white/90 hover:bg-white/10 hover:text-white transition"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-slate-950 pt-24 md:pt-28">
        {/* Background Video or Image */}
        {backgroundVideoUrl ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={backgroundVideoUrl} type="video/mp4" />
          </video>
        ) : backgroundImageUrl ? (
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          />
        ) : null}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              {description}
            </p>

            {/* CTA Buttons */}
            {/* Search Bar */}
{/* Search Bar */}
<div className="mt-10 w-full max-w-[520px]">
  {searchBar}
</div>
          </div>
        </div>
      </section>
    </>
  );
}
