"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? "bg-amber-900 backdrop-blur-sm py-4" : "bg-amber-900 py-4"
      }`}
    >
      <div className="flex justify-between items-center text-amber-100 max-w-7xl mx-auto w-full px-4">
        <div className="flex items-center gap-2 relative group">
          <Link
            href="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsOpen(false);
            }}
            className="text-2xl md:text-3xl font-bold"
          >
            Farolzinho do <span className="text-amber-400">Vale</span>
          </Link>
          <span className="hidden md:block text-amber-300 text-sm absolute -right-5 -bottom-3 group-hover:rotate-12 transition-transform">
            Almenara-MG
          </span>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-lg">
          {navItems.map((item) => (
            <Link
              href={item.path}
              key={item.name}
              className="hover:text-amber-300 transition-colors pb-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-amber-400 after:transition-all"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-amber-100 hover:text-amber-300 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-amber-800/95 backdrop-blur-sm w-full px-4 py-3">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                href={item.path}
                key={item.name}
                className="text-amber-100 hover:text-amber-300 text-lg py-2 px-4 transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
