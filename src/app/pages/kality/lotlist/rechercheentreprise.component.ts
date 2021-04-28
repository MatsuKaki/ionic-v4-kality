import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "rechercheentreprise-component",
  templateUrl: "./rechercheentreprise.component.html"
})
export class RechercheEntrepriseComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  onOpen() {
    this.router.navigate(["kality/visiteentreprise"]);
  }
}
