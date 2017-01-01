import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** MyCommon Module: Re-exports BrowserModule and HttpModule */
@NgModule({
  exports: [CommonModule, HttpModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule { }
