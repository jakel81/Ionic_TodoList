import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoListProvider } from '../../providers/todo-list/todo-list';
import { NewTaskPage } from '../new-task/new-task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todoList: any;

  constructor(public navCtrl: NavController, public provider: TodoListProvider) {

  }

  deleteTask(pos) {
    this.todoList.splice(pos, 1);
  }

  updateTask(index, data) {
    this.navCtrl.push(NewTaskPage, { task: data, pos: index });
  }

  addTask() {
    var data = { task: { title: "", done: false }, pos: null };
    this.navCtrl.push(NewTaskPage, data);
  }

}
