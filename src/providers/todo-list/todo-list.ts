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
    { title: "Faire les courses", done: false },
    { title: "Faire le ménage", done: true },
    { title: "Acheter du pain", done: false },
    { title: "Faire des crêpes", done: false },
    { title: "Faire du sport", done: true },
    { title: "RDV chez le medecin", done: true},
    { title: "Trouver un stage", done: false}
  ];

  getAll() {
    return this.todoList;
  }

  addOne(task) {
    this.todoList.push(task);
  }

  updateOne(task, pos) {
    this.todoList.splice(pos, 1, task);
  }

  deleteOne(pos) {
    this.todoList.splice(pos, 1);
  }

}
