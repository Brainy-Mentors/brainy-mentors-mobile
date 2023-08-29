import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAsyncStorage = (key, initialValue) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedValue = await AsyncStorage.getItem(key);
        if (storedValue !== null) {
          setValue(storedValue);
        }
      } catch (error) {
        console.error("Error getting data:", error);
      }
    };

    fetchData();
  }, [key]);

  const saveValue = async (newValue) => {
    try {
      await AsyncStorage.setItem(key, newValue);
      setValue(newValue);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return [value, saveValue];
};

export default useAsyncStorage;
