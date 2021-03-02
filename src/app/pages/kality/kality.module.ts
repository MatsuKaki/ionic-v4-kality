import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { RouterModule } from "@angular/router";
import { IonicSelectableModule } from "ionic-selectable";
import { PdfViewerModule } from "ng2-pdf-viewer";

import { OperationComponent } from "./operation/operation.component";
import { ReserveComponent } from "./reserve/reserve.component";
import { CompteurComponent } from "./compteur/compteur.component";
import { ImprimerListeComponent } from "./imprimerliste/imprimerliste.component";
import { EditionDocumentsComponent } from "./editiondocuments/editiondocuments.component";

import { SizeDetectorComponent } from "./size-detector/size-detector.component";
import { ResizeService } from "./size-detector/resize.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    DragDropModule,
    PdfViewerModule,
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
        loadChildren: "./detaillot/detaillot.module#DetailLotModule"
      },
      {
        path: "compteur",
        component: CompteurComponent
      },
      {
        path: "reserve/:id",
        component: ReserveComponent
      },
      {
        path: "imprimerliste",
        component: ImprimerListeComponent
      },
      {
        path: "ed",
        component: EditionDocumentsComponent
      }
    ])
  ],
  declarations: [
    OperationComponent,
    ReserveComponent,
    SizeDetectorComponent,
    CompteurComponent,
    ImprimerListeComponent,
    EditionDocumentsComponent
  ],
  providers: [ResizeService]
})
export class KalityModule {}
