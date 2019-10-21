import { Component, OnInit } from '@angular/core';
import { PermissionService, Roles } from './services/permission.service';
import { PermissionNames, PermissionRole } from './types/permission.types';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  permission = PermissionNames;
  roles: string[] = null;
  Roles = Roles;
  selectedRole: PermissionRole = null;
  selectedOperation: any = null;
  canAccess: boolean = false;
  constructor( private p_s: PermissionService ) {
    let val = p_s.hasAccess( ['admin', 'dev'], 'superAdmin');
  }

  ngOnInit() {
    this.roles = Object.keys(Roles);
  }

  calculatePermission() {
    if(!this.selectedRole || !this.selectedOperation) {
      return null;
    }
    this.canAccess = this.p_s.hasAccess( [this.selectedRole], this.selectedOperation);
    return this.canAccess;
  }
}
