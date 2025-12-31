import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const experiences = [
  {
    role: "Asisten Praktikum Laboratorium",
    company: "Sekolah Vokasi - UGM",
    duration: "Agt 2025 - Des 2025",
    description:
      "Membimbing praktikum Pemrograman Spasial Mobile, menangani kendala teknis mahasiswa, serta memberikan mentoring dalam pengembangan aplikasi geospasial yang fungsional.",
    tags: ["Mobile GIS", "Kotlin", "Android Studio"],
  },
  {
    role: "Serveyor Pemetaan Infrastruktur PJU",
    company: "DPUPKP Kota Yogyakarta",
    duration: "Agt 2024 - Sep 2024",
    description:
      "Melakukan pemetaan menyeluruh terhadap infrastruktur Penerangan Jalan Umum (PJU) di sebagian wilayah kota Yogyakarta dan mengidentifikasi titik kerusakan untuk perbaikan teknis.",
    tags: ["ArcGIS", "Surveyor", "Data Mapping"],
  },
  {
    role: "Medali Perak - FIKSI Nasional",
    company: "Puspresnas Kemdikbudristek",
    duration: "2022",
    description:
      "Berhasil meraih Medali Perak dalam Festival Inovasi dan Kewirausahaan Siswa Indonesia (FIKSI) tingkat Nasional dalam bidang pengembangan teknologi dan inovasi.",
    tags: ["Innovation", "Entrepreneurship", "National"],
  },
  {
    role: "Finalis Top 10 LKTI Nasional",
    company: "Politeknik ITS",
    duration: "2022",
    description:
      "Terpilih sebagai finalis 10 besar dalam Lomba Karya Tulis Ilmiah (LKTI) tingkat nasional yang diselenggarakan oleh Institut Teknologi Sepuluh Nopember.",
    tags: ["Scientific Writing", "Research"],
  },
  {
    role: "Juara 1 Lomba Inovasi",
    company: "Kota Tasikmalaya",
    duration: "2017",
    description:
      "Meraih peringkat pertama dalam kompetisi inovasi tingkat sekolah menengah pertama se-Kota Tasikmalaya.",
    tags: ["Innovation", "Competition"],
  },
  {
    role: "Finalis Inovasi Teknologi Tepat Guna",
    company: "Provinsi Jawa Barat",
    duration: "2017",
    description:
      "Menjadi finalis dalam kompetisi Inovasi Teknologi Tepat Guna (TTG) mewakili daerah di tingkat Provinsi Jawa Barat.",
    tags: ["Appropriate Technology", "West Java"],
  },
];

export default function Experience() {
  const containerRef = useRef(null);
  
  // Progress scroll untuk garis timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" ref={containerRef} className="w-full py-24 bg-[#050816] relative overflow-hidden">
      {/* Background Glow - Konsisten dengan section lain */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-600/5 blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-blue-600/5 blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-500 font-medium tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-3"
          >
            Riwayat Karir & Prestasi
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            Pengalaman & Penghargaan
          </motion.h1>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Track Line (Background) */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10"></div>
          
          {/* Animated Progress Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 to-blue-600 origin-top shadow-[0_0_15px_rgba(6,182,212,0.5)]"
          ></motion.div>

          <div className="flex flex-col gap-16">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, idx }) {
  const isEven = idx % 2 === 0;

  return (
    <div className={`relative flex items-center justify-between w-full mb-8 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#050816] border-2 border-cyan-500 z-20 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`w-full md:w-[45%] ml-10 md:ml-0 bg-white/[0.02] border border-white/5 backdrop-blur-md p-6 rounded-2xl hover:border-cyan-500/30 transition-all group relative overflow-hidden`}
      >
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <span className="text-cyan-500 font-mono text-[10px] tracking-widest uppercase mb-2 block">
          {exp.duration}
        </span>
        <h3 className="text-white font-bold text-xl mb-1 group-hover:text-cyan-400 transition-colors">
          {exp.role}
        </h3>
        <p className="text-gray-400 font-medium text-sm mb-4">
          {exp.company}
        </p>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
          {exp.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] text-gray-400 uppercase tracking-tighter">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
      
      {/* Empty Space for Desktop layout */}
      <div className="hidden md:block w-[45%]"></div>
    </div>
  );
}