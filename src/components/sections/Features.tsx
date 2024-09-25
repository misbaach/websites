import mockup1 from "@/assets/mockup_1.png";
import mockup2 from "@/assets/mockup_2.png";
import { useTranslation } from "react-i18next";

export default function Features() {
  const { t } = useTranslation();

  return (
    <>
      <div className="mt-5 pt-20">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="bg-mockup self-center pb-20 pt-20 md:ml-20 md:rounded-bl-[100px] md:rounded-tr-[100px]">
            <h1 className="text-center text-4xl font-extrabold">
              {t("Feature Title 1")}
            </h1>
            <br></br>
            <p className="pl-20 pr-20 text-center text-2xl font-semibold">
              {t("Feature Content 1.1")}
            </p>
            <br></br>
            <p className="pl-20 pr-20 text-center text-2xl font-semibold">
              {t("Feature Content 1.2")}
            </p>
            <br></br>
            <p className="pl-20 pr-20 text-center text-2xl font-semibold">
              {t("Feature Content 1.3")}
            </p>
          </div>
          <img src={mockup1} className="p-10" />
        </div>
        <div className="flex flex-col md:flex-row">
          <img src={mockup2} className="p-10" />
          <div className="bg-mockup self-center pb-20 pt-20 md:mr-20 md:rounded-bl-[100px] md:rounded-tr-[100px]">
            <h1 className="text-center text-4xl font-extrabold">
              {t("Feature Title 2")}!
            </h1>
            <br></br>
            <p className="pl-20 pr-20 text-center text-2xl font-semibold">
              {t("Feature Content 2.1")}{" "}
            </p>
            <br></br>
            <p className="pl-20 pr-20 text-center text-2xl font-semibold">
              {t("Feature Content 2.2")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
