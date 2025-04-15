"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Destaque = {
  id: string;
  titulo: string;
  icone: string;
  imagens: { src: string; alt: string; desc?: string }[];
  descricao: string;
  detalhes: string[];
};

export default function DestaquesSection() {
  const [destaqueAtivo, setDestaqueAtivo] = useState<string>("ceramica");
  const [isLoading, setIsLoading] = useState(true);

  const destaques: Destaque[] = [
    {
      id: "ceramica",
      titulo: "Cerâmica Artesanal",
      icone: "🏺",
      imagens: [
        {
          src: "/Ceramica1.jpg",
          alt: "Peças de barro tradicionais",
          desc: "Técnicas ancestrais de modelagem e queima",
        },
        {
          src: "/Ceramica2.jpeg",
          alt: "Artesã trabalhando no torno",
          desc: "Tradição passada de geração em geração",
        },
      ],
      descricao:
        "A cerâmica de Almenara é uma das expressões culturais mais autênticas do Vale do Jequitinhonha.",
      detalhes: [
        "Matérias-primas extraídas das margens do Rio Jequitinhonha",
        "Processo artesanal desde a coleta do barro até a queima",
        "Peças utilitárias e decorativas com identidade cultural",
        "Exposições permanentes na Casa do Artesão",
      ],
    },
    {
      id: "rio",
      titulo: "Rio Jequitinhonha",
      icone: "🌊",
      imagens: [
        {
          src: "/PonteAlmenara.jpeg",
          alt: "Ponte sobre o Rio Jequitinhonha",
          desc: "Ponto de conexão entre regiões do Vale",
        },
        {
          src: "/RioJequitinhonha.jpg",
          alt: "Paisagem do rio ao entardecer",
          desc: "Cenário de paz e beleza natural",
        },
      ],
      descricao:
        "O Rio Jequitinhonha é o coração do Vale, fonte de vida, cultura e inspiração.",
      detalhes: [
        "Importante para transporte, pesca e lazer",
        "Inspiração para obras de arte e músicas regionais",
        "Cenário de eventos culturais e festas",
        "Patrimônio natural de Minas Gerais",
      ],
    },
    {
      id: "castelo",
      titulo: "Castelo de Almenara",
      icone: "🏰",
      imagens: [
        {
          src: "/CasteloAlemanara.jpg",
          alt: "Castelo de Almenara",
          desc: "Construção histórica da década de 1960",
        },
        {
          src: "/CasteloInterior.jpg",
          alt: "Interior do Castelo",
          desc: "Salões preservados com móveis antigos",
        },
      ],
      descricao:
        "O Castelo é um dos símbolos arquitetônicos de Almenara, carregando memórias e histórias locais.",
      detalhes: [
        "Construção com influência europeia",
        "Ponto turístico e de visitação guiada",
        "Cenário para fotos e eventos culturais",
        "Tombado como patrimônio local",
      ],
    },
    {
      id: "culinaria",
      titulo: "Culinária Típica",
      icone: "🍲",
      imagens: [
        {
          src: "/Culinaria1.jpg",
          alt: "Prato típico mineiro",
          desc: "Feijão tropeiro, carne de sol e angu",
        },
        {
          src: "/Culinaria2.jpg",
          alt: "Doces caseiros",
          desc: "Rapadura, doce de leite e compotas",
        },
      ],
      descricao:
        "Os sabores de Almenara revelam a alma do sertão mineiro, com pratos feitos com carinho e tradição.",
      detalhes: [
        "Ingredientes locais e receitas de família",
        "Restaurantes e feiras gastronômicas",
        "Doces artesanais premiados",
        "Influência da cultura quilombola e indígena",
      ],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const destaqueSelecionado = destaques.find((d) => d.id === destaqueAtivo);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16" id="destaques">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-3">
          Explore Nossa <span className="text-amber-600">Cultura</span>
        </h2>
        <p className="text-amber-700 max-w-3xl mx-auto text-lg">
          Conheça em profundidade as riquezas que fazem de Almenara um destino
          único
        </p>
      </div>

      {/* Abas de navegação */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {destaques.map((destaque) => (
          <button
            key={destaque.id}
            onClick={() => setDestaqueAtivo(destaque.id)}
            className={`flex items-center px-5 py-3 rounded-full transition-all text-sm md:text-base ${
              destaqueAtivo === destaque.id
                ? "bg-amber-600 text-white shadow-md"
                : "bg-white text-amber-800 hover:bg-amber-100 border border-amber-200"
            }`}
          >
            <span className="mr-2 text-lg">{destaque.icone}</span>
            {destaque.titulo}
          </button>
        ))}
      </div>

      {/* Conteúdo dinâmico */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center items-center h-64"
          >
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-amber-600 border-opacity-50"></div>
          </motion.div>
        ) : (
          destaqueSelecionado && (
            <motion.div
              key={destaqueAtivo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-200"
            >
              {/* Galeria */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {destaqueSelecionado.imagens.map((imagem, index) => (
                  <div key={index} className="relative h-64 md:h-96">
                    <Image
                      src={imagem.src}
                      alt={imagem.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6">
                      <div>
                        <p className="text-white text-sm font-medium">
                          {imagem.alt}
                        </p>
                        {imagem.desc && (
                          <p className="text-amber-100 text-xs mt-1">
                            {imagem.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Descrição */}
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-3">
                    {destaqueSelecionado.titulo}
                  </h3>
                  <p className="text-amber-800 leading-relaxed">
                    {destaqueSelecionado.descricao}
                  </p>
                </div>

                {/* Detalhes */}
                <div className="bg-amber-50/50 p-5 rounded-lg border border-amber-100">
                  <h4 className="text-lg font-semibold text-amber-700 mb-3">
                    Características Principais
                  </h4>
                  <ul className="space-y-2">
                    {destaqueSelecionado.detalhes.map((detalhe, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-amber-600 mr-2 mt-1">•</span>
                        <span className="text-amber-800">{detalhe}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
}
