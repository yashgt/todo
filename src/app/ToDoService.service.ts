import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToDo } from '../../../todosvr/src/models/ToDo';

@Injectable({
  providedIn: 'root' //As good as providing in AppModule
})
export class ToDoService {

constructor(private http:HttpClient) { }

//Good if you want to Cancel a request
GetToDos():Observable<ToDo[]>{
  //return this.http.get('http://jsonplaceholder.typicode.com/users');
  return this.http.get<ToDo[]>('http://localhost:3000/api/todos'); //Better cast it.
}

GetToDo(id:string):Observable<ToDo>{
  //return this.http.get('http://jsonplaceholder.typicode.com/users');
  return this.http.get<ToDo>('http://localhost:3000/api/todos/'+id); //Better cast it.
}

Delete(id:string):Observable<any>{
  return this.http.delete<any>("http://localhost:3000/api/todos/"+id);
}

CreateToDo(todoObj:ToDo):Observable<ToDo>{
  return this.http.post<ToDo>('http://localhost:3000/api/todos', todoObj); //Better cast it.
}

MarkAsDone(id:string):Observable<ToDo>{
  var obj = {done: true}; //PATCH is for updating the object only partially
  return this.http.patch<ToDo>("http://localhost:3000/api/todos/"+id, obj);
}

}




