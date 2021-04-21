import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "imprimerpv-component",
  templateUrl: "./imprimerpv.component.html",
  styleUrls: ["./imprimerpv.component.scss"]
})
export class ImprimerPVComponent {
  pdfSource =
    "https://cdn.jsdelivr.net/gh/MatsuKaki/ionic-v4-kality@master/src/app/pages/kality/pictures/PV_.pdf";
  //https://github.com/MatsuKaki/i
  /*pdfSource = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf"*/ constructor() {}
}
