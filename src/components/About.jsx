import AboutImage from "../assets/About.webp"
const About = ()=>{
    return (
        <section className="max-w-7xl mx-auto border-b-2" id="about">
            <h1 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4">
             About
            </h1>
            <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
            <div className="mb-8 lg:mb-0">
                <img src={AboutImage} alt="Baffko Cow" className="w-full h-auto"/>

            </div>
            <p className="text-lg lg:text-3xl font-light text-center lg:text-left mx-auto mt-8 max-w-5xl">
              We are committed to the supply of clean, hygienic, and halal-processed beef, goat meat, and ram meat, prepared with care and responsibility. Alongside our meat products, we produce Kulikuli and Donkwa in bulk, maintaining high standards of cleanliness and quality. Our operations are guided by honesty, proper handling, and a dedication to serving our customers with safe and wholesome food.
            </p>
            </div>


        </section>
    )
}
export default About