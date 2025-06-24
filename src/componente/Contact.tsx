export default function ContactPage() {
  return (
    <section className="min-h-screen bg-pink-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-6 text-center">
          Contact
        </h1>

        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700">
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

        {/* Formulaire de contact */}
        <div className="mt-10 border-t pt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Envoyer un message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600">Nom</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-3 rounded-lg text-sm sm:text-base"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 p-3 rounded-lg text-sm sm:text-base"
                placeholder="Votre email"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Message</label>
              <textarea
                className="w-full border border-gray-300 p-3 rounded-lg text-sm sm:text-base"
                rows={5}
                placeholder="Votre message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
