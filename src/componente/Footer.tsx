'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-pink-100 p-6 text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
        {/* Colonne 1 : Logo + Description */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Image src="/logo.jpg" alt="Logo Riccy" width={40} height={40} />
            <h3 className="font-bold text-pink-700 text-lg">Riccy Shopping</h3>
          </div>
          <p>
            Votre boutique en ligne pour les produits artisanaux. Nous vous
            mettons à disposition une sélection de sacs et chaussures faits
            main.
          </p>
        </div>

        {/* Colonne 2 : Navigation */}
        <div>
          <h3 className="font-bold text-pink-700 mb-2">Navigation</h3>
          <ul className="space-y-1">
            <li>Accueil</li>
            <li>Sacs</li>
            <li>Chaussures</li>
          </ul>
        </div>

        {/* Colonne 3 : Produits */}
        <div>
          <h3 className="font-bold text-pink-700 mb-2">Produit</h3>
          <p>Chic sac dame</p>
          <p>Chaussures</p>
        </div>
      </div>

      {/* Bas de footer */}
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Riccy Shopping. Tous droits réservés.
      </div>
    </footer>
  );
}
