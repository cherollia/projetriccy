'use client';

import React from 'react';


export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-50 px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Connexion</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-pink-600 text-white font-semibold py-2 rounded-lg hover:bg-pink-700 transition"
          >
            Se connecter
          </button>
        </form>

        <div className="mt-6 text-center text-gray-500 text-sm">Ou connectez-vous avec</div>

        <div className="flex gap-4 mt-4">
          <button className="flex-1 border border-gray-300 rounded-lg py-2 hover:bg-gray-100">
            <span className="text-sm">Google</span>
          </button>
          <button className="flex-1 border border-gray-300 rounded-lg py-2 hover:bg-gray-100">
            <span className="text-sm">Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
}
