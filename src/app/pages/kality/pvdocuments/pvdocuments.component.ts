import { Component } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "pvdocuments-component",
  templateUrl: "./pvdocuments.component.html"
})
export class PVDocumentsComponent {
  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  async presentAlert() {
    console.log("Print clicked");
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Attention",
      message: "H1 et H2 ne peuvent pas être sélectionnés en même temps",
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
          text: "[TEST] Continuer",
          handler: () => {
            this.router.navigate(["kality/imprimerpv"]);
          }
        }
      ]
    });

    await alert.present();
  }
}
