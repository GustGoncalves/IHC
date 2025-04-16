const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100 py-8 text-center mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <p className="mb-4 text-lg font-medium">
          Farolzinho do Vale © {new Date().getFullYear()} - Almenara/MG
        </p>
        <p className="text-sm text-amber-300 leading-relaxed">
          Terra de cultura, tradição e belezas naturais
        </p>
      </div>
    </footer>
  );
};

export default Footer;
