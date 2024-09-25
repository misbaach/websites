import { useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import LangDropdown from "./LanguageDropdown";

const SideBar = () => {
  const { t } = useTranslation();
  const [isOpened, setIsOpened] = useState(false);

  const toggleSideBar = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="xl:hidden">
      <Icon
        onClick={toggleSideBar}
        icon="material-symbols:menu-rounded"
        className="text-5xl"
      />
      <div
        className={`${isOpened ? "absolute" : "hidden"} left-0 top-0 h-[100svh] w-full bg-black opacity-50`}
        onClick={toggleSideBar}
      />
      <div
        className={`${isOpened ? "absolute" : "hidden"} right-0 top-0 flex h-[100svh] w-1/2 flex-col gap-5 bg-white p-5 font-bold`}
      >
        <div className="flex justify-between">
          <LangDropdown />
          <Icon
            onClick={toggleSideBar}
            icon="material-symbols:close-rounded"
            className="self-end text-5xl"
          />
        </div>
        <a onClick={toggleSideBar} href="#home" className="hover:text-pink-600">
          {t("Home")}
        </a>
        <a
          onClick={toggleSideBar}
          href="#about"
          className="hover:text-pink-600"
        >
          {t("About")}
        </a>
        <a
          onClick={toggleSideBar}
          href="#features"
          className="hover:text-pink-600"
        >
          {t("Features")}
        </a>
        <a
          onClick={toggleSideBar}
          href="#download"
          className="hover:text-pink-600"
        >
          {t("Download")}
        </a>
      </div>
    </div>
  );
};

export default SideBar;
