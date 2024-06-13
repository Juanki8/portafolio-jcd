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
    import("../components/layout/layout.view");

    return html`
      <nav-bar></nav-bar>
      <layout-wrap></layout-wrap>
    `;
  }
}

window.customElements.define("app-wrapper", AppView);

declare global {
  interface HTMLElementTagNameMap {
    "app-wrapper": AppView;
  }
}
