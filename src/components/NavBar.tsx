import Logo from "@/assets/smilearn_full_logo.png";
import { Link } from "react-router-dom";
import LangDropdown from "./LanguageDropdown";

export default function NavBar() {
  return (
    <div className="flex h-[80px] w-full items-center justify-center shadow-lg">
      <nav className="mx-auto flex w-full max-w-[1240px] items-center justify-between">
        <div>
          <img src={Logo} alt="semilearn logo" className="h-[40px]" />
        </div>
        <ul className="flex items-center">
          <li>
            <Link to="/" className="">
              Home
            </Link>
          </li>
        </ul>
        <LangDropdown />
        <div></div>
      </nav>
    </div>
  );
}
