import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // --- INSTRUKSI PENTING ---
    // Pastikan ID di bawah ini sesuai dengan yang ada di Dashboard EmailJS Anda
    emailjs
      .sendForm(
        "service_3bzkmb8",  // GANTI: Service ID
        "template_kdlgojy", // GANTI: Template ID
        formRef.current,
        "q7b2rvdZXV9v5G9w1"  // GANTI: Public Key (Bukan Private Key)
      )
      .then(
        (result) => {
          setLoading(false);
          setStatus({ 
            type: "success", 
            message: "Pesan terkirim! Saya akan segera menghubungi Anda." 
          });
          formRef.current.reset(); // Reset form setelah berhasil
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          setStatus({ 
            type: "error", 
            message: "Gagal: " + (error.text || "Terjadi kesalahan sistem.") 
          });
        }
      );
  };

  const contactInfo = [
    { label: "Email", value: "fauziiladhim@mail.ugm.ac.id", icon: <Mail size={20} className="text-cyan-500" /> },
    { label: "Lokasi", value: "Sleman, Yogyakarta", icon: <MapPin size={20} className="text-cyan-500" /> },
    { label: "Status", value: "Tersedia untuk Proyek", icon: <Phone size={20} className="text-cyan-500" /> },
  ];

  return (
    <section id="contact" className="w-full py-24 bg-[#050816] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[30vw] h-[30vw] rounded-full bg-blue-600/5 blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[25vw] h-[25vw] rounded-full bg-cyan-600/5 blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* SISI KIRI: INFO KONTAK */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-cyan-500 font-medium tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-3">
                Kontak
              </h2>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                Hubungi Saya untuk<br /> 
                Bekerja Sama atau Konsultasi
              </h1>
            </motion.div>

            <motion.p 
              className="text-gray-400 text-sm md:text-base leading-relaxed font-light max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Gunakan formulir ini atau kontak langsung melalui email untuk konsultasi mengenai WebGIS, Analisis Spasial, atau Pengembangan Aplikasi.
            </motion.p>
          </div>

          {/* SISI KANAN: FORMULIR */}
          <motion.div 
            className="lg:col-span-7 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl blur opacity-10"></div>
              
              <form 
                ref={formRef} 
                onSubmit={sendEmail}
                className="relative bg-[#0b112b]/80 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/10 flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-400 text-[10px] uppercase tracking-widest ml-1">Nama</label>
                    <input 
                      type="text" 
                      name="user_name"  // Sesuai template EmailJS: {{user_name}}
                      required
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-400 text-[10px] uppercase tracking-widest ml-1">Email</label>
                    <input 
                      type="email" 
                      name="user_email" // Sesuai template EmailJS: {{user_email}}
                      required
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all"
                      placeholder="email@anda.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-[10px] uppercase tracking-widest ml-1">Pesan</label>
                  <textarea 
                    name="message" // Sesuai template EmailJS: {{message}}
                    rows="4" 
                    required
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                    placeholder="Apa yang bisa saya bantu?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {loading ? "Sedang Mengirim..." : (
                    <>
                      Kirim Pesan <Send size={14} />
                    </>
                  )}
                </button>

                {/* Feedback Status */}
                <AnimatePresence>
                  {status.message && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`flex items-center gap-3 p-4 rounded-xl text-xs ${
                        status.type === "success" 
                        ? "bg-green-500/10 text-green-400 border border-green-500/20" 
                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                      }`}
                    >
                      {status.type === "success" ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                      {status.message}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}