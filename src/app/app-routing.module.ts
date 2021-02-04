import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "kality", loadChildren: "./pages/kality/kality.module#KalityModule" },
  { path: "app", loadChildren: "./app.module" },
  { path: "", redirectTo: "kality", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
