import { useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from "../../store/redux/hooks";
import { loginUserActionCreator } from "../../store/redux/features/user/userSlice";
import { type User } from "../../store/redux/features/user/types";

interface UseStorageStructure {
  getFromStorage: () => Promise<void>;
  removeFromStorage: () => Promise<void>;
}

const useStorage = (): UseStorageStructure => {
  const dispatch = useAppDispatch();

  const getFromStorage = useCallback(async () => {
    const name = await AsyncStorage.getItem("name");
    const surname = await AsyncStorage.getItem("surname");
    const email = await AsyncStorage.getItem("email");

    if (name && surname && email) {
      const userToLogin: User = {
        name,
        surname,
        email,
      };

      dispatch(loginUserActionCreator(userToLogin));
    }
  }, [dispatch]);

  const removeFromStorage = async () => {
    await AsyncStorage.removeItem("name");
    await AsyncStorage.removeItem("surname");
    await AsyncStorage.removeItem("email");
  };

  return { getFromStorage, removeFromStorage };
};

export default useStorage;
