import { Component, OnInit } from '@angular/core';
import {ToDo} from '../../../todosvr/src/models/ToDo';
import { ToDoService } from './ToDoService.service';

@Component({
  selector: 'todolist',
  templateUrl: './ToDoList.component.html',
  styleUrls: ['./ToDoList.component.css']
})
export class ToDoList implements OnInit {
  todoList:Array<ToDo>;
  constructor(private todo:ToDoService) { }

  //At Load time
  ngOnInit() {

/*     let t: ToDo = new ToDo();
    t.id = "1";
    t.name = "My task";
    this.todoList.push(t);
 */
this.todo.GetToDos().subscribe( (todos:ToDo[]) => {
  this.todoList = todos;
});

}

//Functions for UI actions
done(id:string) {
  console.log("Marking ", id , " as done");
  this.todo.MarkAsDone(id).subscribe( () =>{
    console.log("Done");
    this.todoList = this.todoList.filter( t=> t.id!=id );
  });
}

}
