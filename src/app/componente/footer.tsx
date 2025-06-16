export default function Footer() {
  return (
    <footer className="bg-pink-100 p-6 text-gray-700">
      <div className="grid grid-cols-3 gap-4 text-sm">
        <div>
          <h3 className="font-bold text-pink-700 mb-2">Riccy shopping</h3>
          <p>
            Votre boutique en ligne pour les produits artisanaux. Nous vous
            mettons à disposition une sélection de sacs et chaussures faits
            main.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-pink-700 mb-2">Navigation</h3>
          <ul>
            <li>Accueil</li>
            <li>Sacs</li>
            <li>Chaussures</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-pink-700 mb-2">Produit</h3>
          <p>chic sac dame</p>
          <p>Chaussures</p>
        </div>
      </div>
    </footer>
  )
}
