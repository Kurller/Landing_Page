import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 border-t-2" id="contact">
      <h2 className="text-2xl lg:text-4xl text-center uppercase font-bold mb-12">
        Contact Us
      </h2>

      <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center gap-8">
        {/* Address */}
        <div className="flex items-start gap-4">
          <MdLocationOn className="text-3xl text-cyan-500 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Address</h3>
            <p>8B, Mojasola Street, Iyana Ipaja, Lagos</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <MdEmail className="text-3xl text-cyan-500 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p>
              <a href="mailto:baffkointernational@baffko.com" className="hover:underline">
                baffkointernational@baffko.com
              </a>
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <MdPhone className="text-3xl text-cyan-500 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Phone</h3>
            <p>
              <a href="tel:07039400960" className="hover:underline">
                0703 940 0960
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
