import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from "lit";
import { LayoutViewModel } from "./layout.viewmodel";
import { LayoutTheme } from "./css/layout-theme.css";

export class LayoutView extends LayoutViewModel {
  static override readonly finalizeStyles = (
    styles?: CSSResultGroup
  ): CSSResultOrNative[] => [
    ...super.finalizeStyles(styles),
    ...LayoutTheme.LayoutTheme,
  ];

  protected override render(): TemplateResult {
    import("../info-card/info-card.view");

    return html`
      <info-card></info-card>
    `;
  }
}

window.customElements.define("layout-wrap", LayoutView);

declare global {
  interface HTMLElementTagNameMap {
    "layout-wrap": LayoutView;
  }
}
