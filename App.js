import MainStack from "./src/navigation/MainStack";
import { AppProvider } from "./src/context/AppContext";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import en from "./src/translations/en.json";
import "expo-dev-client";
import es from "./src/translations/es.json";
import { useEffect, useState } from "react";
import { setupDatabase } from "./src/data/database";
import { AdProvider } from "./src/context/AdContext";
import * as Font from "expo-font";

export const languageSrc = {
  en: { global: en },
  es: { global: es },
};

i18next.init({
  compatibilityJSON: "v3",
  lng: "en",
  fallbackLng: "en",
  resources: languageSrc,
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    setupDatabase();
    async function loadFonts() {
      await Font.loadAsync({
        "Montserrat-Regular": require("./src/assets/fonts/Montserrat-Regular.ttf"),
        "Montserrat-Light": require("./src/assets/fonts/Montserrat-Light.ttf"),
        "Montserrat-Black": require("./src/assets/fonts/Montserrat-Black.ttf"),
      });
      setFontsLoaded(true);
    }

    if (!fontsLoaded) {
      loadFonts();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    // load screen
    return null;
  }

  return (
    <I18nextProvider i18n={i18next}>
      <AppProvider>
        <AdProvider>
          <MainStack />
        </AdProvider>
      </AppProvider>
    </I18nextProvider>
  );
}
