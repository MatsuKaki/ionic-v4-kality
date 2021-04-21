import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "solde-component",
  templateUrl: "./solde.component.html"
})
export class SoldeComponent {
  cheques: Cheque[];
  constructor() {
    this.cheques = [];
  }

  addCheque() {
    this.cheques.push(new Cheque());
  }

  removeCheque() {
    this.cheques.pop();
  }
}

export class Cheque {
  public montant: number;
  public numero: number;
  public banque: string;
}
