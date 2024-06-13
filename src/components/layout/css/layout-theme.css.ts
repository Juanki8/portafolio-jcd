import { CSSResult, CSSResultOrNative, css } from "lit";

export class LayoutTheme {
  static readonly cssBase: CSSResult = css`
    :host {
      max-width: 1280px;
      margin: 5% auto;
      /* padding: 2rem;
      text-align: center; */
    }
  `;

  static readonly LayoutTheme: CSSResultOrNative[] = [
    LayoutTheme.cssBase,
  ];
}
