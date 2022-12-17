import { Theme } from "./styles/theme";
import { CSSObject, CSSProp } from "styled-components";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

declare module "react" {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
