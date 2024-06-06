import { CSSResult, CSSResultOrNative, css } from "lit";

export class AppTheme {
  static readonly cssBase: CSSResult = css`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  `;

  static readonly AppTheme: CSSResultOrNative[] = [AppTheme.cssBase];
}
