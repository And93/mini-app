import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {StoreModule} from '@ngrx/store';

import {TasksRoutingModule} from './tasks-routing.module';
import {TasksServicesModule} from './tasks-services.module';
import {TaskListComponent, TaskComponent, TaskFormComponent} from './components';
import {tasksReducer} from './../core/+store';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule,
    TasksServicesModule,
    StoreModule.forFeature('tasks', tasksReducer)
  ],
  declarations: [
    TaskListComponent,
    TaskComponent,
    TaskFormComponent
  ]
})
export class TasksModule {
}
