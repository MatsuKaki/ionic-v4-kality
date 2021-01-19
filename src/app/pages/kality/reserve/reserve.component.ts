import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IonicSelectableComponent } from "ionic-selectable";
import { Piece, PieceProvider } from "../detaillot/pieces.provider";
import { Artisan, Reserve, reserves } from "../detaillot/reserve.provider";
import * as L from "leaflet";

import {
  CarnetDAdresseProvider,
  CorpsDEtat,
  Entreprise
} from "../detaillot/carnetadresse.provider";

@Component({
  selector: "reserve-component",
  templateUrl: "./reserve.component.html",
  styleUrls: ["./reserve.component.scss"]
})
export class ReserveComponent {
  reserve: Reserve;
  pieceProvider: PieceProvider;
  matchingPieces: Piece[];

  carnetAdresseProvider: CarnetDAdresseProvider;
  matchingCorpsDEtat: CorpsDEtat[][];

  matchingEntreprises: Entreprise[][];
  carnetDAdresseOnly = true;

  constructor(private route: ActivatedRoute) {
    this.pieceProvider = new PieceProvider();
    this.matchingPieces = this.pieceProvider.filter("");
    this.carnetAdresseProvider = new CarnetDAdresseProvider();
    this.matchingCorpsDEtat = [];
    this.matchingEntreprises = [];

    if (route.snapshot.paramMap.get("id")) {
      console.log("Reserve " + route.snapshot.paramMap.get("id"));
      this.reserve = reserves[route.snapshot.paramMap.get("id") - 1];
      console.log("Found Reserve " + this.reserve);
    }

    for (let i = 0; i < this.reserve.artisans.length; i++) {
      console.log("init matchingCorpsDEtat" + i);
      this.matchingCorpsDEtat.push([]);
      console.log("matchingCorpsDEtat " + i + ":" + this.matchingCorpsDEtat[i]);
      this.matchingCorpsDEtat[i] = this.carnetAdresseProvider.filterCorpsDEtat(
        ""
      );
      console.log("init matchingCorpsDEtat" + i + " done");
      if (this.reserve.artisans[i].corpsDEtat) {
        this.matchingEntreprises[
          i
        ] = this.carnetAdresseProvider.filterEntreprise(
          this.reserve.artisans[i].corpsDEtat
        );
      }
    }
  }

  ionViewDidEnter() {
    var corner1 = L.latLng(0, 0),
      corner2 = L.latLng(650, 1024),
      bounds = L.latLngBounds(corner1, corner2);

    const map = L.map("map", {
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

    const marker = L.marker(new L.LatLng(this.reserve.x, this.reserve.y), {
      title: this.reserve.description,
      draggable: true,
      icon: new L.DivIcon({
        className: "my-div-icon",
        html:
          '<div class="map-label"><div class="map-label-content">' +
          this.reserve.viewtype +
          "-" +
          this.reserve.id +
          '</div><div class="map-label-arrow"></div></div>'
      })
    });

    map.addLayer(marker);
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

  corpsDEtatChange(
    event: { component: IonicSelectableComponent; value: any },
    index: number
  ) {
    console.log("selected corps d'etat:", event.value);
    this.reserve.artisans[index].entreprise = null;
    this.matchingEntreprises[
      index
    ] = this.carnetAdresseProvider.filterEntreprise(event.value);
    if (this.matchingEntreprises.length > 0) {
      this.reserve.artisans[index].entreprise = this.matchingEntreprises[
        index
      ][0];
    }
    console.log("matching entreprises:", this.matchingEntreprises);
  }

  searchCorpsDEtat(
    event: {
      component: IonicSelectableComponent;
      text: string;
    },
    index: number
  ) {
    console.log("search corps d'etat:" + event.text + " for index " + index);
    this.carnetAdresseProvider.limiterAuCarnet = this.carnetDAdresseOnly;
    let corpsDEtatName = event.text;
    event.component.startSearch();

    this.matchingCorpsDEtat[
      index
    ] = this.carnetAdresseProvider.filterCorpsDEtat(corpsDEtatName);
    event.component.items = this.matchingCorpsDEtat[index];

    event.component.endSearch();
  }

  addArtisan() {
    this.reserve.artisans.push(new Artisan());
  }

  removeArtisan() {
    this.reserve.artisans.pop();
  }
}
