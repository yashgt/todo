import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ToDoList} from './ToDoList.component';
import {ToDoForm} from './ToDoForm.component';
import {ToDoDetail} from './ToDoDetail.component';


//Primary routes or root routes
const routes: Routes = [
  {
    path:'todo/new',
    component: ToDoForm
  },
  {
    path:'todo/:id',
    component: ToDoDetail
  },
  {
    path:'todo', // todo/ may be confused with todo/:id with :id being empty. Hence use plain todo
    component: ToDoList
  },
];

//root routes are configured using forRoot.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
