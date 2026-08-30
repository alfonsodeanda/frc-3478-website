import sponsor1 from "../assets/sponsors/gm-logo.png";
import sponsor2 from "../assets/sponsors/cummins-logo.png";
import sponsor3 from "../assets/sponsors/bosch-logo.png";
import sponsor4 from "../assets/sponsors/artepisa-logo.webp";
import sponsor5 from "../assets/sponsors/wcp-logo.avif";
import sponsor6 from "../assets/sponsors/ars-logo.png";
import sponsor7 from "../assets/sponsors/ram-logo.png";
import sponsor8 from "../assets/sponsors/m2d-logo.webp";

export default function Sponsors() {
  const sponsors = [
    { name: "General Motors", logo: sponsor1, url: "https://www.gm.com.mx" },
    { name: "Cummins", logo: sponsor2, url: "https://www.cummins.com" },
    { name: "Bosch", logo: sponsor3, url: "https://www.bosch.com.mx" },
    { name: "Artepisa", logo: sponsor4, url: "https://www.artepisa.com/" },
    { name: "WestCoast Products", logo: sponsor5, url: "https://wcproducts.com" },
    { name: "ARS", logo: sponsor6, url: "https://ars-automation.com/mx" },
    { name: "RAM", logo: sponsor7, url: "https://ramsolutions.com.mx" },
    { name: "M2D", logo: sponsor8, url: "https://m2d.mx" },
  ];

  return (
    <section className="w-full min-h-[500px] py-12 flex items-center justify-center">
      
      {/* Container */}
      <div className="max-w-[1000px] w-full px-6 flex flex-col justify-center gap-[25px]">

        <h2 className="font-bebas text-[32px] md:text-[40px] leading-[1.2] text-[#172B6A] uppercase">
          Our Sponsors
        </h2>

        {/* Grid Container */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[5px]">
          {sponsors.map((sponsor, index) => (
            <a 
              key={index} 
              href={sponsor.url}
              target="_blank"
              rel="noreferrer"
              className="w-full h-[130px] bg-[#172B6A] p-8 flex items-center justify-center group transition-colors duration-300"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                /* - opacity-60: Default lower opacity (translucent)
                   - group-hover:opacity-100: Reaches full brightness on hover
                   - group-hover:scale-105: Smooth subtle zoom effect on hover
                */
                className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" 
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}