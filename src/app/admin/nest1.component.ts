import {Component} from '@angular/core';
import { AdminService } from './admin.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

/**
 * This is a simple component used as the component for the app.foo.nest1 state
 * to demonstrate grandchildren states
 */
let template = ` 

<h5>Nest 1 component</h5> 

<form class="forms" [formGroup]="adminForm" (ngSubmit)="onSubmit()" novalidate>
	<input #name formControlName="name" type="text">
	<button [disabled]="!adminForm.valid" type="submit" >submit</button>
</form>


`;

@Component({
  selector: 'nest1',
  template: template
})
export class Nest1Component { 
	adminForm: FormGroup;
	constructor(
	    private adminService: AdminService, 
	    private formBuilder: FormBuilder) {

	    this.adminForm = this.formBuilder.group({
	      'name': [this.adminService.getAdmin().name, Validators.required]
	    });
	}

	onSubmit(){
		console.log(this.adminForm.value);
		this.adminService.setAdmin(this.adminForm.value);
		console.log(this.adminService.getAdmin());
	}
}