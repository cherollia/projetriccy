// app/contact/page.tsx (Next.js 13+ App Router)
// OU pages/contact.tsx (Next.js classique)

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-pink-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">Contact</h1>

        <div className="space-y-6 text-lg text-gray-700">
          <p>
            <strong>Nom :</strong> BOUKEDI
          </p>
          <p>
            <strong>Prénom :</strong> Riccy Chérollia
          </p>
          <p>
            <strong>Email :</strong>{" "}
            <a href="mailto:boukediriccy" className="text-pink-500 underline">
              boukediriccy
            </a>
          </p>
          <p>
            <strong>Facebook :</strong>{" "}
            <a
              href="https://www.facebook.com/Chérollia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 underline"
            >
              Chérollia
            </a>
          </p>
        </div>

        {/* Optionnel : formulaire de contact */}
        <div className="mt-10 border-t pt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Envoyer un message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600">Nom</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-3 rounded-lg"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 p-3 rounded-lg"
                placeholder="Votre email"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Message</label>
              <textarea
                className="w-full border border-gray-300 p-3 rounded-lg"
                rows={5}
                placeholder="Votre message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
