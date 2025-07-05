import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100 py-8 text-center mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col gap-4">
        <p className="text-lg font-medium">
          Farolzinho do Vale © {new Date().getFullYear()} - Almenara/MG
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.instagram.com/prefeituraalmenara"
            target="_blank"
          >
            <Instagram />
          </a>
          <a href="https://www.facebook.com/valealmenara" target="_blank">
            <Facebook />
          </a>
        </div>
        <p className="text-sm text-amber-300 leading-relaxed">
          Terra de cultura, tradição e belezas naturais
        </p>
      </div>
    </footer>
  );
};

export default Footer;
