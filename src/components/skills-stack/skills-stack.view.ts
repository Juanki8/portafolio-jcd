import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from "lit";
import { SkillsStackViewModel } from "./skills-stack.viewmodel";
import { SkillsStackTheme } from "./css/skills-stack-theme.css";
import viteLogo from "/assets/vite.svg";
import litLogo from "/assets/lit.svg";
import javaScriptLogo from "/assets/javascript.svg";
import htmlLogo from "/assets/html.svg";
import cssLogo from "/assets/css.svg";
import gitLogo from "/assets/git.svg";


export class SkillsStackView extends SkillsStackViewModel {
  static override readonly finalizeStyles = (
    styles?: CSSResultGroup
  ): CSSResultOrNative[] => [
    ...super.finalizeStyles(styles),
    ...SkillsStackTheme.SkillsStackTheme,
  ];

  protected override render(): TemplateResult {
    return html`
      <h3>My skills:</h3>
      <div style="margin-left: 5rem;">
        <a href="https://vitejs.dev" target="_blank">
          <img src=${viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="logo lit" alt="Lit logo" />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
        >
          <img
            src=${javaScriptLogo}
            class="logo javascript"
            alt="JavaScript logo"
          />
        </a>
        <a href="https://www.w3schools.com/html/" target="_blank">
          <img src=${htmlLogo} class="logo html" alt="HTML logo" />
        </a>
        <a href="https://www.w3schools.com/css/" target="_blank">
          <img src=${cssLogo} class="logo css" alt="CSS logo" />
        </a>
        <a href="https://www.git-scm.com/" target="_blank">
          <img src=${gitLogo} class="logo git" alt="Git logo" />
        </a>
      </div>
    `;
  }
}

window.customElements.define("skills-stack", SkillsStackView);

declare global {
  interface HTMLElementTagNameMap {
    "skills-stack": SkillsStackView;
  }
}
