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

  async presentPVAlertConfirm() {
    console.log("Print clicked");
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Attention",
      message:
        "Un PV existant a été détecté. Si vous continuez, il sera remplacé.",
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
            this.router.navigate(["kality/pvinfo"]);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentGenerateActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Generation option",
      buttons: [
        {
          text: "Liste des réserves",
          icon: "document",
          handler: () => {
            this.presentAlertConfirm();
          }
        },
        {
          text: "Liste des réserves - Tous les plans",
          icon: "file-tray-full-outline",
          handler: () => {
            this.presentAlertConfirm();
          }
        },
        {
          text: "PV",
          icon: "document",
          handler: () => {
            this.presentPVAlertConfirm();
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

  async presentOpenActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Document to open",
      buttons: [
        {
          text: "Liste des réserves",
          icon: "document",
          href: "kality/imprimerliste"
        },
        {
          text: "PV",
          icon: "document",
          href: "kality/imprimerpv"
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
