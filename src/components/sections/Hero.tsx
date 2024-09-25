import homeGif from "@/assets/home.gif";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="container flex flex-col items-center md:flex-row">
      <div className="pl-10">
        <img src={homeGif} className="md:w-[60svw]" />
      </div>
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-center text-4xl font-extrabold">
          {t("Home Title")} Smi<span className="learn-color">Learn</span>
        </h1>
        <p className="pl-20 pr-20 text-center text-2xl font-semibold">
          Smi<span className="learn-color">Learn</span> {t("Home Content")}
        </p>
      </div>
    </div>
  );
}
