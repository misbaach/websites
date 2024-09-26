import Logo from "@/assets/smilearn_full_logo.png";
import { Link } from "react-router-dom";
import LangDropdown from "./LanguageDropdown";
import MENU_LIST from "@/utils/MENU_LIST";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const { pathname } = useLocation();

  return (
    <div className="flex h-[80px] w-full items-center justify-center shadow-lg">
      <nav className="mx-auto flex w-full max-w-[1240px] items-center justify-between">
        <div>
          <img src={Logo} alt="semilearn logo" className="h-[40px]" />
        </div>
        <ul className="flex items-center gap-3">
          {MENU_LIST.map((item, index) => {
            return (
              <li key={index} className="">
                <Link
                  to={item.path}
                  className={`rounded-md px-3 py-2 text-lg font-semibold hover:bg-gray-100 ${pathname === item.path ? "learn-color" : "text-gray-900"}`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <LangDropdown />
        <div></div>
      </nav>
    </div>
  );
}
