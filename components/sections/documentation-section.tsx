
"use client";

import { ZoomParallax } from "@/components/ui/zoom-parallax";


const documentationImages = [
  {
    src: "https://cdn.21st.dev/assets/mirror/de/de2a384dfac96d1a31a641ba6667c56747b8138ba0f4e633dbea0e7051311479.jpg",
    alt: "Dokumentasi kegiatan pelatihan",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/bb/bbc200e370140ed6d4bc9dfd7b9de0957419ee0facd61f8698ed0e14281b13f5.jpg",
    alt: "Dokumentasi kegiatan pendidikan vokasi",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/96/9624bda260e246bd41ab7d26ac6d8e3ad427c62cb1bed10fe22f0aca7bd727c6.jpg",
    alt: "Dokumentasi fasilitas pendidikan",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/e0/e09b97c0849e748eb1d19a8d23e341835806a6a384540bfd4f7ce88f97b97b51.jpg",
    alt: "Dokumentasi lingkungan pendidikan",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/28/28ab2843d2f3bb3b8439f0c198d9846be80044955263bff6ac49d89691dad55d.jpg",
    alt: "Dokumentasi kegiatan lembaga",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/96/96e261f67a4f180e273ca711f7b86abe72dd0fdc84dd75d9322b2d79baac46f0.jpg",
    alt: "Dokumentasi kegiatan pembelajaran",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/85/8590b403bb542a124c7de796e9ecf5da86509818f2969e4d94af8c440953a852.jpg",
    alt: "Dokumentasi lingkungan dan fasilitas",
  },
];

export default function DocumentationSection() {
  return (
    <section
  id="documentation"
  className="w-full bg-[#f7f7fa]"
>
  
      {/* Section Heading */}
      <div className="relative flex min-h-[50vh] flex-col items-center justify-center px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Dokumentasi Kegiatan
        </p>

        <h2 className="max-w-4xl text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Mengabadikan Perjalanan Pendidikan Vokasi
        </h2>

        <p className="mt-6 max-w-2xl text-center text-base leading-relaxed text-gray-600 md:text-lg">
          Jelajahi berbagai kegiatan, pelatihan, fasilitas, dan kolaborasi
          BBPPMPV BMTI dalam mengembangkan pendidikan vokasi Indonesia.
        </p>

        <div className="mt-8 h-1 w-20 rounded-full bg-blue-600" />
      </div>

      {/* Zoom Parallax Gallery */}
      <ZoomParallax images={documentationImages} />

      {/* Section Closing */}
      <div className="flex min-h-[35vh] flex-col items-center justify-center px-6 py-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
          Bersama Membangun Masa Depan Vokasi
        </h3>

        <p className="mt-4 max-w-xl text-gray-600">
          Mewujudkan sumber daya manusia yang kompeten, profesional, dan siap
          menghadapi perkembangan dunia industri.
        </p>
      </div>
    </section>
  );
}
