import { createContext, useState } from "react";
import { dataMentors } from "../constants/dataMentors";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedMentor, setSelectedMentor] = useState(dataMentors[0]);

  const contextData = {
    selectedMentor,
    setSelectedMentor,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};
export default AppContext;
