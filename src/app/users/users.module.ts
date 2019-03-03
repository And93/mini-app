import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {usersRouterComponents, UsersRoutingModule} from './users-routing.module';

import {UserComponent} from './components';
import {UsersServicesModule} from './users-services.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    UsersServicesModule
  ],
  declarations: [
    usersRouterComponents,
    UserComponent
  ]
})
export class UsersModule {
}
