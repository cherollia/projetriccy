'use client';

import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';

interface Product {
  name: string;
  price: string;
  image: string;
}

interface Props {
  produits: Product[];
}

export default function GalleryPage({ produits }: Props) {
  const [formData, setFormData] = useState({ name: '', price: '' });
  const [products, setProducts] = useState<Product[]>(produits);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name && formData.price) {
      setProducts([...products, { ...formData, image: '/images/placeholder.jpg' }]);
      setFormData({ name: '', price: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 px-6 py-10">
      <form onSubmit={handleSubmit} className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-center">
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Nom du produit"
          className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-auto"
        />
        <input
          type="text"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          placeholder="Prix"
          className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-auto"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-700"
        >
          Ajouter
        </button>
      </form>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative">
              <Image src={product.image} alt={product.name} className="w-full h-64 object-cover width={400} height={300}" />
            </div>

            <div className="p-6">
              <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>

              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold text-pink-600">{product.price} XAF</span>
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
  );
}
