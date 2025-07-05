type Destaque = {
  id: string;
  titulo: string;
  icone: string;
  imagens: { src: string; alt: string; desc?: string }[];
  descricao: string;
  detalhes: string[];
};

export const destaques: Destaque[] = [
  {
    id: "ceramica",
    titulo: "Cerâmica Artesanal do Vale",
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
      "A cerâmica de Almenara é uma manifestação viva da resistência cultural do Vale do Jequitinhonha. Cada peça conta histórias através de suas formas e texturas, moldadas por mãos que carregam saberes centenários. Reconhecida nacionalmente, essa arte transforma o barro vermelho do rio em verdadeiras obras-primas que misturam utilidade e beleza.",
    detalhes: [
      "Matérias-primas extraídas manualmente das margens do Rio Jequitinhonha, seguindo métodos tradicionais de preparação",
      "Processo completo artesanal: desde a coleta do barro até a queima em fornos à lenha, técnica que confere cores únicas às peças",
      "Diversidade de peças: desde utensílios domésticos (panelas, potes e moringas) até esculturas narrativas que retratam o cotidiano do sertão",
      "As 'Noivas do Jequitinhonha', esculturas emblemáticas que simbolizam a força da mulher sertaneja, são ícones dessa produção",
      "Visitação: Oficinas abertas na Casa do Artesão onde é possível observar o processo criativo e adquirir peças diretamente dos artistas",
    ],
  },
  {
    id: "rio",
    titulo: "Rio Jequitinhonha: Veia da Vida",
    icone: "🌊",
    imagens: [
      {
        src: "/PonteAlmenara.jpeg",
        alt: "Ponte sobre o Rio Jequitinhonha",
        desc: "Marco histórico que conecta comunidades",
      },
      {
        src: "/RioJequitinhonha.webp",
        alt: "Paisagem do rio ao entardecer",
        desc: "Espelho d'água que reflete a cultura do Vale",
      },
    ],
    descricao:
      "Mais que um curso d'água, o Jequitinhonha é o eixo central da identidade regional. Seu leito serpentear guarda memórias de navegação comercial no século XIX, sustenta comunidades ribeirinhas e inspira poetas. Nas cheias e vazantes do rio, se revela o pulsar cíclico da vida sertaneja, fonte inesgotável de histórias e tradições.",
    detalhes: [
      "Cenário da Festa de Navegadores, celebração que rememora a época áurea das monções e barcos a vapor",
      "Ecossistema único: habitat de espécies como o surubim e o dourado, além de aves migratórias",
      "Praias fluviais como a do Sítio, que se formam na seca, transformando-se em áreas de lazer comunitário",
      "Importância histórica: rota de tropeiros e viajantes no período colonial, com registros desde o século XVIII",
      "Patrimônio imaterial: inspiração para o cancioneiro popular, como na obra 'Cio da Terra' de Chico Buarque e Milton Nascimento",
    ],
  },
  {
    id: "castelo",
    titulo: "Castelo de Almenara: Torre da Memória",
    icone: "🏰",
    imagens: [
      {
        src: "/CasteloAlmenara.jpg",
        alt: "Castelo de Almenara",
        desc: "Sentinela de pedra sobre a paisagem sertaneja",
      },
      {
        src: "/CasteloAlmenara2.jpg",
        alt: "Castelo de Almenara",
        desc: "Varandas com vista panorâmica do Vale",
      },
    ],
    descricao:
      "Erguido como sonho particular na década de 1960, o Castelo de Almenara transformou-se em símbolo da cidade. Suas torres neogóticas emergem do sertão como um conto de fadas mineiro, abrigando hoje histórias coletivas. Daqui se avista o encontro do urbano com o rural, testemunhando a transformação da região ao longo das décadas.",
    detalhes: [
      "Arquitetura singular: mistura estilos medievais europeus com adaptações ao clima semiárido",
      "Construído com pedras extraídas localmente e madeira de lei, utilizando técnicas artesanais",
      "Ponto estratégico: localizado no alto da cidade, oferece vista de 360° da região",
      "Cenário cultural: palco do Festival de Inverno, saraus literários e exposições de arte",
      "Lenda local: dizem que suas paredes guardam segredos de amor e saudade do idealizador",
    ],
  },
  {
    id: "culinaria",
    titulo: "Sabores do Sertão Mineiro",
    icone: "🍲",
    imagens: [
      {
        src: "/FeijaoTropeiro.jpg",
        alt: "Prato típico mineiro",
        desc: "Feijão tropeiro - sustento e tradição",
      },
      {
        src: "/Cocada.jpg",
        alt: "Doces caseiros",
        desc: "Cocadas artesanais - doçura resistente",
      },
    ],
    descricao:
      "A culinária almenarense é um patrimônio gustativo onde se misturam influências indígenas, africanas e portuguesas. Cada receita guarda segredos de resistência, transformando ingredientes simples em explosões de sabor. Das panelas de barro às travessas de madeira, a comida aqui é ritual de acolhimento e celebração da vida sertaneja.",
    detalhes: [
      "Ingredientes-símbolo: farinha de mandioca artesanal, carne-seca ao sol e temperos como o coentro-verdadeiro",
      "Pratos emblemáticos: além do feijão tropeiro, destaque para o frango com quiabo e o arroz com pequi",
      "Doces tradicionais: cocada em folha de bananeira, doce de leite em tacho de cobre e ambrosia de laranja-da-terra",
      "Festival anual: 'Sabor do Vale' reúne cozinheiras tradicionais em competição saudável de receitas centenárias",
      "Técnicas preservadas: uso de fogão à lenha, utensílios de barro e métodos lentos de preparo",
    ],
  },
];
