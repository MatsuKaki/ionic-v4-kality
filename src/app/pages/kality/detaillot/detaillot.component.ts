import { ViewChild, Component } from "@angular/core";
import { Router } from "@angular/router";
import { IonSelect, IonSlides } from "@ionic/angular";
import { MenuController } from "@ionic/angular";
import { IonicSelectableComponent } from "ionic-selectable";
import { Piece, PieceProvider } from "./pieces.provider";
import {
  CarnetDAdresseProvider,
  CorpsDEtat,
  Entreprise
} from "./carnetadresse.provider";

@Component({
  selector: "detaillot-component",
  templateUrl: "./detaillot.component.html"
})
export class DetailLotComponent {
  piece: Piece;
  pieceProvider: PieceProvider;
  matchingPieces: Piece[];

  corpsDEtat: CorpsDEtat;
  carnetAdresseProvider: CarnetDAdresseProvider;
  matchingCorpsDEtat: CorpsDEtat[];

  entreprise: Entreprise;
  matchingEntreprises: Entreprise[];
  carnetDAdresseOnly = true;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoHeight: true,
    zoom: {
      maxRatio: 4
    }
  };

  @ViewChild("swiper") swiper: IonSlides;
  pageNumber: 1;

  constructor(private router: Router, private menuController: MenuController) {
    this.pageNumber = 1;
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

  onSlideChange() {
    this.swiper.getActiveIndex().then(index => {
      this.pageNumber = index + 1;
      console.log("Current page is " + this.pageNumber);
    });
  }
}
