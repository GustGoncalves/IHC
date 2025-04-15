"use client";

import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main>
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-orange-400 text-center">
          Sobre Nós
        </h1>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Bem-vindo à página Sobre! Aqui você encontrará informações sobre o
          Farolzinho do Vale.
        </p>

        <Image
          src="/Farolv3.jpg"
          alt="Imagem ilustrativa"
          width={800}
          height={600}
          className="w-full h-auto rounded-lg shadow-lg mt-6"
        />
      </div>

      <div className="mt-12 px-4">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-orange-400 text-center">
            Galeria
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "/Farolv2.jpg",
            "/AlmenaraMacro.jpeg",
            "/AlmenaraVisaoCima.jpg",
            "/MemorialCultural.jpg",
          ].map((src, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md aspect-[4/3] relative"
            >
              <Image
                src={src}
                alt={`Imagem ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 mb-20 max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-orange-400 text-center">
          Nossa História
        </h2>
        {[
          "A história do Vale do Jequitinhonha remonta ao século XVI, quando as primeiras expedições exploradoras começaram a desbravar a região em busca de riquezas naturais. Entre elas, destaca-se a expedição de Francisco Bruza Espinosa, que, acompanhada pelo padre jesuíta Aspilcueta Navarro, foi a primeira a explorar as terras do Jequitinhonha. Ao longo dos séculos, a região foi palco de intensas disputas, descobertas de minerais preciosos e confrontos com as tribos indígenas que habitavam o local, como os Pataxós e os Botocudos.",
          "No século XIX, a Coroa Portuguesa intensificou sua presença na região, enviando expedições militares para consolidar o controle territorial. Foi nesse contexto que o Alferes Julião Fernandes Leão Taborda Gato liderou a ocupação de áreas estratégicas, fundando postos de vigia ao longo do Rio Jequitinhonha. Esses postos deram origem a núcleos habitacionais que, com o tempo, se transformaram em cidades como Almenara, Jequitinhonha e Salto da Divisa.",
          "Almenara, cujo nome significa 'farol' em árabe, desempenhou um papel crucial na vigilância e proteção da região. Localizada em uma colina estratégica, a cidade começou como um pequeno posto militar e gradualmente se desenvolveu, atraindo famílias pioneiras e se tornando um importante centro de comércio e agricultura. Hoje, Almenara é um símbolo da rica história e resiliência do Vale do Jequitinhonha.",
          "Durante o século XX, Almenara consolidou-se como um dos principais municípios do Vale do Jequitinhonha, destacando-se pela produção agrícola e pela cultura local. A cidade tornou-se conhecida por sua hospitalidade e pelas festas tradicionais, como a Festa de Nossa Senhora do Rosário e o Festival de Cultura Popular, que celebram as raízes e a diversidade da região.",
          "Atualmente, Almenara é um importante polo regional, com destaque para o turismo ecológico e cultural. A cidade é cercada por belezas naturais, como o Rio Jequitinhonha e as formações rochosas que encantam visitantes e moradores. Além disso, Almenara continua a preservar sua história e tradições, sendo um exemplo de como o passado e o presente podem coexistir em harmonia.",
        ].map((paragraph, index) => (
          <p
            key={index}
            className="mt-4 text-lg text-gray-700 text-justify leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </main>
  );
};

export default About;
