import MainStack from "./src/navigation/MainStack";
import { AppProvider } from "./src/context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <MainStack />
    </AppProvider>
  );
}
