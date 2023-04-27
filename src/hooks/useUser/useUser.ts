import { useAppDispatch } from "../../store/redux/hooks";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/redux/features/user/userSlice";
import { type User } from "../../store/redux/features/user/types";
import { type UserCredentials } from "./types";
import authorizedUser from "./data/authorizedUser";
import Routes from "../../navigation/routes";
import { type NavigationProps } from "../../types/navigation.types";
import {
  loadInitialHeroStateActionCreator,
  resetHeroStateActionCreator,
} from "../../store/redux/features/hero/heroSlice";
import useStorage from "../useStorage/useStorage";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
  handleLogout: () => void;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProps>();
  const { removeFromStorage } = useStorage();

  const loginUser = async (userCredentials: UserCredentials) => {
    await new Promise((resolve, reject) => {
      setTimeout(async () => {
        const { email, name, password, surname } = authorizedUser;

        if (
          email === userCredentials.email &&
          password === userCredentials.password
        ) {
          const userToLogin: User = {
            email,
            name,
            surname,
          };

          dispatch(loginUserActionCreator(userToLogin));
          dispatch(loadInitialHeroStateActionCreator());

          await AsyncStorage.setItem("name", name);
          await AsyncStorage.setItem("surname", surname);
          await AsyncStorage.setItem("email", email);

          resolve(userToLogin);
          navigation.navigate(Routes.home);
        } else {
          reject(new Error("Wrong credentials"));
        }
      }, 2000);
    });
  };

  const handleLogout = async () => {
    dispatch(logoutUserActionCreator());

    dispatch(resetHeroStateActionCreator());

    removeFromStorage();
    navigation.navigate(Routes.login);
  };

  return { loginUser, handleLogout };
};

export default useUser;
