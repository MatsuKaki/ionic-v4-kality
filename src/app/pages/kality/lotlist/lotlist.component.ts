import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "lotlist-component",
  templateUrl: "./lotlist.component.html"
})
export class LotListComponent {
  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private toastController: ToastController
  ) {}

  async onBack() {
    this.router.navigate(["kality"]);
  }

  async onSynchronize() {
    let alert = await this.alertCtrl.create({
      title: "Login",
      message: "Merci de saisir vos identifiants",
      inputs: [
        {
          name: "login",
          placeholder: "Login"
        },
        {
          name: "password",
          placeholder: "Password",
          type: "password"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Save",
          handler: () => {
            this.loadingFinished();
          }
        }
      ]
    });

    return await alert.present();
  }

  async loadingFinished() {
    const toast = await this.toastController.create({
      message: "Vos operations ont ete correctement synchronisees.",
      showCloseButton: true,
      closeButtonText: "OK",
      position: "middle"
    });
    return await toast.present();
  }
}
