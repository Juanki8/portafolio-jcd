import { CSSResult, CSSResultOrNative, css } from "lit";

export class NavBarTheme {
  static cssBase: CSSResult = css`
    :host {
    }

    .nb-item-list-wrap {
      display: flex;
      gap: 2rem;
      list-style: none;
      justify-content: center;
    }

    a {
      color: white;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.23s;
    }

    a:hover {
      color: #147efb;
    }
  `;

  static NavBarTheme: CSSResultOrNative[] = [NavBarTheme.cssBase];
}
