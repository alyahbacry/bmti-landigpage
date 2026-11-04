"use client";

import { AnimatedHero } from "@/components/ui/animated-hero-section-1";
import { Button } from "@/components/ui/button";
import { MountainIcon } from "lucide-react";

export default function AnimatedHeroDemo() {
  const navLinks = [
    { label: "Solutions", href: "#" },
    { label: "Working", href: "#" },
    { label: "Discover", href: "#" },
  ];

  const handleCtaClick = () => {
    alert("Primary CTA clicked!");
  };
  
  const handleSecondaryCtaClick = () => {
    alert("Secondary CTA clicked!");
  };

  return (
    <AnimatedHero
      backgroundImageUrl="https://cdn.21st.dev/assets/mirror/c5/c5832175f6f9db22d2918483d8cf4039ec0193385658dd908d0dc8201063b110.jpg"
      logo={
        <>
          <MountainIcon className="h-6 w-6 text-primary-foreground" />
          <span className="font-semibold text-primary-foreground">TwentyFirst</span>
        </>
      }
      navLinks={navLinks}

      // UPDATED: The top-right button now uses the same glass style for consistency
      topRightAction={
        <Button className="bg-white/10 backdrop-blur-sm border border-white/20 text-primary-foreground hover:bg-white/20">
          Get Consultation
        </Button>
      }

      title="Take Charge of your Generation Now"
      description="Lead with purpose, build boldly, and shape the future—your generation's moment is now. Own it. Drive it."
      
      ctaButton={{
        text: "Learn More",
        onClick: handleCtaClick,
      }}

      secondaryCta={{
        text: "Contact Us",
        onClick: handleSecondaryCtaClick,
      }}
    />
  );
}

