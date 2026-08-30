export default function Footer() {
    return (
        <footer className="w-full h-[80px] py-6 flex justify-center items-center mt-auto">
            
            {/* container */}
            <div className="max-w-[1000px] w-full px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="font-montserrat text-[12px] leading-[1.5] text-[#010512]/70">
                    © {new Date().getFullYear()} LamBot 3478
                </p>

                <div className="flex items-center gap-4">
                    {/* Facebook */}
                    <a 
                        href="https://www.facebook.com/TeamLamBot3478/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="opacity-80 hover:opacity-100 transition-opacity"
                        aria-label="Facebook"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
                            <path fill="#172b6a" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                        </svg>
                    </a>
                    
                    {/* Instagram */}
                    <a 
                        href="https://instagram.com/lambot3478" 
                        target="_blank" 
                        rel="noreferrer"
                        className="opacity-80 hover:opacity-100 transition-opacity"
                        aria-label="Instagram"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
                            <path fill="#172b6a" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                        </svg>
                    </a>

                    {/* YouTube */}
                    <a 
                        href="https://www.youtube.com/@TeamLamBot3478" 
                        target="_blank" 
                        rel="noreferrer"
                        className="opacity-80 hover:opacity-100 transition-opacity"
                        aria-label="YouTube"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
                            <path fill="#172b6a" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"></path>
                        </svg>
                    </a>

                    {/* The Blue Alliance */}
                    <a 
                        href="https://www.thebluealliance.com/team/3478" 
                        target="_blank" 
                        rel="noreferrer"
                        className="opacity-80 hover:opacity-100 transition-opacity"
                        aria-label="The Blue Alliance"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 48 48">
                            <path fill="none" stroke="#172b6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M15.055 14.66v19.895m17.89-19.895v19.895m-17.89 0A8.945 8.945 0 0 0 24 43.5h0m8.945-8.945A8.945 8.945 0 0 1 24 43.5m0-28.824V43.5m-8.945-10.018h17.89m-17.89-10.019h17.89M12.55 4.5h22.9c.793 0 1.43.638 1.43 1.431v7.156c0 .793-.638 1.431-1.43 1.431h-22.9a1.43 1.43 0 0 1-1.43-1.43V5.93c0-.793.638-1.431 1.43-1.431"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}