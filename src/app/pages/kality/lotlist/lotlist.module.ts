import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";

import { BatimentComponent } from "./batiment.component";
import { BatimentCardComponent } from "./batimentCard.component";
import { LotListComponent } from "./lotlist.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
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
            path: "",
            redirectTo: "batimentA",
            pathMatch: "full"
          }
        ]
      }
    ])
  ],
  declarations: [BatimentCardComponent, BatimentComponent, LotListComponent]
})
export class LotListModule {}
