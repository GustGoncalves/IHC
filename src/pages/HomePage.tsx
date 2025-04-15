import DestaquesSection from "@/components/destaquesSection.tsx/DestaqueSection";
import CarrosselAlmenara from "@/components/hero/CarroselAlmenara";

const HomePage = () => {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-amber-100">
      {/* Hero Section */}
      <div className="w-full text-center pt-12 pb-16 px-4">
        <div className="inline-block bg-amber-800/10 px-6 py-2 rounded-full mb-4 border border-amber-200 animate-fade-in">
          <span className="text-amber-800 font-medium tracking-wide">
            Vale do Jequitinhonha
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-3 animate-fade-in-up">
          Almenara <span className="text-amber-700">- MG</span>
        </h1>
        <p className="text-amber-800/90 max-w-2xl mx-auto text-lg md:text-xl animate-fade-in-up delay-100">
          Onde a cultura mineira se encontra com as belezas do sertão
        </p>
      </div>

      {/* Carrossel */}
      <CarrosselAlmenara />

      {/* Atrações Rápidas */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-3">
            Conheça Nossas <span className="text-amber-600">Atrações</span>
          </h2>
          <p className="text-amber-700 max-w-3xl mx-auto text-lg">
            Descubra as riquezas que fazem de Almenara um destino único
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "🏺",
              title: "Cerâmica",
              desc: "Artesanato em barro tradicional",
              link: "#ceramica",
            },
            {
              icon: "🌊",
              title: "Rio Jequitinhonha",
              desc: "Coração do Vale",
              link: "#rio",
            },
            {
              icon: "🏰",
              title: "Castelo",
              desc: "Marco arquitetônico",
              link: "#castelo",
            },
            {
              icon: "🍲",
              title: "Culinária",
              desc: "Sabores do sertão",
              link: "#culinaria",
            },
          ].map((item) => (
            <a
              href={item.link}
              key={item.title}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-amber-200 hover:border-amber-400 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center text-3xl group-hover:bg-amber-200 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">
                {item.title}
              </h3>
              <p className="text-amber-700 text-sm mb-3">{item.desc}</p>
              <span className="text-amber-600 text-xs font-medium hover:text-amber-800 transition-colors inline-flex items-center">
                Explorar <span className="ml-1">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Seção de Destaques Detalhados */}
      <DestaquesSection />
    </section>
  );
};

export default HomePage;
