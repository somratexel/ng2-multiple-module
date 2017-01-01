import { Injectable, Inject } from '@angular/core';

@Injectable()
export class AdminService {

  public adminData: Object;

  constructor() { 
  	this.adminData = { name: ''};
  }

  setAdmin(data) {
    this.adminData = data;
  }

  getAdmin(){
  	return this.adminData;
  }
 

}

