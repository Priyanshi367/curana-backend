import type { Schema, Struct } from '@strapi/strapi';

export interface MenuRoleSelector extends Struct.ComponentSchema {
  collectionName: 'components_menu_role_selectors';
  info: {
    displayName: 'role-selector';
    icon: 'apps';
  };
  attributes: {
    role: Schema.Attribute.Enumeration<
      ['provider', 'health_plan_user', 'corporate']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'menu.role-selector': MenuRoleSelector;
    }
  }
}
