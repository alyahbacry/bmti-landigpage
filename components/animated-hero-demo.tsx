
"use client";

import { AnimatedHero } from "@/components/ui/animated-hero-section-1";
import { Button } from "@/components/ui/button";
import { BeamSearch } from "@/components/ui/beam-search";
import { MountainIcon } from "lucide-react";

export default function AnimatedHeroDemo() {
  const navLinks = [
    { label: "Profil", href: "#" },
    { label: "PPID", href: "#" },
    { label: "Informasi", href: "#" },
    { label: "Solusi Layanan", href: "#" },
    { label: "WBK-WBBM", href: "#" },
    { label: "Pelayanan Publik", href: "#" },
  ];

  return (
    <AnimatedHero
      backgroundVideoUrl="/videos/hero-video.mp4"
      logo={
        <>
          <MountainIcon className="h-6 w-6 text-primary-foreground" />
          <span className="font-semibold text-primary-foreground">
            BBPPMPV BMTI
          </span>
        </>
      }
      navLinks={navLinks}
      topRightAction={
        <Button className="bg-white/10 backdrop-blur-sm border border-white/20 text-primary-foreground hover:bg-white/20">
          Hubungi Kami
        </Button>
      }
      title="BBPPMPV BMTI"
      description="Balai Besar Pengembangan Penjaminan Mutu Pendidikan Vokasi Bidang Mesin dan Teknik Industri"
      searchBar={
        <BeamSearch
          placeholder="Cari informasi BBPPMPV BMTI..."
          colorVariant="ocean"
          theme="light"
        />
      }
    />
  );
}
