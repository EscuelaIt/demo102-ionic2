import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user.model';

import { HeroeService } from '../../providers/heroe-service';

@Component({
  selector: 'page-heroes',
  templateUrl: 'heroes.html'
})
export class HeroesPage {

  heroes: User[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private heroService: HeroeService
  ) {}

  ionViewDidLoad() {
    this.heroes = this.heroService.getAll();
  }

}
