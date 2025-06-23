'use client';

import { useState } from 'react';
import { ShoppingCart, CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const initialProducts: Product[] = [
  { id: 20, name: 'Babouche homme', price: '12000F', image: '/img20.jpeg' },
  { id: 21, name: 'Babouche homme', price: '12000F', image: '/img21.jpeg' },
  { id: 22, name: 'Babouche homme', price: '12000F', image: '/img22.jpeg' },
  { id: 23, name: 'Babouche homme', price: '12000F', image: '/img23.jpeg' },
  { id: 24, name: 'Babouche homme', price: '12000F', image: '/img24.jpeg' },
  { id: 25, name: 'Babouche homme', price: '12000F', image: '/img25.jpeg' },
  { id: 26, name: 'Babouche homme', price: '12000F', image: '/img26.jpeg' },
  { id: 27, name: 'Babouche homme', price: '12000F', image: '/img27.jpeg' },
  { id: 28, name: 'Babouche homme', price: '12000F', image: '/img28.jpeg' },
  { id: 29, name: 'Babouche homme', price: '12000F', image: '/img29.jpeg' },
  { id: 30, name: 'Babouche homme', price: '12000F', image: '/img30.jpeg' },
  { id: 31, name: 'Babouche homme', price: '12000F', image: '/img31.jpeg' },
];

export default function BaboucheHommePage() {
  const [products] = useState<Product[]>(initialProducts);
  const [,setCart] = useState<Product[]>([]);
  const [addedMessage, setAddedMessage] = useState<string | null>(null);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
    setAddedMessage(`${product.name} ajouté au panier`);
    setTimeout(() => setAddedMessage(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 text-center relative px-6 py-10">
      {/* Notification */}
      {addedMessage && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 animate-fade-in-out">
            <CheckCircle size={20} />
            <span className="font-semibold">{addedMessage}</span>
          </div>
        </div>
      )}

      <div className="bg-pink-600 text-white py-10 mb-8">
        <h1 className="text-3xl font-bold">Babouche pour homme</h1>
        <p className="text-white mt-2">Découvrez notre collection de babouches artisanales.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 text-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="rounded-lg object-cover mx-auto"
            />
            <h2 className="mt-4 text-lg font-semibold text-pink-600">{product.name}</h2>
            <p className="text-gray-700 font-bold mb-4">{product.price}</p>

            <button
              onClick={() => addToCart(product)}
              className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 rounded-lg font-semibold hover:from-pink-600 hover:to-orange-500 transition-all flex items-center justify-center gap-2"
            >
              <ShoppingCart size={18} /> Ajouter au panier
            </button>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; transform: translateY(-20px); }
          10%, 90% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-out {
          animation: fadeInOut 2s ease-in-out forwards;
        }
      `}</style>
    </div>

    
  );
}
