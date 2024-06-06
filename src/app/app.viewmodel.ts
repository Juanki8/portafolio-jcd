import { LitElement } from "lit";
import { property } from "lit/decorators.js";

export class AppViewModel extends LitElement {
  @property({ type: String }) docsHint =
    "Click on the Vite and Lit logos to learn more";
  @property({ type: Number }) count = 0;

  protected onClick() {
    this.count++;
  }
}
