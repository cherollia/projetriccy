'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // icônes (optionnel, utilise Heroicons ou Lucide)
import { ShoppingCart } from 'lucide-react';



export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showShoesMenu, setShowShoesMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  


  useEffect(() => {
    setIsMounted(true);
    setIsVisible(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
        className={`max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-300 ${
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

        {/* Bouton menu mobile */}
        <button
          className="md:hidden text-pink-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu desktop */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex space-x-8 text-lg font-medium relative">
            <Link href="/" className="hover:text-pink-500 transition hover:scale-105">Accueil</Link>
            <Link href="/sac" className="hover:text-pink-500 transition hover:scale-105">Sac</Link>
            <div
              className="relative"
              onMouseEnter={() => setShowShoesMenu(true)}
              onMouseLeave={() => setShowShoesMenu(false)}
            >
              <span className="cursor-pointer hover:text-pink-500 transition hover:scale-105">
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


        {/* Connexion / Inscription (desktop) */}
        {isMounted && (
          <div className="hidden md:flex items-center gap-3">
            <Link href="/connexion" className="text-sm font-medium px-4 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition">
              Connexion
            </Link>
            <Link href="/inscription" className="text-sm font-medium px-4 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition">
              Inscription
            </Link>
            <div className="relative cursor-pointer">
          <Link href="/panier" className="text-pink-600 hover:text-pink-700">
            <ShoppingCart size={26} />
          </Link>
        </div>
          </div>
          

        )}
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-inner px-4 pb-4">
          <div className="flex flex-col gap-3 mt-2 text-base font-medium">
            <Link href="/" className="hover:text-pink-500">Accueil</Link>
            <Link href="/sac" className="hover:text-pink-500">Sac</Link>
            <div>
              <span className="font-semibold text-pink-600">Chaussures</span>
              <div className="ml-2 flex flex-col space-y-1 mt-1">
                <Link href="/chaussures/femme" className="text-gray-700 hover:text-pink-500">Femme</Link>
                <Link href="/chaussures/homme" className="text-gray-700 hover:text-pink-500">Homme</Link>
              </div>
            </div>
            <div className="pt-2 flex gap-2">
              <Link href="/connexion" className="w-full text-center text-sm font-medium px-4 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition">
                Connexion
              </Link>
              <Link href="/inscription" className="w-full text-center text-sm font-medium px-4 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition">
                Inscription
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
