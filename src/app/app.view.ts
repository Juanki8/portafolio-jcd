import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from "lit";
import { AppViewModel } from "./app.viewmodel";
import { AppTheme } from "./css/app-theme.css";

export class AppView extends AppViewModel {
  static override readonly finalizeStyles = (
    styles?: CSSResultGroup
  ): CSSResultOrNative[] => [
    ...super.finalizeStyles(styles),
    ...AppTheme.AppTheme,
  ];

  protected override render(): TemplateResult {
    import("../components/nav-var/nav-bar.view");
    import("../components/my-element/my-element.view");

    return html`
      <nav-bar></nav-bar>
      <my-element></my-element>
    `;
  }
}

window.customElements.define("app-wrapper", AppView);

declare global {
  interface HTMLElementTagNameMap {
    app: AppView;
  }
}
