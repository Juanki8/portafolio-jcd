import { CSSResult, CSSResultOrNative, css } from "lit";

export class InfoCardTheme {
  static cssBase: CSSResult = css`
    .card {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      margin: 0 auto;
      min-width: 70%;
    }

    .card-info {
      display: flex;
      flex-direction: column;
      line-height: 2rem;
      padding: 3rem;
    }

    .card-info h1 {
      font-size: 2.5rem;
      font-weight: 900;
    }

    .card-info h2 {
      margin-block-start: 0;
    }

    .card-image {
      display: flex;
      justify-content: center;
    }

    .card-image img {
      width: 20rem;
      max-height: 20rem;
      height: auto;
      border: 3px solid #fff;
      border-radius: 50%;
      object-fit: cover;
      filter: drop-shadow(0 0 10px rgba(250, 250, 250, 1));
    }

    .location {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0 auto;
      gap: .5rem;
    }

    .location p {
      margin-block-start: 0;
      margin-block-end: 0;
    }

    .material-icons {
      font-family: "Material icons";
    }
  `;
  static readonly InfoCardTheme: CSSResultOrNative[] = [InfoCardTheme.cssBase];
}
