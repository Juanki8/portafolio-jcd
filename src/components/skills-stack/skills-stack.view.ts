import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from "lit";
import { SkillsStackViewModel } from "./skills-stack.viewmodel";
import { SkillsStackTheme } from "./css/skills-stack-theme.css";
import viteLogo from "/assets/vite.svg";
import litLogo from "/assets/lit.svg";
import javaScriptLogo from "/assets/javascript.svg";
import typeScriptLogo from "/assets/typescript.svg";
import htmlLogo from "/assets/html.svg";
import cssLogo from "/assets/css.svg";
import astroLogo from "/assets/astro.svg";


export class SkillsStackView extends SkillsStackViewModel {
  static override readonly finalizeStyles = (
    styles?: CSSResultGroup
  ): CSSResultOrNative[] => [
    ...super.finalizeStyles(styles),
    ...SkillsStackTheme.SkillsStackTheme,
  ];

  protected override render(): TemplateResult {
    return html`
      <div>
        <a href="https://www.w3schools.com/html/" target="_blank">
          <img src=${htmlLogo} class="logo orange" alt="HTML logo" /></a>
        <a href="https://www.w3schools.com/css/" target="_blank">
          <img src=${cssLogo} class="logo blue" alt="CSS logo" /></a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
          <img src=${javaScriptLogo} class="logo yellow" alt="JavaScript logo"/></a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <img src=${typeScriptLogo} class="logo blue" alt="TypeScript logo"/></a>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="logo blue" alt="Lit logo"/></a>
        <a href="https://vitejs.dev" target="_blank">
          <img src=${viteLogo} class="logo yellow" alt="Vite logo"/></a>
        <a href="https://astro.build/" target="_blank">
          <img src=${astroLogo} class="logo white" alt="Astro logo" /></a>
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
