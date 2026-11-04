"use client";

import React from "react";
import { motion } from "framer-motion";
import { CircularTestimonials } from '@/components/ui/circular-testimonials';

const testimonials = [
  {
    quote:
      "Kombinasi teori daring dan praktik luring dengan peralatan mutakhir.",
    name: "Pelayanan Pelatihan",
    src:
      "https://cdn.21st.dev/assets/mirror/02/0204be31ac91de05dc9a78ea3438dda481ff3deaaffa40cb28e3bc1822ba3650.jpg",
  },
  {
    quote:
      "Program PKL industri untuk pengembangan kompetensi siswa SMK.",
    name: "Pelayanan Non-Pelatihan",
    src:
      "https://cdn.21st.dev/assets/mirror/bb/bb5e69602eca31b29b15db66d5f95f5d6e1534037d1cc2c06e8cbb22cafb3a8f.jpg",
  },
  {
    quote:
      "Temukan informasi lengkap terkait jadwal, jenis, dan program pelatihan di BBPPMPV BMTI.",
    name: "Info Pelatihan",
    src:
      "https://cdn.21st.dev/assets/mirror/b1/b1e3120d49307c1e99ec979e6d05e79f67d7ecea727b27eb716a2b7bff5fe0bb.jpg",
  },
];


export const CircularTestimonialsDemo = () => (
  <motion.section
    initial={{ opacity: 0, y: 50, scale: 0.97 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="relative z-0 bg-[#f7f7fa]"
  >
    {/* Light testimonials section */}
    <div className="bg-[#f7f7fa] p-20 min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
      <div
        className="items-center justify-center relative flex"
        style={{ maxWidth: "1456px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#0a0a0a",
            designation: "#454545",
            testimony: "#171717",
            arrowBackground: "#141414",
            arrowForeground: "#f1f1f7",
            arrowHoverBackground: "#00A6FB",
          }}
          fontSizes={{
            name: "28px",
            designation: "20px",
            quote: "20px",
          }}
        />
      </div>
    </div>
  </motion.section>
);

export default CircularTestimonialsDemo;
