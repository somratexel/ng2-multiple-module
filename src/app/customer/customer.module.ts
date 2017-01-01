import {UIRouterModule} from "ui-router-ng2";
import {CUSTOMER_STATES} from "./customer.states";
import {SharedModule} from "../shared.module";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule.forChild({ states: CUSTOMER_STATES }),
    SharedModule
  ],
  declarations: [CustomerComponent]
})
export class CustomerModule { }
