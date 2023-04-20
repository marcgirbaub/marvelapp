import { useAppDispatch } from "../../redux/hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginUserActionCreator } from "../../redux/features/user/userSlice";
import { type User } from "../../redux/features/user/types";
import { type UserCredentials } from "./types";
import authorizedUser from "./data/authorizedUser";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();
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

          await AsyncStorage.setItem("name", name);
          await AsyncStorage.setItem("surname", surname);
          await AsyncStorage.setItem("email", email);

          resolve(userToLogin);
        } else {
          reject(new Error("Wrong Credentials"));
        }
      }, 2000);
    });
  };

  return { loginUser };
};

export default useUser;
