import { SERVICES_CONTENT } from "../constants";

const Service = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id="services">
      <div className="my-20">
        <h1 className="text-xl lg:text-3xl text-cyan-300 tracking-tight text-center uppercase mb-20">
          Your one-stop shop for hygienic beef (Cow, Ram, Goat) and
          local snacks such as Donkwa and Kulikuli
        </h1>

        {SERVICES_CONTENT.content.map((service, index) => (
          <div
            key={service.id}
            className="mb-12 mx-4 flex flex-col lg:flex-row items-center gap-8"
          >
            {/* Image */}
            <div
              className={`lg:w-1/2 ${
                index % 2 !== 0 ? "lg:order-2" : ""
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Text */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
