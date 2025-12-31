import { motion } from "framer-motion";
import { 
  SiJavascript, SiTypescript, SiAndroidstudio, SiPhp, SiAdobephotoshop, 
  SiCanva, SiFirebase, SiFigma, SiHtml5, SiCss3, SiReact, SiNextdotjs, 
  SiTailwindcss, SiPostgresql, SiDbeaver, SiIonic, SiAffinitydesigner 
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const skillsRow1 = [
  { icon: <SiJavascript />, name: "JavaScript", color: "group-hover:text-yellow-400" },
  { icon: <SiTypescript />, name: "TypeScript", color: "group-hover:text-blue-400" },
  { icon: <SiReact />, name: "React JS", color: "group-hover:text-cyan-400" },
  { icon: <SiNextdotjs />, name: "Next JS", color: "group-hover:text-white" },
  { icon: <TbBrandReactNative />, name: "React Native", color: "group-hover:text-blue-500" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "group-hover:text-cyan-300" },
  { icon: <SiIonic />, name: "Ionic", color: "group-hover:text-blue-400" },
  { icon: <SiHtml5 />, name: "HTML5", color: "group-hover:text-orange-500" },
  { icon: <SiCss3 />, name: "CSS3", color: "group-hover:text-blue-600" },
];

const skillsRow2 = [
  { icon: <SiAndroidstudio />, name: "Android Studio", color: "group-hover:text-green-500" },
  { icon: <SiFirebase />, name: "Firebase", color: "group-hover:text-orange-400" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "group-hover:text-blue-300" },
  { icon: <SiPhp />, name: "PHP", color: "group-hover:text-indigo-400" },
  { icon: <SiFigma />, name: "Figma", color: "group-hover:text-purple-400" },
  { icon: <SiAdobephotoshop />, name: "Photoshop", color: "group-hover:text-blue-700" },
  { icon: <SiAffinitydesigner />, name: "Affinity", color: "group-hover:text-cyan-400" },
  { icon: <SiDbeaver />, name: "DBeaver", color: "group-hover:text-white" },
  { icon: <VscVscode />, name: "VS Code", color: "group-hover:text-blue-400" },
];

const SkillBadge = ({ s }) => (
  <div className="flex flex-col items-center justify-center gap-3 px-8 py-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm group hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-500 min-w-[120px]">
    {/* Menggunakan s.color untuk warna hover ikon yang berbeda-beda */}
    <div className={`text-3xl md:text-4xl text-gray-500 group-hover:scale-110 transition-all duration-500 ${s.color}`}>
      {s.icon}
    </div>
    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 group-hover:text-white transition-colors">
      {s.name}
    </p>
  </div>
);

export default function Skills() {
  const scrollTransition = (duration) => ({
    x: {
      repeat: Infinity,
      repeatType: "loop",
      duration: duration,
      ease: "linear",
    },
  });

  return (
    <section id="skills" className="w-full py-24 bg-[#050816] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-cyan-500 font-medium tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-3">
            Teknologi & Tools
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Keahlian Teknis
          </h1>
        </motion.div>
      </div>

      <div className="flex flex-col gap-8">
        {/* Row 1: Bergerak ke Kiri */}
        <div className="relative flex overflow-hidden py-2">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050816] to-transparent z-20"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050816] to-transparent z-20"></div>
          
          <motion.div 
            className="flex gap-8 whitespace-nowrap px-4"
            animate={{ x: [0, -1920] }}
            transition={scrollTransition(40)}
          >
            {[...skillsRow1, ...skillsRow1, ...skillsRow1].map((s, i) => (
              <SkillBadge key={i} s={s} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Bergerak ke Kanan */}
        <div className="relative flex overflow-hidden py-2">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050816] to-transparent z-20"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050816] to-transparent z-20"></div>
          
          <motion.div 
            className="flex gap-8 whitespace-nowrap px-4"
            animate={{ x: [-1920, 0] }}
            transition={scrollTransition(45)}
          >
            {[...skillsRow2, ...skillsRow2, ...skillsRow2].map((s, i) => (
              <SkillBadge key={i} s={s} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}