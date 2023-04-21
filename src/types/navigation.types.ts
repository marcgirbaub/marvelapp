/* eslint-disable @typescript-eslint/consistent-type-definitions */

import { type NativeStackNavigationProp } from "@react-navigation/native-stack";
import type Routes from "../navigation/routes";

export type RootStackParamList = {
  [Routes.login]: undefined;
  [Routes.home]: undefined;
};

export type Props = NativeStackNavigationProp<RootStackParamList>;
