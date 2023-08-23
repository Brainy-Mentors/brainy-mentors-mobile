import { createContext, useState } from "react";
import { dataMentors } from "../constants/dataMentors";
import useAsyncStorage from "../hooks/useAsyncStorage";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedMentor, setSelectedMentor] = useAsyncStorage(
    "selectedMentor",
    JSON.stringify(dataMentors()[1])
  );

  const [tokensCount, setTokensCount] = useAsyncStorage("tokenCount", 4);

  const [lang, setLang] = useAsyncStorage("lang", "en");
  const [isOpenModalReward, setIsOpenModalReward] = useState(false);
  const contextData = {
    tokensCount,
    setTokensCount,
    isOpenModalReward,
    setIsOpenModalReward,
    selectedMentor,
    setSelectedMentor,
    lang,
    setLang,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};
export default AppContext;
