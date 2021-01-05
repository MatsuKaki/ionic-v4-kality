import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "action-sheet",
    loadChildren: "./pages/action-sheet/action-sheet.module#ActionSheetModule"
  },
  { path: "alert", loadChildren: "./pages/alert/alert.module#AlertModule" },
  { path: "anchor", loadChildren: "./pages/anchor/anchor.module#AnchorModule" },
  { path: "avatar", loadChildren: "./pages/avatar/avatar.module#AvatarModule" },
  {
    path: "back-button",
    loadChildren: "./pages/back-button/back-button.module#BackButtonModule"
  },
  { path: "button", loadChildren: "./pages/button/button.module#ButtonModule" },
  { path: "card", loadChildren: "./pages/card/card.module#CardModule" },
  {
    path: "checkbox",
    loadChildren: "./pages/checkbox/checkbox.module#CheckBoxModule"
  },
  { path: "chip", loadChildren: "./pages/chip/chip.module#ChipModule" },
  { path: "kality", loadChildren: "./pages/kality/kality.module#KalityModule" },
  { path: "app", loadChildren: "./app.module" },
  { path: "", redirectTo: "kality", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
