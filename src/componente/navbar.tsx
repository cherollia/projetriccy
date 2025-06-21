'use client'; 

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showShoesMenu, setShowShoesMenu] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200'
            : 'bg-white border-b border-gray-100 shadow-sm'
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-4 transition-all duration-300 flex items-center justify-between ${
            scrolled ? 'py-2' : 'py-3'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={scrolled ? 35 : 40}
              height={scrolled ? 35 : 40}
              className="transition-all duration-300"
            />
            <span
              className={`font-bold text-pink-600 transition-all duration-300 ${
                scrolled ? 'text-lg' : 'text-xl'
              }`}
            >
              Riccy Shopping
            </span>
          </div>

          {/* Menu */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex space-x-8 text-lg font-medium relative">
              <Link href="/" className="hover:text-pink-500 transition duration-200 hover:scale-105">Accueil</Link>
              <Link href="/sac" className="hover:text-pink-500 transition duration-200 hover:scale-105">Sac</Link>

              <div
                className="relative"
                onMouseEnter={() => setShowShoesMenu(true)}
                onMouseLeave={() => setShowShoesMenu(false)}
              >
                <span className="cursor-pointer hover:text-pink-500 transition duration-200 hover:scale-105">
                  Chaussures
                </span>
                {showShoesMenu && (
                  <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-50">
                    <Link href="/chaussures/femme" className="block px-4 py-2 text-gray-700 hover:bg-pink-100">
                      Chaussures femme
                    </Link>
                    <Link href="/chaussures/homme" className="block px-4 py-2 text-gray-700 hover:bg-pink-100">
                      Chaussures homme
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Connexion & Inscription */}
          <div className="flex items-center gap-3">
            <Link
              href="/connexion"
              className="text-sm font-medium px-4 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
            >
              Connexion
            </Link>
            <Link
              href="/inscription"
              className="text-sm font-medium px-4 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
            >
              Inscription
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
