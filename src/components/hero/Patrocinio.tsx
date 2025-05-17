import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import AlemanraFlorescendo from "../../../public/AlmenaraFlorescendo.jpg";

const Patrocionio = () => {
  return (
    <main className="max-w-7xl mx-auto px-4">
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
          <CalendarDays className="mr-2" /> Evento em Destaque
        </h2>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-200">
          <div className="md:flex">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image
                src={AlemanraFlorescendo}
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
                  1-11 de maio, 2025
                </span>
              </div>

              <h3 className="text-2xl font-bold text-amber-900 mb-3">
                Almenara Florescendo
              </h3>

              <div className="flex items-center text-amber-700 mb-4">
                <MapPin className="mr-1" size={18} />
                <span>Praça DR.Hélio Rocha Guimarães</span>
              </div>

              <p className="text-amber-800 mb-6">
                ALMENARA FLORESCENDO, está se aproximando, trazendo cores,
                encantos e a celebração da união em nossa comunidade. Sigamos
                juntos, com fé no coração e o perfume das flores guiando nossos
                passos, para fazer desse encontro algo verdadeiramente especial.
                Que sua manhã seja repleta de luz e inspiração! 5ª edição da
                Feira de Flores de Holambra em Almenara, de 1º a 11 de maio de
                2025, das 08h às 21h , na Praça Dr. Hélio Rocha Guimarães,
                Almenara-MG.
              </p>

              <a
                href="https://maps.app.goo.gl/R7t7qyeANGBLLUkz9"
                target="_blank"
              >
                <button className="border border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-2 rounded-full transition cursor-pointer">
                  Como Chegar
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Patrocionio;
