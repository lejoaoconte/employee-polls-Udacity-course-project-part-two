import "styled-components";

import { white } from "styles/theme";

type ThemeType = typeof white;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
