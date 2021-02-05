import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "imprimerliste-component",
  templateUrl: "./imprimerliste.component.html",
  styleUrls: ["./imprimerliste.component.scss"]
})
export class ImprimerListeComponent {
  pdfSource = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor() {}
}
