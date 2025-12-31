import { motion } from "framer-motion";
import p from "../assets/p.jpeg";

export default function About() {
  const stats = [
    { label: "Experience", value: "1+ Year" },
    { label: "Speciality", value: "GIS & Web" },
    { label: "Education", value: "UGM" },
  ];

  return (
    <section id="about" className="w-full py-24 bg-[#050816] relative overflow-hidden">
      {/* Background Lighting consistent with Home */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[30vw] h-[30vw] rounded-full bg-blue-600/5 blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[25vw] h-[25vw] rounded-full bg-cyan-600/5 blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Photo with refined border */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-middle"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative w-[260px] h-[340px] md:w-[300px] md:h-[400px] bg-[#0b112b] rounded-2xl overflow-hidden border border-white/5">
                <img 
                  src={p} 
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100" 
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-cyan-500 font-medium tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-3">
                Profil Singkat
              </h2>
              {/* Ukuran Judul diperkecil ke text-2xl/4xl dan menggunakan text-white solid */}
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                Kreativitas Desain dalam <br /> 
                Presisi Logika Pemrograman
              </h1>
            </motion.div>

            <motion.p 
              className="text-gray-400 text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Saya adalah mahasiswa <span className="text-white font-medium">Sistem Informasi Geografis di Universitas Gadjah Mada</span>. 
              Saya berfokus pada pengembangan solusi cerdas yang mengintegrasikan analisis spasial dengan teknologi pengembangan aplikasi modern serta visualisasi data yang menarik.
            </motion.p>

            {/* Stats Cards - Ukuran lebih kompak */}
            <div className="grid grid-cols-3 gap-3 mt-2">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="p-3 md:p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-cyan-500/20 transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  <p className="text-white font-bold text-sm md:text-base">{stat.value}</p>
                  <p className="text-gray-500 text-[8px] md:text-[9px] uppercase tracking-[0.15em] mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <a href="#projects" className="px-7 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest text-white bg-gradient-to-r from-cyan-600 to-blue-600 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all">
                Project Saya
              </a>
              <a href="https://github.com/fauziiladhim1" target="_blank" rel="noreferrer" className="px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10 hover:bg-white/5 transition-all">
                Github Profil
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}