import {
  browserName,
  browserVersion,
  deviceType,
  deviceDetect,
} from "react-device-detect";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import trackerConfig from "./trackerConfig";
import TrackerTarget from "./TrackerTarget";

const { TRACKER_BASE_URL, PRODUCT_ID, APP_ENV } = trackerConfig;

const endpoint = `${TRACKER_BASE_URL}/api/v1/products/${PRODUCT_ID}/track`;

type User = {
  id?: string;
  name?: string;
  email?: string;
  type?: string;
};

type TrackerContent = {
  environment: string;
  target: string;
  content: string;
  user?: string;
};

export const getUserInfo = () => {
  if (secureLocalStorage.getItem("token")) {
    let userType;
    const cookieUserType = secureLocalStorage.getItem("user_type");

    if (cookieUserType === "Pengguna") {
      userType = "non-guest";
    } else if (cookieUserType === "Guest") {
      userType = "guest";
    } else {
      userType = undefined;
    }

    return {
      id: secureLocalStorage.getItem("id"),
      name: secureLocalStorage.getItem("username"),
      email: secureLocalStorage.getItem("email"),
      type: userType,
    } as User;
  }
  return undefined;
};

export const getBrowserInfo = () => ({
  platform: "web",
  browser_name: browserName,
  browser_version: browserVersion,
});

export const getDeviceInfo = () => ({
  device_type: deviceType,
  device_info: deviceDetect(window.navigator.userAgent),
});

export const track = async (
  target: TrackerTarget,
  { withDeviceInfo = false }: { withDeviceInfo?: boolean } = {},
) => {
  const user: User | undefined = getUserInfo();

  const content = {
    ...getBrowserInfo(),
    ...(withDeviceInfo && getDeviceInfo()),
  };

  const trackerContent: TrackerContent = {
    environment: APP_ENV,
    target,
    user: user ? JSON.stringify(user) : undefined,
    content: JSON.stringify(content),
  };

  await axios.post(endpoint, trackerContent);
};
