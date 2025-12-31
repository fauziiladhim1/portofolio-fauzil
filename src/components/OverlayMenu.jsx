import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const menuItems = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang", href: "#about" },
  { name: "Pengalaman", href: "#experience" },
  { name: "Proyek", href: "#projects" },
  { name: "Kontak", href: "#contact" },
];

export default function OverlayMenu({ isOpen, onClose }) {
  // Animasi Container Utama
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3, staggerChildren: 0.05, staggerDirection: -1 } 
    }
  };

  // Animasi Link Menu
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050816]/90 backdrop-blur-2xl"
        >
          {/* Tombol Tutup dengan Ring Deco */}
          <motion.button
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            onClick={onClose}
            className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white text-2xl hover:bg-white/20 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer hover:scale-110 hover:text-sky-400 transition-all duration-300"
            aria-label="Close Menu"
          >
            <FiX />
          </motion.button>

          {/* Navigasi Utama */}
          <nav className="flex flex-col items-center gap-4 w-full max-w-sm px-6">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={onClose}
                variants={itemVariants}
                className="relative w-full py-4 text-center group overflow-hidden rounded-2xl transition-all duration-500"
              >
                {/* Efek Blur Background saat Hover */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 backdrop-blur-md border border-white/0 group-hover:border-white/10 transition-all duration-500 scale-95 group-hover:scale-100"></div>
                
                {/* Teks Menu - Ukuran disamakan dengan header proyek (text-3xl) */}
                <span className="relative z-10 text-2xl md:text-3xl font-bold text-gray-400 group-hover:text-white tracking-tight transition-colors duration-300">
                  {item.name}
                </span>

                {/* Indikator Titik Cyan */}
                <div className="absolute left-1/2 -bottom-1 w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 -translate-x-1/2 transition-all duration-300"></div>
              </motion.a>
            ))}
          </nav>

          {/* Background Lighting consistent with Home/About */}
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/10 blur-[120px]"></div>
            <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-cyan-600/10 blur-[100px]"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}