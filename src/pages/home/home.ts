import { UpdateTaskPage } from './../update-task/update-task';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoListProvider } from '../../providers/todo-list/todo-list';
import { NewTaskPage } from '../new-task/new-task';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Events } from 'ionic-angular/util/events';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public todoList;

  constructor(public navCtrl: NavController, public envents: Events, public provider: TodoListProvider) {
    this.todoList = this.provider.getAll();
  }

  deleteTask(pos) {
    this.todoList.splice(pos, 1);
  }

  updateTask(index, data) {
    this.navCtrl.push(UpdateTaskPage, { task: data, pos: index });
  }

  addTask() {
    var data = { task: { title: "", done: false }, pos: null };
    this.navCtrl.push(NewTaskPage, data);
  }

}
