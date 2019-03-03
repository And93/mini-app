import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {usersRouterComponents, UsersRoutingModule} from './users-routing.module';

import {UserComponent} from './components';
import {UsersServicesModule} from './users-services.module';

import {UsersAPIProvider} from './users.config';

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
  ],
  providers: [
    UsersAPIProvider
  ]
})
export class UsersModule {
}
