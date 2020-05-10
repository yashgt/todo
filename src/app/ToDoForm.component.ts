import { Component, OnInit } from '@angular/core';
import { NgModel} from '@angular/forms';
import {ToDo} from '../../../todosvr/src/models/ToDo';
import { ToDoService } from './ToDoService.service';


@Component({
  selector: 'todo-form',
  templateUrl: './ToDoForm.component.html',
  styleUrls: ['./ToDoForm.component.css']
})
export class ToDoForm implements OnInit {
  todoObj:ToDo;

  constructor(private todo:ToDoService) { }

  ngOnInit() {
    this.todoObj = new ToDo();
  }

  submit(){
    this.todoObj.done = false;
    this.todo.CreateToDo(this.todoObj).subscribe((todoObj:ToDo) => {
      this.todoObj = todoObj;
      console.log("Saved with ID:", this.todoObj.id);
    })
  }

}
