import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  // Step 1: Set up state to track the selected item
  const [selected, setSelected] = useState("Beranda");
  const { t } = useTranslation();

  return (
    <div className="navbar_container hidden shadow-lg shadow-neutral-400 xl:block">
      {/* Step 3: Conditionally apply 'selected_nav_item' based on selected state */}
      <a
        className={`navbar_item ${selected === "Beranda" ? "selected_nav_item" : ""}`}
        href="#home"
        onClick={() => setSelected("Beranda")} // Step 2: Update state on click
      >
        {t("Home")}
      </a>

      <a
        className={`navbar_item ${selected === "Tentang" ? "selected_nav_item" : ""}`}
        href="#about"
        onClick={() => setSelected("Tentang")}
      >
        {t("About")}
      </a>

      <a
        className={`navbar_item ${selected === "Fitur" ? "selected_nav_item" : ""}`}
        href="#features"
        onClick={() => setSelected("Fitur")}
      >
        {t("Features")}
      </a>

      <a
        className={`navbar_item ${selected === "Unduh" ? "selected_nav_item" : ""}`}
        href="#download"
        onClick={() => setSelected("Unduh")}
      >
        {t("Download")}
      </a>
    </div>
  );
}
