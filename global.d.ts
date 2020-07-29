import { DefaultTheme } from "styled-components";
import { customTheme } from "./providers/theme";

// THEME
type CustomTheme = typeof customTheme;

declare module "styled-components" {
  interface DefaultTheme extends CustomTheme {}
}
