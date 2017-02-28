import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'my-hero',
  templateUrl: 'my-hero.html'
})
export class MyHeroComponent {

  @Input() hero: User = new User();

  constructor(
    public alertCtrl: AlertController    
  ) {}

  show(){
    let alert = this.alertCtrl.create({
      title: this.hero.name,
      subTitle: 'mi correo es' + this.hero.email,
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
