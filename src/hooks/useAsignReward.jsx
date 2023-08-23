import { useContext } from "react";
import AppContext from "../context/AppContext";

const useAsignReward = () => {
  const { tokensCount, setTokensCount } = useContext(AppContext);

  const addTokens = (value) => {
    if (value > 0) {
      setTokensCount(tokensCount + value);
    }
  };
  const reduceTokens = (value) => {
    if (value > tokensCount) {
      setTokensCount(0);
    } else {
      setTokensCount(tokensCount - value);
    }
  };

  return [addTokens, reduceTokens];
};
export default useAsignReward;
