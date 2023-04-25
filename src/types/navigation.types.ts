import { type NativeStackNavigationProp } from "@react-navigation/native-stack";
import type Routes from "../navigation/routes";

export type RootStackParamList = {
  [Routes.login]: undefined;
  [Routes.home]: undefined;
  [Routes.detail]: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
