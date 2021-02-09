import { Component } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "reserves-component",
  templateUrl: "./reserves.component.html"
})
export class ReservesComponent {
  constructor(
    private router: Router,
    private alertController: AlertController
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
}
