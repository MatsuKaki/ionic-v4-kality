import { ViewChild, Component } from "@angular/core";
import { Router } from "@angular/router";
import { IonSelect, IonSlides } from "@ionic/angular";
import { MenuController } from "@ionic/angular";
import { IonicSelectableComponent } from "ionic-selectable";
import { Piece, PieceProvider } from "../detaillot/pieces.provider";
import {
  CarnetDAdresseProvider,
  CorpsDEtat,
  Entreprise
} from "../detaillot/carnetadresse.provider";

@Component({
  selector: "reserve-component",
  templateUrl: "./reserve.component.html"
})
export class ReserveComponent {
  piece: Piece;
  pieceProvider: PieceProvider;
  matchingPieces: Piece[];

  corpsDEtat: CorpsDEtat;
  carnetAdresseProvider: CarnetDAdresseProvider;
  matchingCorpsDEtat: CorpsDEtat[];

  entreprise: Entreprise;
  matchingEntreprises: Entreprise[];
  carnetDAdresseOnly = true;

  constructor() {
    this.pieceProvider = new PieceProvider();
    this.matchingPieces = this.pieceProvider.filter("");
    this.carnetAdresseProvider = new CarnetDAdresseProvider();
    this.matchingCorpsDEtat = this.carnetAdresseProvider.filterCorpsDEtat("");
  }

  pieceChange(event: { component: IonicSelectableComponent; value: any }) {
    console.log("piece:", event.value);
  }

  searchPieces(event: { component: IonicSelectableComponent; text: string }) {
    let pieceName = event.text;
    event.component.startSearch();

    this.matchingPieces = this.pieceProvider.filter(pieceName);
    event.component.items = this.matchingPieces;

    event.component.endSearch();
  }

  corpsDEtatChange(event: { component: IonicSelectableComponent; value: any }) {
    console.log("selected corps d'etat:", event.value);
    this.entreprise = null;
    this.matchingEntreprises = this.carnetAdresseProvider.filterEntreprise(
      event.value
    );
    if (this.matchingEntreprises.length > 0) {
      this.entreprise = this.matchingEntreprises[0];
    }
    console.log("matching entreprises:", this.matchingEntreprises);
  }

  searchCorpsDEtat(event: {
    component: IonicSelectableComponent;
    text: string;
  }) {
    this.carnetAdresseProvider.limiterAuCarnet = this.carnetDAdresseOnly;
    let corpsDEtatName = event.text;
    event.component.startSearch();

    this.matchingCorpsDEtat = this.carnetAdresseProvider.filterCorpsDEtat(
      corpsDEtatName
    );
    event.component.items = this.matchingCorpsDEtat;

    event.component.endSearch();
  }
}
