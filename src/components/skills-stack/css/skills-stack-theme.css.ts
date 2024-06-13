import { CSSResult, CSSResultOrNative, css } from "lit";

export class SkillsStackTheme {
  static cssBase: CSSResult = css`
    :host {
        display: inline-flex;
        align-items: center;
    }

    .logo {
      height: 2em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }

    .logo.orange:hover {
      filter: drop-shadow(0 0 2em #f06529);
    }

    .logo.blue:hover {
      filter: drop-shadow(0 0 2em #2196f3);
    }

    .logo.yellow:hover {
      filter: drop-shadow(0 0 2em #f0db4f);
    }

    .logo.white:hover {
      filter: drop-shadow(0 0 2em #fff);
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `;

  static SkillsStackTheme: CSSResultOrNative[] = [SkillsStackTheme.cssBase];
}
