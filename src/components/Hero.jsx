import heroImage from "../assets/hero-image.png";

export default function Hero() {
    return (
        <section className="w-full min-h-[550px] py-12 flex items-center justify-center animate-fade-in">
            
            {/* hero section */}
            <div className="max-w-[1000px] w-full px-6 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-[150px]">

                {/* hero text */}
                <div className="flex-1 flex flex-col justify-center gap-[25px]">
                    <h1 className="font-bebas text-[50px] md:text-[64px] leading-[1.1] text-[#172B6A] uppercase" style={{ WebkitTextStroke: '0.03em #172B6A' }}>
                        Victory Goes <span className="block text-transparent">Beyond Winning</span>
                    </h1>

                    <p className="font-montserrat text-[16px] md:text-[18px] leading-[1.6] text-[#010512]">
                        For 16 years, we have competed at the highest global level, using robotics to transform communities, inspire youth, and build the future of STEM in Mexico and Latin America.
                    </p>
                </div>

                {/* hero image */}
                <div className="flex-1 flex-col items-center gap-5 w-full">
                    <img src={heroImage} alt="LamBot 3478 Team Celebrating" className="w-full h-auto object-cover" />
                    <p className="font-montserrat text-[12px] md:text-[14px] leading-[1.5] text-[#010512] text-start">
                        2025 FIRST Championship Curie Division Winners
                    </p>
                </div>

            </div>
        </section>
    );
}