import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";

import { ReservesComponent } from "./reserves.component";
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
            path: "reserves",
            children: [
              {
                path: "",
                component: ReservesComponent
              }
            ]
          },
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
  declarations: [
    ListeReservesComponent,
    ReservesComponent,
    AcquereurComponent,
    AgenceComponent,
    LocataireComponent
  ]
})
export class ListeReservesModule {}
