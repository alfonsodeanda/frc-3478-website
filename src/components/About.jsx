import robotImage from "../assets/robot-image.png";

export default function About() {
    return (
        <section className="w-full min-h-[400px] py-12 flex items-center justify-center">
            
            {/* about section */}
            <div className="max-w-[1000px] w-full px-6 flex items-center justify-center gap-[150px]">

                {/* about image */}
                <div className="flex-1 min-w-0">
                    <img src={robotImage} alt="Our 2026 Season Robot" className="w-full h-auto object-contain" />
                </div>
                {/* about text */}
                <div className="flex-1 flex flex-col justify-center gap-[25px]">
                    <h2 className="font-bebas text-[40px] leading-[1.2] text-[#172B6A] uppercase">
                        About Us
                    </h2>

                    <p className="font-montserrat text-[16px] leading-[1.6] text-[#010512]">
                        LamBot 3478 is a high school robotics team from Tec de Monterrey campus San Luis Potosí, with a 16-season legacy competing at the highest global tier of the FIRST Robotics Competition. Our organization is divided into two executive pillars: Engineering (specializing in 3D CAD modeling, mechanics, control systems, and strategy) and Community & Business Strategy (managing corporate relations, branding, and social development projects).
                    </p>
                </div>

            </div>
        </section>
    );
}