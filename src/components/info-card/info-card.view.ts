import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from "lit";
import { InfoCardViewModel } from "./info-card.viewmodel";
import { InfoCardTheme } from "./css/info-card-theme.css";
import image from "/assets/image.jpg";

export class InfoCardView extends InfoCardViewModel {
  static override readonly finalizeStyles = (
    styles?: CSSResultGroup
  ): CSSResultOrNative[] => [
    ...super.finalizeStyles(styles),
    ...InfoCardTheme.InfoCardTheme,
  ];

  protected override render(): TemplateResult {
    import("../skills-stack/skills-stack.view");

    return html`
      <div class="card">
        <div class="card-info">
          <h1>Front-End Web Developer</h1>
          <h2>Juan Carlos Durán Caballero</h2>
          <!-- <div class="location">
            <span class="material-icons">location_on</span>
            <p>Sevilla, España</p>
          </div> -->
          <skills-stack></skills-stack>
        </div>
        <div class="card-image">
          <img class="img" src=${image} />
        </div>
      </div>
    `;
  }
}

window.customElements.define("info-card", InfoCardView);

declare global {
  interface HTMLElementTagNameMap {
    "info-card": InfoCardView;
  }
}
