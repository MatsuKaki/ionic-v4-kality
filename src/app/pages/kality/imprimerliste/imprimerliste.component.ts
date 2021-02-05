import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "imprimerliste-component",
  templateUrl: "./imprimerliste.component.html",
  styleUrls: ["./imprimerliste.component.scss"]
})
export class ImprimerListeComponent {
  pdfSource =
    "https://github.com/MatsuKaki/ionic-v4-kality/blob/master/src/app/pages/kality/pictures/Liste%20des%20r%C3%A9serves.pdf";
  //https://github.com/MatsuKaki/i
  /*pdfSource = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";*/

  constructor() {}
}
