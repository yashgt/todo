import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoService } from './ToDoService.service';
import { ToDo } from '../../../todosvr/src/models/ToDo';

@Component({
  selector: 'todo-detail',
  templateUrl: './ToDoDetail.component.html',
  styleUrls: ['./ToDoDetail.component.css']
})
export class ToDoDetail implements OnInit {
  id:string;
  todoObj: ToDo;
  constructor(private activeroute:ActivatedRoute, private todo:ToDoService) { }

  ngOnInit() {
    //read the route parameter 'id'
    this.activeroute.params.subscribe(paramvalues=>{
      this.id = paramvalues['id'];

      //QUERY: Before the Async function completes, the UI shows empty object and shows an error. How to fix it?
      this.todo.GetToDo(this.id).subscribe(
        (todoObj:ToDo)=>{this.todoObj = todoObj}
        );
    })
  }

}
