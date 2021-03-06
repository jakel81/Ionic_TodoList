import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TodoListProvider } from '../providers/todo-list/todo-list';
import { NewTaskPage } from '../pages/new-task/new-task';
import { updateDate } from 'ionic-angular/util/datetime-util';
import { UpdateTaskPage } from '../pages/update-task/update-task';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewTaskPage,
    UpdateTaskPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewTaskPage,
    UpdateTaskPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoListProvider
  ]
})
export class AppModule {}
