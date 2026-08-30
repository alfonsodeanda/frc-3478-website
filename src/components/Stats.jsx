export default function Stats() {
  const statsData = [
    { number: "2010", label: "Founded" },
    { number: "11", label: "Event Wins" },
    { number: "65+", label: "Awards Won" },
    { number: "10,300+", label: "People Impacted" },
  ];

  return (
    <section className="w-full min-h-[250px] py-12 md:py-0 bg-[#172B6A] flex items-center justify-center">
      
      {/* Inner Container */}
      <div className="max-w-[1000px] w-full px-6">
        
        {/* Grid Frame */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-[#EEF1FB]">
          
          {statsData.map((stat, index) => (
            <div 
              key={index}
              /* - group: Allows child elements to react when hovering the box
                - hover:bg-white/5: Adds a soft, subtle white overlay tint on hover
                - transition-colors: Smooth background transition
              */
              className={`w-full min-h-[120px] px-6 py-4 flex flex-col justify-center cursor-default group transition-colors duration-300 hover:bg-white/5 ${
                /* Responsive border logic */
                index % 2 === 0 ? "border-r" : ""
              } ${
                index < 2 ? "border-b md:border-b-0" : ""
              } ${
                index < 3 ? "md:border-r" : ""
              } border-[#EEF1FB]`}
            >
              {/* Stat Number */}
              <h3 className="font-bebas text-[40px] md:text-[64px] leading-[1.1] text-[#EEF1FB]/80 group-hover:text-[#EEF1FB] transition-all duration-300 origin-left">
                {stat.number}
              </h3>

              {/* Stat Label */}
              <p className="font-montserrat text-[14px] md:text-[16px] leading-[1.5] text-[#EEF1FB]/70 group-hover:text-[#EEF1FB] transition-colors duration-300">
                {stat.label}
              </p> 
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}