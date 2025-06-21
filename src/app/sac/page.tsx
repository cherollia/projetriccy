'use client';

import React, { useState } from 'react';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Sac Bandoulière Kente",
    price: "20500",
    originalPrice: "26000",
    image: "/img1.jpeg",
    category: "sac à main",
    colors: ["rose", "violet", "multicolore"],
   
  },
  {
    id: 2,
    name: "Sac dame chic",
    price: "20000",
    originalPrice: "35000",
    image: "/img2.jpeg",
    category: "sac à main",
    colors: ["orange", "rouge", "noir"],
  },
  {
    id: 3,
    name: "Sacoche chic",
    price: "25000",
    originalPrice: "35000",
    image: "/img3.jpeg",
    category: "sac à main",
    colors: ["orange", "rouge", "noir"],
  },
  {
    id: 4,
    name: "Sacoche chic",
    price: "13000",
    originalPrice: "18000",
    image: "/img4.jpeg",
    category: "sac à main",
    colors: ["orange", "rouge", "noir"],
  },
   {
    id: 5,
    name: "Sacoche chic",
    price: "13000",
    originalPrice: "18000",
    image: "/img.jpeg",
    category: "sac à main",
    colors: ["orange", "rouge", "noir"],
  },
   {
    id: 6,
    name: "Sacoche chic",
    price: "13000",
    originalPrice: "18000",
    image: "/img6.jpeg",
    category: "sac à main",
    colors: ["orange", "rouge", "noir"],
  },
   {
    id: 7,
    name: "Sacoche chic",
    price: "13000",
    originalPrice: "18000",
    image: "/img7.jpeg",
    category: "sac à main",
    colors: ["orange", "rouge", "noir"],
  },
   {
    id: 8,
    name: "Sacoche chic",
    price: "13000",
    originalPrice: "18000",
    image: "/img8.jpeg",
    category: "sac à main",
    colors: ["orange", "rouge", "noir"],
  },
   {
    id: 9,
    name: "Sacoche chic",
    price: "13000",
    originalPrice: "18000",
    image: "/img9.jpeg",
    category: "sac à main",
    colors: ["orange", "rouge", "noir"],
  },
   {
    id: 10,
    name: "Sacoche chic",
    price: "13000",
    originalPrice: "18000",
    image: "/img10.jpeg",
    category: "sac à main",
    colors: ["orange", "rouge", "noir"],
  },
  
  // Ajoute les autres produits ici comme dans ton tableau original...
];

const getColorClass = (color: string) => {
  const colorMap: Record<string, string> = {
    'rose': 'bg-pink-700',
    'violet': 'bg-purple-300',
    'multicolore': 'bg-gradient-to-r from-red-300 via-yellow-300 to-blue-300',
    'orange': 'bg-orange-300',
    'rouge': 'bg-red-300',
    'noir': 'bg-gray-800',
    'jaune': 'bg-yellow-300',
    'blanc': 'bg-white border border-gray-300',
    'bleu': 'bg-blue-300',
    'doré': 'bg-yellow-400',
    'naturel': 'bg-amber-200',
    'marron': 'bg-amber-700',
    'beige': 'bg-amber-100',
    'or': 'bg-yellow-400',
    'bronze': 'bg-amber-600',
    'vert': 'bg-green-300'
  };
  return colorMap[color] || 'bg-gray-300';
};

const SacPage = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites);
    newFavorites.has(id) ? newFavorites.delete(id) : newFavorites.add(id);
    setFavorites(newFavorites);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-pink-500 to-orange-400 text-white py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Collection Sacs Artisanaux</h2>
        <p className="text-xl opacity-90">Découvrez notre sélection de sacs africains authentiques</p>
      </div>

      {/* Grid Produits */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              onMouseEnter={() => setHoveredItem(product.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Nouveau
                    </span>
                  )}
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    -{Math.round(((parseFloat(product.originalPrice) - parseFloat(product.price)) / parseFloat(product.originalPrice)) * 100)}%
                  </span>
                </div>

                <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-300 ${
                  hoveredItem === product.id ? 'opacity-100' : 'opacity-70'
                }`}>
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className={`p-2 rounded-full transition-colors ${
                      favorites.has(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart size={16} fill={favorites.has(product.id) ? 'currentColor' : 'none'} />
                  </button>
                  <button className="p-2 bg-white text-gray-600 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                    <Eye size={16} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs font-medium">{product.category}</span>
                  <div className="flex items-center text-sm text-yellow-500">
                    <Star size={14} className="fill-current" />
                    <span className="ml-1"></span>
                  </div>
                </div>

                <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>

                <div className="flex gap-1 mb-3">
                  {product.colors.map((color, index) => (
                    <div key={index} className={`w-4 h-4 rounded-full ${getColorClass(color)}`} title={color} />
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-pink-600">{product.price} XAF</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice} XAF</span>
                </div>

                <button className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-orange-500 transition-all duration-300 flex items-center justify-center gap-2">
                  <ShoppingCart size={18} />
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default SacPage;
