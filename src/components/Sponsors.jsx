import sponsor1 from "../assets/sponsors/gm-logo.png";
import sponsor2 from "../assets/sponsors/gm-logo.png";
import sponsor3 from "../assets/sponsors/gm-logo.png";
import sponsor4 from "../assets/sponsors/gm-logo.png";
import sponsor5 from "../assets/sponsors/gm-logo.png";
import sponsor6 from "../assets/sponsors/gm-logo.png";
import sponsor7 from "../assets/sponsors/gm-logo.png";
import sponsor8 from "../assets/sponsors/gm-logo.png";

export default function Sponsors() {
    const sponsors = [
        { name: "Sponsor 1", logo: sponsor1 },
        { name: "Sponsor 2", logo: sponsor2 },
        { name: "Sponsor 3", logo: sponsor3 },
        { name: "Sponsor 4", logo: sponsor4 },
        { name: "Sponsor 5", logo: sponsor5 },
        { name: "Sponsor 6", logo: sponsor6 },
        { name: "Sponsor 7", logo: sponsor7 },
        { name: "Sponsor 8", logo: sponsor8 },
    ];

    return (
        <section className="w-full h-[500px] flex items-center justify-center">
            
            {/* container */}
            <div className="max-w-[1000px] w-full px-6 flex-col justify-center gap-[25px]">

                <h2 className="font-bebas text-[40px] leading-[1.2] text-[#172B6A] uppercase">
                    Our Sponsors
                </h2>

                {/* 4x2 GRID CONTAINER (300px total height, 5px gap) */}
                <div className="w-full h-[300px] grid grid-cols-4 grid-rows-2 gap-[5px]">
                
                {sponsors.map((sponsor, index) => (
                    <div 
                    key={index} 
                    /* Custom Blue Box with centered contents */
                    className="w-full h-full bg-[#172B6A] p-6 flex items-center justify-center"
                    >
                    <img 
                        src={sponsor.logo} 
                        alt={sponsor.name} 
                        /* Max height & width constraints keep logo within the box safely */
                        className="max-h-full max-w-full object-contain filter brightness-0 invert" 
                    />
                    </div>
                ))}

                </div>
            </div>
        </section>
    );
}