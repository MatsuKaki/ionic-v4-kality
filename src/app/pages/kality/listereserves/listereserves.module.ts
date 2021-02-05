import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { KalityModule } from "../kality.module";

import { AcquereurComponent } from "./acquereur.component";
import { LocataireComponent } from "./locataire.component";
import { AgenceComponent } from "./agence.component";
import { ListeReservesComponent } from "./listereserves.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: ListeReservesComponent,
        children: [
          {
            path: "acquereur",
            children: [
              {
                path: "",
                component: AcquereurComponent
              }
            ]
          },
          {
            path: "agence",
            children: [
              {
                path: "",
                component: AgenceComponent
              }
            ]
          },
          {
            path: "locataire",
            children: [
              {
                path: "",
                component: LocataireComponent
              }
            ]
          },
          {
            path: "",
            redirectTo: "acquereur",
            pathMatch: "full"
          }
        ]
      }
    ])
  ],
  declarations: [ListeReservesComponent]
})
export class ListeReservesModule {}
