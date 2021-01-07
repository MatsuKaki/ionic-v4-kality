import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { IonicSelectableModule } from "ionic-selectable";

import { OperationComponent } from "./operation/operation.component";
import { DetailLotComponent } from "./detaillot/detaillot.component";
import { ReserveComponent } from "./reserve/reserve.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    RouterModule.forChild([
      {
        path: "",
        component: OperationComponent
      },
      {
        path: "lotlist",
        loadChildren: "./lotlist/lotlist.module#LotListModule"
      },
      {
        path: "detaillot",
        component: DetailLotComponent
      },
      {
        path: "reserve/:id",
        component: ReserveComponent
      }
    ])
  ],
  declarations: [OperationComponent, DetailLotComponent, ReserveComponent]
})
export class KalityModule {}
