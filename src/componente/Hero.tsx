import Image from "next/image";

// components/Hero.tsx
export default function Hero() {
  return (
    <section className="bg-pink-50 border-b-4 border-pink-400 px-4 sm:px-6 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Texte */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Bienvenue chez <span className="text-pink-600">Riccy Shopping</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4">
            Découvrez notre collection unique de sacs artisanaux, élégants et colorés.
          </p>
          <a
            href="#produits"
            className="inline-block mt-6 bg-pink-500 text-white font-semibold py-3 px-6 rounded-xl shadow hover:bg-pink-600 transition duration-300"
          >
            Voir les produits
          </a>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/img33.jpeg"
            alt="Sac artisanal Riccy"
            width={400} 
            height={300}
            className="w-full max-h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
