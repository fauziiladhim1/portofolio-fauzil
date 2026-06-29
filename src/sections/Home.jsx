import { useMemo, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import { Application } from '@splinetool/runtime';

const socials = [
  {
    Icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com/fauzil.as",
  },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fauziiladhim",
  },
  { 
    Icon: FaGithub, 
    label: "GitHub", 
    href: "https://github.com/fauziiladhim1" 
  },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.15,
    y: -3,
    filter:
      "drop-shadow(0 0 10px rgba(6, 182, 212, 0.8)) drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

export default function Home() {
  const canvasRef = useRef(null);
  
  const roles = useMemo(
    () => [
      "Geospatial Developer",
      "GIS Specialist",
      "Android Developer",
      "Deep Learning Enthusiast"
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Load Spline Scene dengan penanganan error unmount
  useEffect(() => {
    let splineApp = null;

    if (canvasRef.current) {
      splineApp = new Application(canvasRef.current);
      splineApp
        .load('https://prod.spline.design/tZcFKmyeIFClPhm1/scene.splinecode')
        .catch((err) => {
          console.error("Spline runtime failed to load safely:", err);
        });
    }

    // Membersihkan aplikasi saat komponen tidak lagi dimuat (unmount)
    return () => {
      if (splineApp && typeof splineApp.dispose === "function") {
        try {
          splineApp.dispose();
        } catch (e) {
          console.warn("Spline instance disposed with warnings.");
        }
      }
    };
  }, []);

  // Typewriter Effect Logic
  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < current.length) {
          setSubIndex((prev) => prev + 1);
        } else if (!deleting && subIndex === current.length) {
          setTimeout(() => setDeleting(true), 1500);
        } else if (deleting && subIndex > 0) {
          setSubIndex((prev) => prev - 1);
        } else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section
      id="home"
      className="w-full min-h-screen relative bg-[#050816] overflow-hidden flex items-center"
    >
      
      {/* Background Lighting - Midnight Aurora Theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/10 blur-[150px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative py-12 lg:py-0">
          <div className="w-full lg:pr-12 mx-auto">
            {/* Roles */}
            <motion.div
              className="mb-4 text-base sm:text-lg md:text-xl font-medium text-white tracking-[0.25em] uppercase opacity-90 min-h-[1.5em]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span className="inline-block w-[2px] ml-1 bg-cyan-400 animate-pulse align-middle" style={{ height: "1em" }}></span>
            </motion.div>

            {/* H1 Headings */}
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Halo, Saya <br />
              <span className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.2] block mt-1">
                Fauzil Adhim
              </span>
            </motion.h1>

            {/* Deskripsi */}
            <motion.p
              className="mt-6 text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Mahasiswa Sistem Informasi Geografis di Universitas Gadjah Mada yang berfokus pada integrasi data spasial dengan teknologi modern. 
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a 
                href="#projects" 
                className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-1 active:scale-95"
              >
                Lihat Portofolio
              </a>
              {/* Tombol Unduh Mengarah ke File Root Public */}
              <a 
                href="/CV_Fauzil.pdf" 
                download="CV Fauzil Adhim.pdf"
                className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/20 hover:bg-white/5 backdrop-blur-sm transition-all transform hover:-translate-y-1 active:scale-95"
              >
                Unduh Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <div className="mt-12 flex gap-7 text-xl md:text-2xl justify-center lg:justify-start">
              {socials.map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - 3D Spline Canvas */}
        <div className="relative flex flex-1 justify-center items-center min-h-[400px] lg:h-[650px] w-full cursor-grab active:cursor-grabbing">
          {/* Backglow Aura for 3D Asset */}
          <div className="absolute w-[70%] h-[70%] bg-blue-500/5 rounded-full blur-[120px]"></div>
          
          <motion.div 
            className="w-full h-full relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          >
            <canvas 
              ref={canvasRef} 
              id="canvas3d" 
              className="w-full h-full outline-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}