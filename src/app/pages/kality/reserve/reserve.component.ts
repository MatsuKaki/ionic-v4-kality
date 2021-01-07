import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IonicSelectableComponent } from "ionic-selectable";
import { Piece, PieceProvider } from "../detaillot/pieces.provider";
import { Reserve, reserves } from "../detaillot/reserve.provider";
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
  reserve: Reserve;
  pieceProvider: PieceProvider;
  matchingPieces: Piece[];

  carnetAdresseProvider: CarnetDAdresseProvider;
  matchingCorpsDEtat: CorpsDEtat[];

  matchingEntreprises: Entreprise[];
  carnetDAdresseOnly = true;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoHeight: true,
    zoom: {
      maxRatio: 4
    }
  };constructor(private route: ActivatedRoute) {
    this.pieceProvider = new PieceProvider();
    this.matchingPieces = this.pieceProvider.filter("");
    this.carnetAdresseProvider = new CarnetDAdresseProvider();
    this.matchingCorpsDEtat = this.carnetAdresseProvider.filterCorpsDEtat("");

    if (route.snapshot.paramMap.get("id")) {
      console.log("Reserve " + route.snapshot.paramMap.get("id"));
      this.reserve = reserves[route.snapshot.paramMap.get("id")];
      console.log("Found Reserve " + this.reserve);
      if (this.reserve.corpsDEtat) {
        this.matchingEntreprises = this.carnetAdresseProvider.filterEntreprise(
          this.reserve.corpsDEtat
        );
      }
    }
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
    this.reserve.entreprise = null;
    this.matchingEntreprises = this.carnetAdresseProvider.filterEntreprise(
      event.value
    );
    if (this.matchingEntreprises.length > 0) {
      this.reserve.entreprise = this.matchingEntreprises[0];
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
