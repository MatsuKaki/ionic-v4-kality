import { ViewChild, Component } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { IonSlides } from "@ionic/angular";
import { Reserve, reserves } from "./reserve.provider";
import { Piece } from "./pieces.provider";
import { CorpsDEtat, Entreprise } from "./carnetadresse.provider";

@Component({
  selector: "detaillot-component",
  templateUrl: "./detaillot.component.html"
})
export class DetailLotComponent {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    zoom: {
      maxRatio: 4
    }
  };

  @ViewChild("swiper") swiper: IonSlides;
  pageNumber: 1;
  reserves: Reserve[];

  constructor(private router: Router) {
    this.pageNumber = 1;
    this.reserves = reserves;
  }

  onSlideChange() {
    this.swiper.getActiveIndex().then(index => {
      this.pageNumber = index + 1;
      console.log("Current page is " + this.pageNumber);
    });
  }

  openReserve(reserve: Reserve) {
    this.router.navigate(["kality/reserve/" + reserve.id]);
  }
}
