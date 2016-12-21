import { trace, Category, UIRouterModule, UIView } from "ui-router-ng2";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MAIN_STATES } from "./app.states";
import { AppComponent } from './app.component';
import { MyRootUIRouterConfig } from "./router.config";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UIRouterModule.forRoot({
      states: MAIN_STATES,
      otherwise: { state: 'app', params: {} },
      useHash: false,
      configClass: MyRootUIRouterConfig
    }),
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
  ],
  bootstrap: [UIView]
})
export class AppModule { }
