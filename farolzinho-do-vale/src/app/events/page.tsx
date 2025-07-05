import { CalendarDays, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { blogPosts } from "./data";
import { upcomingEvents } from "./data";

const Eventos = () => {
  return (
    <main className="bg-amber-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Blog e Eventos de Almenara
          </h1>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Fique por dentro de tudo que acontece na nossa cidade
          </p>
        </div>

        {/* Destaque do Evento Principal */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
            <CalendarDays className="mr-2" /> Evento em Destaque
          </h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-200">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src="/festival-cultural.jpg"
                  alt="Festival Cultural"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6 md:w-1/2">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
                    Evento Cultural
                  </span>
                  <span className="text-amber-600 text-sm">
                    15-18 de Outubro, 2024
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-amber-900 mb-3">
                  Festival de Cultura Popular 2024
                </h3>

                <div className="flex items-center text-amber-700 mb-4">
                  <MapPin className="mr-1" size={18} />
                  <span>Praça Central e Centro Cultural</span>
                </div>

                <p className="text-amber-800 mb-6">
                  O maior evento cultural do Vale do Jequitinhonha traz este ano
                  mais de 100 atrações, incluindo shows musicais, exposições de
                  artesanato, gastronomia típica e oficinas culturais.
                </p>

                <div className="flex flex-wrap gap-3">
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full transition">
                    Programação Completa
                  </button>
                  <button className="border border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-2 rounded-full transition">
                    Como Chegar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grade de Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-amber-800 mb-6">
            Últimas Notícias
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-100 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        post.category === "evento"
                          ? "bg-amber-600 text-white"
                          : post.category === "noticia"
                          ? "bg-blue-600 text-white"
                          : "bg-purple-600 text-white"
                      }`}
                    >
                      {post.category === "evento"
                        ? "Evento"
                        : post.category === "noticia"
                        ? "Notícia"
                        : "Cultural"}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-amber-600">{post.date}</span>
                    <span className="text-xs text-amber-500">
                      por {post.author}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-amber-900 mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-amber-600 transition"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-amber-800 mb-4">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-amber-600 hover:text-amber-800 font-medium text-sm flex items-center transition"
                  >
                    Leia mais →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Agenda de Eventos */}
        <section>
          <h2 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
            <Clock className="mr-2" /> Agenda de Eventos
          </h2>

          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
                  event.status === "acontecendo"
                    ? "border-green-500"
                    : event.status === "em-breve"
                    ? "border-amber-500"
                    : "border-gray-300"
                }`}
              >
                <div className="md:flex md:justify-between md:items-start">
                  <div className="mb-4 md:mb-0 md:w-2/3">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold text-amber-900 mr-3">
                        {event.title}
                      </h3>
                      {event.status === "acontecendo" && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          ACONTECENDO AGORA
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-amber-700 mb-3">
                      <div className="flex items-center">
                        <CalendarDays className="mr-1" size={16} />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1" size={16} />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1" size={16} />
                        {event.location}
                      </div>
                    </div>

                    <p className="text-amber-800">{event.description}</p>
                  </div>

                  <div className="md:w-1/3 md:pl-6">
                    <div className="relative h-40 md:h-32 w-full">
                      <Image
                        src={event.imageUrl}
                        alt={event.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="mt-16 bg-amber-100 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-amber-900 mb-3">
            Receba as novidades no seu e-mail
          </h3>
          <p className="text-amber-800 mb-6 max-w-2xl mx-auto">
            Cadastre-se para receber atualizações sobre eventos, notícias e
            atrações turísticas de Almenara.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-grow px-4 py-3 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition"
            >
              Cadastrar
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Eventos;
