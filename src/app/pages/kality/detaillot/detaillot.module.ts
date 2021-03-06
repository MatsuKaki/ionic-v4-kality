import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";

import { AcquereurComponent } from "../listereserves/acquereur.component";
import { LocataireComponent } from "../listereserves/locataire.component";
import { AgenceComponent } from "../listereserves/agence.component";
import { ReservesComponent } from "../listereserves/reserves.component";
import { DetailLotComponent } from "./detaillot.component";
import { PrintingOptionsComponent } from "../listereserves/printingoptions.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: DetailLotComponent,
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
            redirectTo: "reserves",
            pathMatch: "full"
          }
        ]
      }
    ])
  ],
  declarations: [
    DetailLotComponent,
    ReservesComponent,
    AcquereurComponent,
    AgenceComponent,
    LocataireComponent,
    PrintingOptionsComponent
  ],
  entryComponents: [PrintingOptionsComponent]
})
export class DetailLotModule {}
