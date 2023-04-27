import { useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../../store/redux/hooks";
import { loginUserActionCreator } from "../../store/redux/features/user/userSlice";
import { type User } from "../../store/redux/features/user/types";
import { type NavigationProps } from "../../types/navigation.types";
import Routes from "../../navigation/routes";

interface UseStorageStructure {
  getFromStorage: () => void;
  removeFromStorage: () => void;
}

const useStorage = (): UseStorageStructure => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProps>();

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
      navigation.navigate(Routes.home);
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
