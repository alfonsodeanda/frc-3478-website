import heroImage from "../assets/hero-image.png";

export default function Hero() {
    return (
        <section className="w-full h-[550px] flex items-center justify-center">
            
            {/* hero section */}
            <div className="max-w-[1000px] w-full px-6 flex items-center justify-center gap-[150px]">

                {/* hero text */}
                <div className="flex-1 flex flex-col justify-center gap-[25px]">
                    <h1 className="font-bebas text-[64px] leading-[1.1] text-[#172B6A] uppercase" style={{ WebkitTextStroke: '2px #172B6A' }}>
                        Victory Goes <span className="text-transparent">Beyond Winning</span>
                    </h1>

                    <p className="font-montserrat text-[18px] leading-[1.6] text-[#010512]">
                        For 16 years, we have competed at the highest global level, using robotics to transform communities, inspire youth, and build the future of STEM in Mexico and Latin America.
                    </p>
                </div>

                {/* hero image */}
                <div className="flex-1 flex-col items-center gap-5">
                    <img src={heroImage} alt="LamBot 3478 Team Celebrating" className="w-full h-auto object-cover" />
                    <p className="font-montserrat text-[16px] leading-[1.5] text-[#010512] text-center">
                        2025 FIRST Championship Curie Division Winners
                    </p>
                </div>

            </div>
        </section>
    );
}