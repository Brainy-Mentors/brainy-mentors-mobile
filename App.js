import MainStack from "./src/navigation/MainStack";
import { AppProvider } from "./src/context/AppContext";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import en from "./src/translations/en.json";
import es from "./src/translations/es.json";
import { useEffect } from "react";
import { setupDatabase } from "./src/data/database";
import "expo-dev-client"

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
  useEffect(() => {
    setupDatabase();
  }, []);

  return (
    <I18nextProvider i18n={i18next}>
      <AppProvider>
        <MainStack />
      </AppProvider>
    </I18nextProvider>
  );
}
