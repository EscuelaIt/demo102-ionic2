import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user.model';

const USERS: User[] = [
  new User('assets/imgs/15.jpg', 'Camila', 'a@gmail.com'),
  new User('assets/imgs/70.jpg', 'Kelly', 'b@gmail.com'),
  new User('assets/imgs/93.jpg', 'Johana', 'c@gmail.com'),
  new User('assets/imgs/94.jpg', 'Nicolas', 'd@gmail.com'),
  new User('assets/imgs/99.jpg', 'Andres', 'e@gmail.com')
];

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  users: User[] = USERS;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

}
