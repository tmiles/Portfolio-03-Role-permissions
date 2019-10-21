import { Injectable } from '@angular/core';
import { PermissionRole, PermissionTypes } from '../types/permission.types';

@Injectable()
export class PermissionService {

  constructor() { }

  consolidateRole(roles: PermissionRole[]) {
    let permissionObject = {};
    roles.forEach((role: PermissionRole) => {
      let perms: PermissionTypes = Roles[role].permissions;
      Object.keys(perms).forEach((perm) => {
        if(perm in permissionObject) {
          // do a true/false item
          permissionObject[perm] = (permissionObject[perm] || perms[perm]);
        } else {
          permissionObject[perm] = perms[perm];
        }
      })
    })
    return permissionObject;
  }

  hasAccess(roles: PermissionRole[], operation: string) {
    let permissionObject = this.consolidateRole(roles);
    return ((operation in permissionObject) && permissionObject[operation]);
  }

}

export const Roles: { [name: string]: PermissionRole } = {
  'super-admin': {
    name: 'Super Admin',
    description: 'This is the highest level of permissions',
    id: 'super-admin',
    permissions: {
      admin: true,
      superAdmin: true,
      userManagement: true,
      edit: true,
      dev: true,
      view: true,
      publish: true
    }
  },
  'admin': {
    name: 'Admin',
    description: 'This is the second level of permissions',
    id: 'admin',
    permissions: {
      admin: true,
      edit: true,
      view: true,
      publish: true,
    }
  },
  'user-admin': {
    name: 'User Admin',
    description: 'This user role is for managing the users on the platform.',
    id: 'user-admin',
    permissions: {
      admin: true,
      userManagement: true,
      edit: true,
      view: true,
      publish: true
    }
  },
  'dev': {
    name: 'Dev',
    description: 'This is a dev role',
    id: 'dev',
    permissions:
    {
      dev: true
    }
  }
}

