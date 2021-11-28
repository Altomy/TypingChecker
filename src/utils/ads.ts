import { Platform } from "react-native";
import { isDev } from "./env";

let banner = {
  production: Platform.select({
    ios: "ca-app-pub-8749426160957410/9067799714",
    android: "ca-app-pub-8749426160957410/4964903177",
  }),
  dev: "ca-app-pub-3940256099942544/6300978111",
};

let results = {
  production: Platform.select({
    ios: "ca-app-pub-8749426160957410/1189309694",
    android: "ca-app-pub-8749426160957410/8329433112",
  }),
  dev: "ca-app-pub-3940256099942544/1033173712",
};

let ads = {
  banner: isDev ? banner.dev : banner.production,
  results: isDev ? results.dev : results.production,
};

export default ads;
