import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

// Import Assets
import verstappenImg from "../assets/verstappen.png";
import tsunamiImg from "../assets/tsunami.png";
import wppImg from "../assets/wpp.png";
import flowtaskImg from "../assets/flowtask.png";
import sumberImg from "../assets/sumber.png";

const useIsMobile = (query = "(max-width: 768px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return isMobile;
};

export default function Projects() {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        title: "FlowTask: Smart Productivity",
        category: "Mobile App Development",
        link: "https://drive.google.com/file/d/13toXbtUkafKVXdGdVaqqOgfTmcI697mW/view?usp=drive_link",
        bgColor: "#050816", // Warna 1 (Warna Awal)
        image: flowtaskImg,
        description: "Poster promosi aplikasi manajemen tugas cerdas yang mengintegrasikan fitur geolocation untuk meningkatkan efisiensi mobilitas harian pengguna.",
        orientation: "vertical"
      },
      {
        title: "WebGIS Dusun Sumber",
        category: "Web Development",
        link: "https://source-84b40.web.app/",
        bgColor: "#0a0a20", // Warna 2
        image: sumberImg,
        description: "Platform WebGIS interaktif sebagai pusat informasi digital dan pemetaan fasilitas umum untuk mendukung manajemen data spasial di Dusun Sumberrum.",
        orientation: "horizontal"
      },
      {
        title: "Tsunami Impact Projection",
        category: "GIS Analysis",
        link: "https://drive.google.com/file/d/1Znkt34dMoOi3AqrwWLz0Hr8JnzWmsEUy/view?usp=drive_link",
        bgColor: "#04162e", // Warna 3 (Puncak/Tengah)
        image: tsunamiImg,
        description: "Poster infografis pemodelan spasial simulasi dampak tsunami setinggi 20m untuk analisis risiko dan strategi mitigasi kerusakan infrastruktur di wilayah Bengkulu.",
        orientation: "horizontal"
      },
      {
        title: "WPP 716 Fish Catch Zone",
        category: "Oceanography GIS",
        link: "https://drive.google.com/file/d/1ArF-GTjalXNHmwHmFifx6EgQOJGbUmAv/view?usp=drive_link",
        bgColor: "#0a0a20", // Kembali ke Warna 2
        image: wppImg,
        description: "Poster ilmiah hasil analisis spasial-temporal mengenai sebaran potensi tangkapan ikan pelagis berdasarkan parameter suhu permukaan laut dan konsentrasi Klorofil-a di WPP 716.",
        orientation: "vertical"
      },
      {
        title: "Max Verstappen Tribute",
        category: "Graphic Design",
        link: "https://drive.google.com/file/d/14JOZO5x2Ugp6Y8h7NJm8BYQx7wGJtS3P/view?usp=drive_link",
        bgColor: "#050816", // Kembali ke Warna 1 (Warna Asli)
        image: verstappenImg,
        description: "Poster karya visual tribute yang menonjolkan pencapaian dan identitas ikonik Max Verstappen sebagai juara dunia Formula 1.",
        orientation: "vertical"
      }
    ],
    []
  );

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const thresholds = projects.map((_, i) => (i + 1) / projects.length);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = thresholds.findIndex((t) => v <= t);
    setActiveIndex(idx === -1 ? thresholds.length - 1 : idx);
  });

  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      ref={sceneRef}
      className="relative transition-colors duration-700 ease-in-out"
      style={{
        height: `${100 * projects.length}vh`,
        backgroundColor: activeProject.bgColor,
      }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Glow Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-cyan-500/10 blur-[120px]"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-blue-600/10 blur-[120px]"></div>
        </div>

        {/* Header Section */}
        <div className="absolute top-12 z-30 text-center">
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cyan-500 font-medium tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-3"
          >
            Portofolio
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Proyek yang Dibuat</h2>
        </div>

        {/* Project Content */}
        <div className="relative w-full max-w-6xl px-6 flex flex-col md:flex-row items-center justify-center gap-10 z-20">
          
          {/* Left Side: Info (Desktop) / Top Info (Mobile) */}
          <div className="w-full md:w-2/5 flex flex-col justify-center text-center md:text-left order-2 md:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3 block">
                  {activeProject.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {activeProject.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed max-w-md mx-auto md:mx-0">
                  {activeProject.description}
                </p>

                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-cyan-400 transition-all group"
                >
                  Lihat Detail Proyek
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Image Preview */}
          <div className="w-full md:w-3/5 flex justify-center items-center order-1 md:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -20 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className={`relative group ${
                    activeProject.orientation === 'vertical' 
                    ? 'h-[50vh] md:h-[65vh] aspect-[1/1.414]' 
                    : 'h-[35vh] md:h-[45vh] aspect-[1.414/1]'
                }`}
              >
                {/* Decorative Frame */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 to-blue-600/50 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                
                <div className="relative h-full w-full bg-[#050816] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                        src={activeProject.image}
                        alt={activeProject.title}
                        className="w-full h-full object-contain md:object-cover"
                        loading="lazy"
                    />
                    {/* Overlay subtle gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Scroll Progress Indicator (Bottom) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {projects.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1 transition-all duration-300 rounded-full ${
                activeIndex === idx ? "w-8 bg-cyan-500" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}