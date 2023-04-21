import { useNavigation } from "@react-navigation/native";
import useStorage from "../../../hooks/useStorage/useStorage";
import { logoutUserActionCreator } from "../../../redux/features/user/userSlice";
import { useAppDispatch } from "../../../redux/hooks";
import Routes from "../../../navigation/routes";
import { type Props } from "../../../types/navigation.types";

interface UseLogoutStructure {
  handleLogout: () => Promise<void>;
}

const useLogout = (): UseLogoutStructure => {
  const dispatch = useAppDispatch();
  const { removeFromStorage } = useStorage();
  const navigation = useNavigation<Props>();

  const handleLogout = async () => {
    dispatch(logoutUserActionCreator());
    await removeFromStorage();
    navigation.navigate(Routes.login);
  };

  return { handleLogout };
};

export default useLogout;
