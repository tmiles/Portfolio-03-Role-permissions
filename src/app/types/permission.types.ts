export interface PermissionRole {
  name: string;
  id: string; // unique identifier for permission role
  permissions: PermissionTypes;
  description?: string;
}

export interface PermissionTypes {
  // Core permissions
  admin?: boolean;
  superAdmin?: boolean;

  userManagement?: boolean;

  edit?: boolean;
  dev?: boolean;
  view?: boolean;
  publish?: boolean;

  // Custom module permissions
}

export const PermissionNames = [
  'admin', 'superAdmin',  'userManagement', 'edit',
  'dev', 'view', 'publish'
];