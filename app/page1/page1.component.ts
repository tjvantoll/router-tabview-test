import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "my-page1",
  template: `
    <Label (tap)='navigate()' text='Navigate to another page'></Label>
  `
})
export class Page1Component {
  constructor(private routerExtensions: RouterExtensions) {}

  navigate() {
    this.routerExtensions.navigate(["/page2"]);
  }
}