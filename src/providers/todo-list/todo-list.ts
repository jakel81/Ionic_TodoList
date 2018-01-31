import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TodoListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoListProvider {

  todoList = [
    { title: "Suivre les cours", done: false },
    { title: "Faire le ménage", done: true },
    { title: "Acheter du pain", done: false },
    { title: "Faire des crêpes", done: false },
    { title: "Faire du sport", done: true }
  ];

  getAll() {
    return this.todoList;
  }

  addOne(task) {
    this.todoList.push(task);
  }

  updateOne(task, pos) {
    this.todoList[pos] = task;
  }

  deleteOne(pos) {
    this.todoList.splice(pos, 1);
  }

}
