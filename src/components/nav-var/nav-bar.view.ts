import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from "lit";
import { NavBarViewModel } from "./nav-var.viewmodel";
import { NavBarTheme } from "./css/nav-bar-theme.css";

export class NavBarView extends NavBarViewModel {
  static override readonly finalizeStyles = (
    styles?: CSSResultGroup
  ): CSSResultOrNative[] => [
    ...super.finalizeStyles(styles),
    ...NavBarTheme.NavBarTheme,
  ];

  protected override render(): TemplateResult {
    return html`
        <ul class="nb-item-list-wrap">
          <li><a href="">Inicio</a></li>
          <li><a href="">Sobre mi</a></li>
          <li><a href="">Proyectos</a></li>
          <li><a href="">Contacto</a></li>
        </ul>
    `;
  }
}

window.customElements.define("nav-bar", NavBarView);

declare global {
  interface HTMLElementTagNameMap {
    "nav-bar": NavBarView;
  }
}
