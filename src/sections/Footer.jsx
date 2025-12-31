import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactDetails = [
    {
      icon: <Phone size={20} className="text-cyan-500" />,
      label: "Phone",
      value: "0898-5580-408",
      href: "https://wa.me/628985580408"
    },
    {
      icon: <Mail size={20} className="text-cyan-500" />,
      label: "Email",
      value: "zilzilfauzil@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=zilzilfauzil@gmail.com"
    },
    {
      icon: <MapPin size={20} className="text-cyan-500" />,
      label: "Address",
      value: "Pondok Karisma Residence, Kota Tasikmalaya, Indonesia",
      href: "https://maps.app.goo.gl/6ShiJHCfqijbVteSA"
    }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/fauziiladhim1", label: "Github" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/fauziiladim", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "https://instagram.com/fauzil.as", label: "Instagram" },
  ];

  return (
    <footer className="w-full bg-black pt-20 pb-10 relative overflow-hidden border-t border-white/5">
      {/* Background Decor sama dengan About/Contact */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-0 left-[10%] w-[300px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Bagian Kiri: Info Kontak */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-4"
              >
                Get in Touch
              </motion.h2>
              <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                Tersedia untuk kolaborasi dan peluang proyek baru. Mari bangun sesuatu yang luar biasa bersama-sama.
              </p>
            </div>

            <div className="space-y-6">
              {contactDetails.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-5 group w-fit"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/5 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-0.5">{item.label}</p>
                    <p className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Bagian Kanan: Navigasi & Dekorasi Abstract */}
          <div className="lg:col-span-6 relative flex flex-col justify-between items-end">
            
            {/* Dekorasi Abstract SVG (Meniru gambar dengan gaya modern) */}
            <div className="absolute right-0 top-0 opacity-20 pointer-events-none hidden md:block">
              <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M350 50C300 150 450 200 320 280" stroke="white" strokeWidth="1" strokeDasharray="5 5" />
                <circle cx="320" cy="240" r="10" stroke="cyan" strokeWidth="1" />
                <path d="M380 200C330 220 300 180 280 210" stroke="white" strokeWidth="1" opacity="0.5" />
                <rect x="280" y="80" width="15" height="15" stroke="white" strokeWidth="1" transform="rotate(45 280 80)" opacity="0.5" />
                <rect x="300" y="110" width="20" height="20" stroke="#6366f1" strokeWidth="1" transform="rotate(15 300 110)" />
              </svg>
            </div>

            <div className="text-right z-10 hidden lg:block">
               <button 
                onClick={scrollToTop}
                className="group flex items-center gap-3 ml-auto text-gray-400 hover:text-white transition-colors"
               >
                 <span className="text-[10px] uppercase tracking-widest">Back to Top</span>
                 <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all">
                    <ArrowUp size={18} className="group-hover:text-black" />
                 </div>
               </button>
            </div>

            <div className="w-full lg:w-auto mt-auto">
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-4 text-center lg:text-right">Follow Me</p>
              <div className="flex justify-center lg:justify-end gap-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs tracking-wide">
            © {new Date().getFullYear()} <span className="text-white font-medium">Fauzil Adhim</span>. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}