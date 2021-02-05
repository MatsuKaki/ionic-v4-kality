import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "imprimerliste-component",
  templateUrl: "./imprimerliste.component.html",
  styleUrls: ["./imprimerliste.component.scss"]
})
export class ImprimerListeComponent {
  pdfSource =
    "https://stackblitz.com/files/ionic-v4-kality/github/MatsuKaki/ionic-v4-kality/master/src/app/pages/kality/pictures/ListeDesReserves.pdf";
  //https://github.com/MatsuKaki/i
  /*pdfSource = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf"*/ constructor() {}
}
