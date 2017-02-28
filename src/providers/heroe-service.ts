import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { User } from '../models/user.model';

const HEROES: User[] = [
  new User('http://images.zaazu.com/img/Wolverine-Wolverine-X-men-Logan-smiley-emoticon-001162-large.gif', 'Logan', 'logan@gmail.com'),
  new User('assets/imgs/70.jpg', 'rogue', 'b@gmail.com'),
  new User('assets/imgs/93.jpg', 'magneto', 'c@gmail.com'),
  new User('assets/imgs/94.jpg', 'goku', 'd@gmail.com'),
  new User('assets/imgs/99.jpg', 'vegeta', 'e@gmail.com'),
  new User('assets/imgs/70.jpg', 'otro 1', 'b@gmail.com'),
  new User('assets/imgs/93.jpg', 'otro 2', 'c@gmail.com'),
  new User('assets/imgs/94.jpg', 'otro 3', 'd@gmail.com'),
  new User('assets/imgs/99.jpg', 'otro 4', 'e@gmail.com')
];

@Injectable()
export class HeroeService {

  constructor(public http: Http) {
    console.log('Hello HeroeService Provider');
  }

  getAll(){
    return HEROES;
  }

}
