import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../models/user.model';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  user: User = new User('assets/imgs/15.jpg', 'Camila', 'a@gmail.com');

  constructor(public navCtrl: NavController) {

  }

}
