import { useNavigation } from "@react-navigation/native";
import useStorage from "../../../hooks/useStorage/useStorage";
import { logoutUserActionCreator } from "../../../store/redux/features/user/userSlice";
import { useAppDispatch } from "../../../store/redux/hooks";
import Routes from "../../../navigation/routes";
import { type NavigationProps } from "../../../types/navigation.types";

interface UseLogoutStructure {
  handleLogout: () => Promise<void>;
}

const useLogout = (): UseLogoutStructure => {
  const dispatch = useAppDispatch();
  const { removeFromStorage } = useStorage();
  const navigation = useNavigation<NavigationProps>();

  const handleLogout = async () => {
    dispatch(logoutUserActionCreator());
    await removeFromStorage();
    navigation.navigate(Routes.login);
  };

  return { handleLogout };
};

export default useLogout;
