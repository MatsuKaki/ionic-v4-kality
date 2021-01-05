import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "Login-component",
  templateUrl: "./login.component.html"
})
export class LoginComponent {
  constructor(
    public toastController: ToastController,
    private modalCtrl: ModalController
  ) {}

  login(username, password) {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
    this.loadingFinished();
  }

  async loadingFinished() {
    const toast = await this.toastController.create({
      message: "Vos operations ont ete correctement synchronisees.",
      duration: 2000,
      position: "middle"
    });
    toast.present();
  }

  onClick() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}
