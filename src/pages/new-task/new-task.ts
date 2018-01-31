import { TodoListProvider } from './../../providers/todo-list/todo-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-task',
  templateUrl: 'new-task.html',
})
export class NewTaskPage {

  task = {
    title: "", done: false
  }

  position = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: TodoListProvider) {
    this.task = navParams.get('task');
    this.position = navParams.get('pos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTaskPage');
  }

  validateNewTask() {
    if (this.position == null) {
      this.provider.addOne(this.task);
    } else {
      this.provider.updateOne(this.task, this.position);
    }
    this.navCtrl.pop();
  }

}
