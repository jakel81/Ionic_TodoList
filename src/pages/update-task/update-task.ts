
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoListProvider } from '../../providers/todo-list/todo-list';

/**
 * Generated class for the UpdateTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-task',
  templateUrl: 'update-task.html',
})
export class UpdateTaskPage {

  task = {
    title: "", done: false
  }

  position = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: TodoListProvider) {
    this.task = navParams.get('task');
    this.position = navParams.get('pos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateTaskPage');
  }

  updateTask() {
    if (this.position !== null) {
      console.log("inUpdateTask");
      this.provider.updateOne(this.task, this.position);
    }
    this.navCtrl.pop();
  }

}
