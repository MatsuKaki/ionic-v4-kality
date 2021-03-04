import { Component } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
import { ActionSheetController } from "@ionic/angular";
import { PopoverController } from "@ionic/angular";
import { PrintingOptionsComponent } from "./printingoptions.component";

@Component({
  selector: "reserves-component",
  templateUrl: "./reserves.component.html"
})
export class ReservesComponent {
  constructor(
    private router: Router,
    private alertController: AlertController,
    private actionSheetController: ActionSheetController,
    private popoverController: PopoverController
  ) {}

  async presentAlertConfirm() {
    console.log("Print clicked");
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Attention",
      message:
        "Une liste existante a été détectée. Si vous continuez, elle sera remplacée.",
      buttons: [
        {
          text: "Annuler",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel: blah");
          }
        },
        {
          text: "Continuer",
          handler: () => {
            this.router.navigate(["kality/imprimerliste"]);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Generation option",
      buttons: [
        {
          text: "Plans avec reserves",
          icon: "document",
          handler: () => {
            this.presentAlertConfirm();
          }
        },
        {
          text: "Tous les plans",
          icon: "file-tray-full-outline",
          handler: () => {
            this.presentAlertConfirm();
          }
        },
        {
          text: "Annuler",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    await actionSheet.present();
  }

  removeItem() {
    alert("Explication maquette : Item devrait maintenant etre ferme!");
  }
}
