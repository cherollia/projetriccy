import Image from "next/image";

// components/About.tsx
export default function About() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-12" id="about">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Image illustrative */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/img32.jpeg"
            alt="À propos de Riccy Shopping"
             width={400} 
             height={300}
            className="w-full max-h-[400px] object-cover rounded-2xl shadow-l"
          />
        </div>

        {/* Texte à propos */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-6">
            À propos de nous
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Riccy Shopping est une boutique spécialisée dans la vente de sacs artisanaux
            africains faits à la main. Chaque pièce est unique, fabriquée avec amour,
            soin et un sens du style affirmé.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
            Nous mettons à l&apos;honneur le savoir-faire local, les motifs traditionnels
            et des matières de qualité pour vous proposer des articles à la fois
            pratiques, élégants et durables.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
            Rejoignez notre univers coloré et authentique !
          </p>
        </div>
      </div>
    </section>
  );
}
