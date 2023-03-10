import {
  PagesType,
  PagesUrlType,
  ButtonsVariantsType,
  ButtonsVariantsValueType,
} from "Types";

export const PAGES_NAME: Record<PagesType, PagesType> = {
  SIGN_UP: "SIGN_UP",
  SIGN_IN: "SIGN_IN",
  HOME: "HOME",
};

export const PAGES_URL_PATHS: Record<PagesType, PagesUrlType> = {
  SIGN_UP: "/signup",
  SIGN_IN: "/signin",
  HOME: "/",
};

export const DEFAULT_BUTTONS_LABELS: Partial<Record<PagesType, string>> = {
  SIGN_UP: "Sign Up",
  SIGN_IN: "Sign In",
  HOME: "Home",
};

export const NAVIGATION_LABELS: PagesType[] = [
  PAGES_NAME.HOME,
  PAGES_NAME.SIGN_IN,
  PAGES_NAME.SIGN_UP,
];

export const BUTTONS_VARIANTS: Record<
  ButtonsVariantsType,
  ButtonsVariantsValueType
> = {
  OUTLINED: "outlined",
  CONTAINED: "contained",
};
