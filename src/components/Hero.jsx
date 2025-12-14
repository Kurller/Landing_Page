import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id="hero">
      <div className="flex flex-col items-center my-20 text-center">
        <h1 className="text-5xl lg:text-bold text-cyan-300 p-2 uppercase font-bold tracking-tighter">
          {HERO_CONTENT.title}
        </h1>
        <p className="lg:mt-6 text-sm mb-4 font-medium tracking-tighter">
          {HERO_CONTENT.subtitle}
        </p>
        {HERO_CONTENT.image && (
          <img
            src={HERO_CONTENT.image}
            alt="Hero"
            className="w-full h-[65vh] object-cover rounded-2xl p-2"
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
