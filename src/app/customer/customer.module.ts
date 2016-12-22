import {UIRouterModule} from "ui-router-ng2";
import {CUSTOMER_STATES} from "./customer.states";
import {SharedModule} from "../shared.module";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule.forChild({ states: CUSTOMER_STATES }),
    SharedModule
  ],
  declarations: [CustomerComponent, ProfileComponent]
})
export class CustomerModule { }
