import AnimatedHeroDemo from "@/components/animated-hero-demo";
import CircularTestimonialsDemo from "@/components/sections/testimonials-section";
import FeaturedSectionStats from "@/components/ui/featured-section-stats";
import ScrollReveal from "@/components/ui/scroll-reveal";
import DocumentationSection from "@/components/sections/documentation-section";

export default function Home() {
  return (
      <main className="min-h-screen w-full">
      {/* Hero Section */}
      <AnimatedHeroDemo />

      {/* Testimonial Section */}
      <CircularTestimonialsDemo />

      {/* Stats Section */}
      <ScrollReveal>
        <FeaturedSectionStats />
        {/* Documentation Section */}
        <DocumentationSection />
      </ScrollReveal>
    </main>
  );
}
