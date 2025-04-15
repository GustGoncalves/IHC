import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center text-amber-100 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-2 relative group">
        <h1 className="text-3xl font-bold">
          Farolzinho do <span className="text-amber-400">Vale</span>
        </h1>
        <span className="text-amber-300 text-sm absolute -right-5 -bottom-3 group-hover:rotate-12 transition-transform">
          Almenara-MG
        </span>
      </div>
      <nav className="flex gap-6 items-center text-lg">
        {["Início", "Sobre", "Turismo", "Cultura", "Contato"].map((item) => (
          <Link
            href={item === "Sobre" ? "/about" : "#"}
            key={item}
            className="hover:text-amber-300 transition-colors pb-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-amber-400 after:transition-all"
          >
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
