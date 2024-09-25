import badge from "@/assets/googleplay_badge.png";
import { track } from "@/services/tracker/tracker";
import TrackerTarget from "@/services/tracker/TrackerTarget";
import { useTranslation } from "react-i18next";

export default function Download() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="m-10 text-center text-2xl font-extrabold">
        {t("Download Text")}
      </h1>
      <div className="flex justify-center">
        <a
          href="https://play.google.com/store/apps/details?id=com.b4.smilearn"
          onClick={() =>
            track(TrackerTarget.playstoreClick, { withDeviceInfo: true })
          }
          target="_blank"
        >
          <img className="size-min" src={badge} />
        </a>
      </div>
    </div>
  );
}
