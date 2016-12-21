import { AdminComponent } from './admin.component';
import { Ng2StateDeclaration } from "ui-router-ng2";
import { AdminHeaderComponent } from "./admin.header.component";
import { AdminFooterComponent } from "./admin.footer.component";
import { Nest1Component } from "./nest1.component";
import { Nest2Component } from "./nest2.component";
/**
 * This file defines the states for the `foo` module.
 * The states are exported as an array and imported in the FooModule.
 */
export let ADMIN_STATES: Ng2StateDeclaration[] = [
    // A state for the 'app.foo' submodule,
    // It fills the unnamed <ui-view> ($default) (in the AppComponent from the `app` state) with `FooComponent`
    {
      name: 'app.admin',
      url: '/admin',
      views: {
        $default: {component: AdminComponent},
        header: {component: AdminHeaderComponent},
        footer: {component: AdminFooterComponent}
      }
    },

    // A child state of app.foo; it fills the <ui-view> in app.foo with Nest1Component
    { 
      name: 'app.admin.nest1', 
      url: '/nest1',
      component: Nest1Component 
    },

    // A child state of app.foo; it fills the <ui-view> in app.foo with Nest2Component
    {
      name: 'app.admin.nest2',
      url: '/nest2',
      component: Nest2Component
    }
];