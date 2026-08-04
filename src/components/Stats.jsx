export default function Stats() {
    return (
        <section className="w-full h-[250px] bg-[#172B6A] flex items-center justify-center">
            
            {/* container */}
            <div className="max-w-[1000px] w-full px-6 flex items-center justify-center">
                {/* Box 1 */}
                <div className="w-full h-[120px] px-6 py-4 border border-[#EEF1FB] flex flex-col justify-center">
                    <h1 className="font-bebas text-[64px] leading-[1.1] text-[#EEF1FB]">2010</h1>
                    <p className="font-montserrat text-[16px] leading-[1.5] text-[#EEF1FB]">Founded</p> 
                </div>
                {/* Box 2 */}
                <div className="w-full h-[120px] px-6 py-4 border border-[#EEF1FB] flex flex-col justify-center">
                    <h1 className="font-bebas text-[64px] leading-[1.1] text-[#EEF1FB]">11</h1>
                    <p className="font-montserrat text-[16px] leading-[1.5] text-[#EEF1FB]">Event Wins</p>
                </div>
                {/* Box 3 */}
                <div className="w-full h-[120px] px-6 py-4 border border-[#EEF1FB] flex flex-col justify-center">
                    <h1 className="font-bebas text-[64px] leading-[1.1] text-[#EEF1FB]">65+</h1>
                    <p className="font-montserrat text-[16px] leading-[1.5] text-[#EEF1FB]">Awards Won</p> 
                </div>
                {/* Box 4 */}
                <div className="w-full h-[120px] px-6 py-4 border border-[#EEF1FB] flex flex-col justify-center">
                    <h1 className="font-bebas text-[64px] leading-[1.1] text-[#EEF1FB]">10,300+</h1>
                    <p className="font-montserrat text-[16px] leading-[1.5] text-[#EEF1FB]">People Impacted</p> 
                </div>
            </div>
        </section>
    );
}