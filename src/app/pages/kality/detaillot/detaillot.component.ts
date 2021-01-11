import { ViewChild, Component } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { IonSlides } from "@ionic/angular";
import { Artisan, Reserve, reserves } from "./reserve.provider";
import { Piece } from "./pieces.provider";
import { CorpsDEtat, Entreprise } from "./carnetadresse.provider";

@Component({
  selector: "detaillot-component",
  templateUrl: "./detaillot.component.html",
  styleUrls: ["./detaillot.component.scss"]
})
export class DetailLotComponent {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    zoom: {
      maxRatio: 4
    }
  };

  timer;

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

  onTouchStart() {
    this.timer = new Date().getTime();
  }

  onTouchEnd(event) {
    let timelapse = new Date().getTime() - this.timer;
    console.debug("Touch end ");
    if (new Date().getTime() - this.timer > 1500) {
      var newReserve = {
        id: reserves.length,
        viewtype: "A",
        x: event.touches[0].pageX,
        y: event.touches[0].pageY,
        statut: "En cours",
        piece: null,
        artisans: new Artisan(),
        infoAdditionnelles: "test creation",
        description: "",
        images: []
      };
      reserves.push(newReserve);
      this.router.navigate(["kality/reserve/" + newReserve.id]);
    }
  }

  openReserve(reserve: Reserve) {
    this.router.navigate(["kality/reserve/" + reserve.id]);
  }
}
