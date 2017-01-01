import {UIRouterModule} from "ui-router-ng2";
import {ADMIN_STATES} from "./admin.states";
import {SharedModule} from "../shared.module";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from "./admin.header.component";
import { AdminFooterComponent } from "./admin.footer.component";
import { Nest1Component } from "./nest1.component";
import { Nest2Component } from "./nest2.component";
import { AdminService } from './admin.service';


@NgModule({
  imports: [
    CommonModule,
    UIRouterModule.forChild({ states: ADMIN_STATES }),
    SharedModule
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    Nest1Component,
    Nest2Component
  ],
  providers: [AdminService]
})
export class AdminModule { }
