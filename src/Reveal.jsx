import Reveal from "./Reveal";

export default function Home() {
  return (
    <>
      <Reveal>
        <section className="hero">Hero Section</section>
      </Reveal>

      <Reveal>
        <section className="about">About Section</section>
      </Reveal>

      <Reveal>
        <section className="services">Services Section</section>
      </Reveal>
    </>
  );
}
