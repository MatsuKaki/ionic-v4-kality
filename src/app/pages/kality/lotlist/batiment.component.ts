import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { OnDestroy, Subscription } from "@angular/core";

@Component({
  selector: "batiment-component",
  templateUrl: "./batiment.component.html"
})
export class BatimentComponent implements OnDestroy {
  private obsData: Subscription;
  public batiment: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.obsData = this.route.data.subscribe(data => {
      this.batiment = data["batiment"];
    });
  }

  ngOnDestroy(): void {
    this.obsData.unsubscribe();
  }

  onOpen() {
    this.router.navigate(["kality/detaillot"]);
  }
}
