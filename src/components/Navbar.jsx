import { useState, useEffect, useRef } from "react";
import OverlayMenu from "./OverlayMenu";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);
  const timerId = useRef(null);

  useEffect(() => {
    const homeSection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    if (homeSection) {
      observer.observe(homeSection);
      return () => {
        if (homeSection) {
          observer.unobserve(homeSection);
        }
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible) {
        setVisible(true);
        return;
      }
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
        if (timerId.current) clearTimeout(timerId.current);
        timerId.current = setTimeout(() => {
          setVisible(false);
        }, 3000)
      }
      lastScrollY.current = currentScrollY;
    }
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timerId.current) clearTimeout(timerId.current);
    }
  }, [forceVisible]);

  return (
    <>
      <nav
        /* Navbar muncul di awal, sembunyi saat scroll sesuai logic 'visible', dan transparan */
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-all duration-500 
          ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} 
          bg-transparent`} 
      >
        <div className="flex items-center space-x-2 ml-4 sm:ml-10">
          <a 
            href="/portofolio-fauzil/" 
            className="text-2xl font-bold text-white hidden sm:block hover:opacity-80 transition-opacity"
          >
            Porto
          </a>
        </div>

        <div className="block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
          <button
            onClick={() => setMenuOpen(true)}
            /* PERUBAHAN DI SINI: Menambahkan cursor-pointer dan hover:scale agar terlihat interaktif */
            className="text-white text-3xl focus:outline-none cursor-pointer hover:scale-110 hover:text-sky-400 transition-all duration-300"
            aria-label="Open Menu"
          >
            <FiMenu />
          </button>
        </div>
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-gradient-to-r from-indigo-500 via-sky-400 to-cyan-300 text-white sm:mr-10 px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300"
          >
            Hubungi
          </a>
        </div>
      </nav>
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}