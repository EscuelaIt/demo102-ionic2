import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user.model';

const HEROES: User[] = [
  new User('assets/imgs/15.jpg', 'Logan', 'logan@gmail.com'),
  new User('assets/imgs/70.jpg', 'rogue', 'b@gmail.com'),
  new User('assets/imgs/93.jpg', 'magneto', 'c@gmail.com'),
  new User('assets/imgs/94.jpg', 'goku', 'd@gmail.com'),
  new User('assets/imgs/99.jpg', 'vegeta', 'e@gmail.com')
];

@Component({
  selector: 'page-heroes',
  templateUrl: 'heroes.html'
})
export class HeroesPage {

  heroes: User[] = HEROES;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeroesPage');
  }

}
