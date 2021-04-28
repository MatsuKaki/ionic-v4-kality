import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Entreprise, entreprises } from "../detaillot/carnetadresse.provider";
import { IonicSelectableComponent } from "ionic-selectable";

@Component({
  selector: "entreprise-component",
  templateUrl: "./entreprise.component.html"
})
export class EntrepriseComponent {
  public myEntreprises: Entreprise[];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.myEntreprises = entreprises;
  }
}
