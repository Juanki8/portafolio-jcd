import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from "lit";
import { MyElementViewModel } from "./my-element.viewmodel";
import { MyElementTheme } from "./css/my-element-theme.css";

export class MyElementView extends MyElementViewModel {
  static override readonly finalizeStyles = (
    styles?: CSSResultGroup
  ): CSSResultOrNative[] => [
    ...super.finalizeStyles(styles),
    ...MyElementTheme.MyElementTheme,
  ];

  protected override render(): TemplateResult {
    import("../skills-stack/skills-stack.view");
    import("../nav-var/nav-bar.view");

    return html`
      <div class="card">
        <h2>Esto es un contador</h2>
        <button @click=${this.onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
      <skills-stack></skills-stack>
    `;
  }
}

window.customElements.define("my-element", MyElementView);

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElementView;
  }
}
