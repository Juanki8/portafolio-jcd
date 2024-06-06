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

    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }

    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #fdfd);
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
