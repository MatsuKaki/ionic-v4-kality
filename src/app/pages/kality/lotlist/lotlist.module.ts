import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { IonicSelectableModule } from "ionic-selectable";

import { BatimentComponent } from "./batiment.component";
import { EntrepriseComponent } from "./entreprise.component";
import { RechercheEntrepriseComponent } from "./rechercheentreprise.component";
import { LotListComponent } from "./lotlist.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    RouterModule.forChild([
      {
        path: "",
        component: LotListComponent,
        children: [
          {
            path: "batimentA",
            children: [
              {
                path: "",
                component: BatimentComponent
              }
            ],
            data: { batiment: "A" }
          },
          {
            path: "batimentB",
            children: [
              {
                path: "",
                component: BatimentComponent
              }
            ],
            data: { batiment: "B" }
          },
          {
            path: "batimentC",
            children: [
              {
                path: "",
                component: BatimentComponent
              }
            ],
            data: { batiment: "C" }
          },
          {
            path: "entreprise",
            children: [
              {
                path: "",
                redirectTo: "recherche",
                pathMatch: "full"
              },
              {
                path: "recherche",
                component: EntrepriseComponent
              },
              {
                path: "resultat",
                component: RechercheEntrepriseComponent
              }
            ]
          },
          {
            path: "",
            redirectTo: "batimentA",
            pathMatch: "full"
          }
        ]
      }
    ])
  ],
  declarations: [
    EntrepriseComponent,
    RechercheEntrepriseComponent,
    BatimentComponent,
    LotListComponent
  ]
})
export class LotListModule {}
