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
import { SoldeComponent } from "./solde/solde.component";
import { ClesComponent } from "./cles/cles.component";
import { PVInfoComponent } from "./pvinfo/pvinfo.component";
import { PVDocumentsComponent } from "./pvdocuments/pvdocuments.component";
import { ImprimerListeComponent } from "./imprimerliste/imprimerliste.component";
import { ImprimerPVComponent } from "./imprimerpv/imprimerpv.component";
import { EditionDocumentsComponent } from "./editiondocuments/editiondocuments.component";
import { HerveMartinComponent } from "./editiondocuments/hervemartin.component";
import { VisiteEntrepriseComponent } from "./visiteentreprise/visiteentreprise.component";
import { ReserveEntrepriseComponent } from "./reserve/reserveentreprise.component";

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
        path: "solde",
        component: SoldeComponent
      },
      {
        path: "cles",
        component: ClesComponent
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
        path: "imprimerpv",
        component: ImprimerPVComponent
      },
      {
        path: "pvinfo",
        component: PVInfoComponent
      },
      {
        path: "pvdocuments",
        component: PVDocumentsComponent
      },
      {
        path: "editiondocuments",
        component: EditionDocumentsComponent
      },
      {
        path: "editiondocuments/hervemartin",
        component: HerveMartinComponent
      },
      {
        path: "visiteentreprise",
        component: VisiteEntrepriseComponent
      },
      {
        path: "reserveentreprise/:id",
        component: ReserveEntrepriseComponent
      }
    ])
  ],
  declarations: [
    OperationComponent,
    ReserveComponent,
    SizeDetectorComponent,
    CompteurComponent,
    SoldeComponent,
    ClesComponent,
    PVInfoComponent,
    PVDocumentsComponent,
    ImprimerListeComponent,
    ImprimerPVComponent,
    EditionDocumentsComponent,
    HerveMartinComponent,
    VisiteEntrepriseComponent,
    ReserveEntrepriseComponent
  ],
  providers: [ResizeService]
})
export class KalityModule {}
