type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: "evento" | "noticia" | "cultural";
  imageUrl: string;
  author: string;
  slug: string;
};

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  status: "em-breve" | "acontecendo" | "encerrado";
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Festival de Cultura Popular 2024",
    excerpt:
      "Confira como foi o primeiro dia do tradicional festival que reúne artistas de toda a região",
    date: "15/10/2024",
    category: "evento",
    imageUrl: "/festival-cultural.jpg",
    author: "Secretaria de Turismo",
    slug: "festival-cultural-2024",
  },
  {
    id: "2",
    title: "Nova Exposição no Memorial do Vale",
    excerpt:
      'Mostra "Cerâmica Contemporânea" traz peças de 15 artesãos do Jequitinhonha',
    date: "05/10/2024",
    category: "cultural",
    imageUrl: "/exposicao-ceramica.jpg",
    author: "Memorial do Vale",
    slug: "exposicao-ceramica",
  },
  {
    id: "3",
    title: "Almenara recebe investimento em turismo",
    excerpt:
      "Prefeitura anuncia novo projeto de revitalização do centro histórico",
    date: "28/09/2024",
    category: "noticia",
    imageUrl: "/centro-historico.jpg",
    author: "Prefeitura Municipal",
    slug: "investimento-turismo",
  },
];

export const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Festa de Nossa Senhora do Rosário",
    date: "20/10/2024",
    time: "08:00 - 22:00",
    location: "Praça da Matriz",
    description:
      "Tradicional festa religiosa com procissão, barraquinhas e shows",
    imageUrl: "/festa-nossa-senhora.jpg",
    status: "em-breve",
  },
  {
    id: "2",
    title: "Feira de Artesanato do Vale",
    date: "12/10/2024 - 15/10/2024",
    time: "09:00 - 18:00",
    location: "Centro de Convenções",
    description:
      "Maior exposição de artesanato da região com mais de 50 expositores",
    imageUrl: "/feira-artesanato.jpg",
    status: "acontecendo",
  },
  {
    id: "3",
    title: "Semana do Folclore",
    date: "22/08/2024 - 25/08/2024",
    time: "14:00 - 21:00",
    location: "Vários locais",
    description:
      "Celebração das tradições folclóricas com apresentações de dança e música",
    imageUrl: "/semana-folclore.jpg",
    status: "encerrado",
  },
];
