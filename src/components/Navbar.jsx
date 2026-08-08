import logo from '../assets/logo.svg';

export default function Navbar() {
  return (
    <header className="w-full h-18 md:h-[100px] flex items-center justify-center">
        <div className="max-w-[1000px] w-full px-4 flex justify-start items-center">
          <a href="#">
            <img src={logo} alt="FRC 3478 Logo" className="h-8 md:h-12 w-auto object-contain"/>
          </a>
        </div>
    </header>
  );
}