import DestaquesSection from "@/components/destaquesSection.tsx/DestaqueSection";
import CarrosselAlmenara from "@/components/hero/CarroselAlmenara";
import Title from "@/components/hero/Title";

const HomePage = () => {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-amber-200">
      <Title />
      <CarrosselAlmenara />
      <DestaquesSection />
    </section>
  );
};

export default HomePage;
