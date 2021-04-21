import { Component } from "@angular/core";

@Component({
  selector: "pvinfo-component",
  templateUrl: "./pvinfo.component.html"
})
export class PVInfoComponent {
  public signatureDate: Date;
  public possessionDate: Date;
  public currDate: Date;

  constructor() {
    this.signatureDate = new Date();
    this.possessionDate = new Date();
    this.currDate = new Date();
  }
}
