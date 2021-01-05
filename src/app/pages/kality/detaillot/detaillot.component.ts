import { ViewChild, Component } from "@angular/core";
import { Router } from "@angular/router";
import { IonSlides } from "@ionic/angular";
import { MenuController } from "@ionic/angular";
import { IonicSelectableComponent } from "ionic-selectable";
import { Piece, PieceProvider } from "./pieces.provider";

@Component({
  selector: "detaillot-component",
  templateUrl: "./detaillot.component.html"
})
export class DetailLotComponent {
  piece: Piece;
  pieceProvider: PieceProvider;
  matchingPieces: Piece[];

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoHeight: true,
    zoom: {
      maxRatio: 4
    }
  };

  @ViewChild("swiper") swiper: IonSlides; //second way
  pageNumber: 1;

  constructor(private router: Router, private menuController: MenuController) {
    this.pageNumber = 1;
    this.pieceProvider = new PieceProvider();
    this.matchingPieces = this.pieceProvider.filter("");
  }

  pieceChange(event: { component: IonicSelectableComponent; value: any }) {
    console.log("piece:", event.value);
  }

  searchPieces(event: { component: IonicSelectableComponent; text: string }) {
    let pieceName = event.text;
    event.component.startSearch();

    this.matchingPieces = this.pieceProvider.filter(pieceName);
    event.component.items = this.matchingPieces;

    // Get ports from a storage and stop searching.
    event.component.endSearch();
  }

  onSlideChange() {
    this.swiper.getActiveIndex().then(index => {
      this.pageNumber = index + 1;
      console.log("Current page is " + this.pageNumber);
    });
  }
}
