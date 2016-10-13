import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgModule } from "@angular/core";

import { appRoutes, navigatableComponents } from "./app.routing";
import { AppComponent } from "./app.component";
import { Tab1Component } from "./page2/tab1.component";
import { Tab2Component } from "./page2/tab2.component";

@NgModule({
  declarations: [
    AppComponent,
    ...navigatableComponents,
    Tab1Component,
    Tab2Component
  ],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes)
  ]
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);