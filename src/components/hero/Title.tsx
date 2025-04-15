const Title = () => {
  return (
    <div className="w-full text-center pb-16 px-4">
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
  );
};

export default Title;
