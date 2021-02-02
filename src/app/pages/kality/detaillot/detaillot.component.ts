import { ViewChild, Component } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { IonSlides, Platform } from "@ionic/angular";
import { Artisan, Reserve, reserves } from "./reserve.provider";
import { Piece } from "./pieces.provider";
import { CorpsDEtat, Entreprise } from "./carnetadresse.provider";
import * as L from "leaflet";
import { MarkerClusterGroup } from "leaflet.markercluster";

@Component({
  selector: "detaillot-component",
  templateUrl: "./detaillot.component.html",
  styleUrls: ["./detaillot.component.scss"]
})
export class DetailLotComponent {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  @ViewChild("swiper") swiper: IonSlides;
  reserves: Reserve[];
  width: number;
  height: number;

  constructor(private router: Router, private platform: Platform) {
    this.reserves = reserves;
    platform.ready().then(readySource => {
      console.log("Width: " + platform.width());
      console.log("Height: " + platform.height());
      this.height = platform.height();
      this.width = platform.width();
    });
  }

  ionViewDidEnter() {
    var corner1 = L.latLng(0, 0),
      corner2 = L.latLng(756, 1024),
      bounds = L.latLngBounds(corner1, corner2);
    console.log("Bounds are " + corner1 + ", " + corner2);

    const map = L.map("map1", {
      crs: L.CRS.Simple,
      minZoom: -1,
      zoom: 0,
      maxZoom: 8,
      zoomControl: true,
      attributionControl: false,
      dragging: true,
      maxBounds: bounds
    });

    var image = L.imageOverlay(
      "https://www.terrain-construction.com/content/wp-content/uploads/2018/06/1-Stella-Lara-min-1-1024x650.jpg",
      bounds
    ).addTo(map);
    map.fitBounds(bounds);

    const markerCluster = new MarkerClusterGroup({
      maxClusterRadius: 5,
      zoomToBoundsOnClick: false
    });

    for (let i = 0; i < this.reserves.length; i++) {
      var reserve = this.reserves[i];
      const marker = L.marker(new L.LatLng(reserve.y, reserve.x), {
        title: reserve.description,
        reserveId: reserve.id,
        icon: new L.DivIcon({
          className: "my-div-icon",
          html:
            '<div class="map-label"><div class="map-label-content">' +
            reserve.viewtype +
            "-" +
            reserve.id +
            '</div><div class="map-label-arrow"></div></div>'
        })
      });
      markerCluster.addLayer(marker);
    }
    markerCluster.on("click", a => this.openReserve(a.layer), this);

    map.addLayer(markerCluster);

    const map2 = L.map("map2", {
      crs: L.CRS.Simple,
      minZoom: -1,
      zoom: 0,
      maxZoom: 8,
      zoomControl: true,
      attributionControl: false,
      dragging: true,
      maxBounds: bounds
    });

    var image2 = L.imageOverlay(
      "https://mhartington.io/img/v4-upgrade/ionic-icon.png",
      bounds
    ).addTo(map2);
    map2.fitBounds(bounds);

    const map3 = L.map("map3", {
      crs: L.CRS.Simple,
      minZoom: -1,
      zoom: 0,
      maxZoom: 8,
      zoomControl: true,
      attributionControl: false,
      dragging: true,
      maxBounds: bounds
    });

    var image3 = L.imageOverlay(
      "https://mhartington.io/img/v4-upgrade/ionic-icon.png",
      bounds
    ).addTo(map3);
    map3.fitBounds(bounds);
  }

  openReserve(marker: L.Marker) {
    this.router.navigate(["kality/reserve/" + marker.options["reserveId"]]);
  }
}
