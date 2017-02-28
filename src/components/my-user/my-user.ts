import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'my-user',
  templateUrl: 'my-user.html'
})
export class MyUserComponent {

  @Input() user: User = new User();

  constructor(
    public alertCtrl: AlertController
  ) {}

  show(){
    let alert = this.alertCtrl.create({
      title: this.user.name,
      subTitle: 'mi correo es' + this.user.email,
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
