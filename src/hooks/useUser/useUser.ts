import { useAppDispatch } from "../../redux/hooks";
import axios from "axios";
import { loginUserActionCreator } from "../../redux/features/user/userSlice";
import { type User } from "../../redux/features/user/types";
import { type LoginResponse, type UserCredentials } from "./types";

const loginUrl = "data/loginuser.json";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      const response = await axios.get<LoginResponse>(loginUrl);

      const { email, name, password, surname } = response.data;

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
