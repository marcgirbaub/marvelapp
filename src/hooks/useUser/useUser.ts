import { useAppDispatch } from "../../redux/hooks";
import { loginUserActionCreator } from "../../redux/features/user/userSlice";
import { type User } from "../../redux/features/user/types";
import { type UserCredentials } from "./types";
import authorizedUser from "./data/authorizedUser";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => void;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();

  const loginUser = (userCredentials: UserCredentials) => {
    try {
      const { email, name, password, surname } = authorizedUser;

      if (
        email !== userCredentials.email ||
        password !== userCredentials.password
      ) {
        throw new Error("Invalid credentials");
      }

      const userToLogin: User = {
        email,
        name,
        surname,
      };

      dispatch(loginUserActionCreator(userToLogin));
    } catch (error) {}
  };

  return { loginUser };
};

export default useUser;
